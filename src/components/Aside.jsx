import React from "react";
import developer from "/images/developer.jpg";
import { GiClawSlashes } from "react-icons/gi";





const Aside = ({contactInfo,setContactBar,contactBar}) => {

    

  return (  
  <aside className="sidebar">
    <div className="sidebar-info">
      <figure className="avatar-box">
        <img src={developer} alt="" width={80} />
      </figure>
      <div className="info-content">
        <h1 className="name">Abdur Rahman</h1>
        <p className="title --fs-3">Frontend Developer</p>
      </div>
      <button className="info_more-btn uiverse" onClick={()=>setContactBar(!contactBar)}
      data-tooltip-id="tool" data-tooltip-content='Contact Me'
      >
        <GiClawSlashes />
      </button>
    </div>

    {/* contact info  */}

    <div className="sidebar-info-more">
    <hr className="separator2"/>
    {contactInfo}
    </div>

  </aside>
  )
};

export default Aside;
