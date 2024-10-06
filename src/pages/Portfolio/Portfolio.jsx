import React, { useEffect, useState } from "react";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
        setFilteredProjects(data);
      });
  }, []);

  const handleFilterClick = (cat)=>{
    setSelectedCategory(cat)
    if(cat === 'All'){
      setFilteredProjects(projects)
    }else{
      setFilteredProjects(projects.filter((project)=>project.category===cat))
    }
  }

  return (
    <section>
      <header>
        <h2 className="h2 article-title">Portfolio</h2>
      </header>

      {/* filter  */}
      <ul className="filter-list">
        {["All", "Web design", "Applications", "Web development"].map(
          (category) => {
            return (
              <li key={category} className="filter-item">
                <button
                  className={category === selectedCategory ? "active" : ""}
                  onClick={() => handleFilterClick(category)}
                >
                  {category}
                </button>
              </li>
            );
          }
        )}
      </ul>
      {/* show portfolio projects  */}
      <section className="projects">
        <ul className="project-list">
          {filteredProjects.map((project) => {
            const { id, title, category, image, link } = project;
            return (
              <li key={id} className="project-item active"

              >
                <a href={link} target="_blank">
                  <figure className="project-img">
                    <div className="project-item-icon-box">
                        <FaRegEye />  
                    </div>
                    <img src={image} alt={title} loading="lazy"/>
                  </figure>
                  <h3 className="project-title">{title}</h3>
                  <p className="project-category">{category}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default Portfolio;
