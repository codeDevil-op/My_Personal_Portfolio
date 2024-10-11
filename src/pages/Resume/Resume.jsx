import React from "react";
import { FaBookReader } from "react-icons/fa";
import TimelineItem from "./TimelineItem";
import { LiaCertificateSolid } from "react-icons/lia";
import SkillItem from "./SkillItem";
import myResume from '/abdur_rahman.pdf'
const Resume = () => {
  return (
    <section>
      <header>
        <h2 className="h2 article-title">Resume</h2>
      </header>
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <FaBookReader />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Bahauddin Zakariya University, Multan"
            date="2019-2023"
            description="Bachelors in Infromation Technology, where technology involves  implementation, support, maintenance, repair or protection of data or computer systems."
          />
          <TimelineItem
            title="Punjab Group of Colleges,Jahanian"
            date="2017-2019"
            description="Intermediate in Fsc (Fundamental Of Science) Pre-Engineering."
          />
          <TimelineItem
            title="Government Higher Secondary School, Tibba Sultanpur"
            date="2014-2016"
            description="Matriculation, Board of Intermediate & Secondary Education, Multan, ."
          />
        </ol>
        </div>
        {/* Courses  */}
        <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <LiaCertificateSolid />
          </div>
          <h3 className="h3">Courses</h3>
        </div>
        <ol className="timeline-list">
          <TimelineItem
            title="Web Development, FreeCodeCamp"
            date="April 2023/ Nov 2023"
            description="Learning frontend Development from different online sources like udemy,  
            zinotrust Udemy course to develope, optimized
            and dynimacaly working sites and for better understanding practices on freeCodeCamp."
          />
          <TimelineItem
            title="Basic IT Literacy"
            date="2017"
            description=" During the course of this programme learning
               operate computer, Prepare Official Letters,
                Keeping Email Records."
          />
        </ol>
      </div>

      {/* skill  */}

      <div className="skill">
      <h3 className="h3 skill-title">My Skills</h3>
      <ul className="skills-list content-card">
      <SkillItem
        title = 'Frontend Web Development'
        value = {80}
      />
      <SkillItem
        title = 'Web Design'
        value = {70}
      />
      <SkillItem
        title = 'WordPress'
        value = {50}
      />
      <SkillItem
        title = 'Product hunting At Amazon'
        value = {65}
      />
      </ul>
      </div>
      <div className="">
        {/* <button className="dwn-btn">
          <a href={myResume} download='abdur_rahman'>Download CV</a>

        </button> */}
        <button className='form-btn' type='submit'>
        <a href={myResume} download='abdur_rahman'>Download CV</a>
        </button>

      </div>
    </section>
  );
};

export default Resume;
