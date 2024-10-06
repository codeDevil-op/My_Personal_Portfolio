import React from "react";
import Service from "./Service";

const serviceData = 
[
    {
      "title": "Web design",
      "icon": "/images/icon-design.svg",
      "description": "The most modern and high-quality design made at a professional level."
    },
    {
      "title": "Web development",
      "icon": "/images/icon-dev.svg",
      "description": "High-quality development of sites at the professional level."
    },
    {
      "title": "Photography",
      "icon": "/images/icon-photo.svg",
      "description": "I make high-quality photos of any category at a professional level."
    },
    {
      "title": "Video Editing",
      "icon": "/images/icon-photo.svg",
      "description": "I make high-quality videos using filmora of any category at a intermediat level."
    }
  ]
  
const About = () => {
  return (
    <>
      <div className="about active">
        <header>
          <h2 className="h2 article-title">About Me</h2>
        </header>
        <section className="about-text">
          <p>
            I'm Frontend Web Developer from Jahanian, Pakistan, working in web
            development Field. I enjoy turning complex problems into simple,
            beautiful and intuitive designs.
          </p>
          <p>
            My job is to
            build your website so that it is functional and user-friendly but at
            the same time attractive. Moreover, I add personal touch to your
            product and make sure that is eye-catching and easy to use. My aim
            is to bring across your message and identity in the most creative
            way. I created many of the web designs, web sites and custom React web apps also.
          </p>
        </section>

        {/* services  */}
        <section className="service">
           <h2 className="h3 service-title">What I'm Doing</h2>
           <ul className="service-list">
            {
              serviceData.map((service,index)=>{
                const {title,icon,description} = service
                return(
                 <Service key={index}
                  title={title}
                  icon = {icon}
                  description = {description}
                 />
                )
              })
            }
           </ul>
        </section>
      </div>
    </>
  );
};

export default About;
