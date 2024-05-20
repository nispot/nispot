import 'react-vertical-timeline-component/style.min.css';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
/* import Badge from "react-bootstrap/Badge"; */
import { experience } from '../../data/data';
import "./Experience.scss"





let work = experience.map(function (work, i) {
  const technologies = work.technologies;
  const mainTechnologies = work.mainTech;

  var mainTech = mainTechnologies.map((technology, i) => {
    return (
      <span className={`btn-${work.color}`} key={i}>
       {technology}
      </span>
    );
  });
  var tech = technologies.map((technology, i) => {
    return (
      <span className="experience-badge" key={i}>
        {technology}
      </span>
    );
  });
  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={work.years}
      iconStyle={{
        background: "#AE944F",
        color: "#fff",
        textAlign: "center",
      }}
      icon={<img className="experience-icon" src={`images/${work.icon}`} alt='as coder' />}
      key={i}
    >
      <div style={{ textAlign: "left", marginBottom: "4px" }}>
        {mainTech}
      </div>

      <h3
        className="vertical-timeline-element-title"
        style={{ textAlign: "left" }}
      >
        {work.title}
      </h3>
      <h4
        className="vertical-timeline-element-subtitle"
        style={{ textAlign: "left" }}
      >
        {work.company}
      </h4>
      <p className='work-details'>{work.details}</p>
      <div className="techs">{tech}</div>
    </VerticalTimelineElement>
  );
});

export const Experience = () => {
  return <div>
      <section id="resume" className="container">
        <div className="">
          <div className="">
            <h2 className="title-section"> {`<Experience/>`} </h2>
          </div>
        </div>
        <div>
          <VerticalTimeline>
            {work}
            <VerticalTimelineElement
              iconStyle={{
                background: "#AE944F",
                color: "#fff",
                textAlign: "center",
              }}
              icon={
                <i className=""></i>
              }
            />
          </VerticalTimeline>
        </div>
        <div className='space'></div>
      </section>
    
  </div>;
};

export default Experience;
