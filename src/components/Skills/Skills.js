/* import ReactWordcloud from "react-wordcloud"; */
import { useState } from "react";
import Switch from "react-switch";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import "./Skills.scss";
import skillsList from "./skillsList";

const stylesContainer = {
  textAlign: "center",
  color: "white",
  lineHeight: "48px",
  fontFamily: "Ubuntu Mono",
  letterSpacing: "0.25em",
  display: "flex",
  justifyContent: "center",
};

const categories = [
  "All",
  "Backend",
  "CSS",
  "Database",
  "Design",
  "Frontend",
  "Javascript",
  "PHP",
  "Tools"
]




export default function Skills() {
  const [checked, setChecked] = useState(true);
  const { width } = useWindowDimensions();
  //console.log(checked)

  const [category, setCategory] = useState('All')

  const [skillsFiltered, setSkillsFiltered] = useState(skillsList)

  const handleChange = () => {
    setChecked(!checked);
  };

  const handleChangeCategory = (cat) => {
    if(cat === "All") {
      setCategory(cat);
      setSkillsFiltered(skillsList);
    }else{
      setCategory(cat);
      setSkillsFiltered(skillsList.map ( (group) => {
      return group.filter(function(item) {
        return item.tags.includes(cat.toLowerCase());
      })
      }
      )
      );
    }
    //console.log(skillsFiltered);
  };

  return (
    <section className="container skills-container">
      <h2 className="title-section"> {`<Skills/>`} </h2>
      <p className="subtilte-section">
        Here are the tools and technologies I’ve been working with:
      </p>
      <div className="skills">
        <div className="skills-sidebar">
          <label className="skills-switch">
            <span>SHOW ICONS</span>
            <Switch
              onChange={handleChange}
              checked={checked}
              onColor={"#00F89C"}
              checkedIcon={false}
              uncheckedIcon={false}
            />
          </label>
          <div>
            <p className="skills-filters">FILTERS:</p>
            <ul className="skills-list">
              {
                categories.map ((cat)=> {
                  return  <li key={cat} className={`${(category === cat) && "activecat"}`} onClick={()=>handleChangeCategory(cat)}>{cat}</li>
                })
              }
            </ul>
          </div>
        </div>

        <div className="skills-cloud animate__animated animate__zoomIn">


          {/* <div> */}
            {skillsFiltered.map((group, index) => {
              return (
                <div key={index} style={stylesContainer}>
{/*                         <MouseParallaxContainer
        containerStyles={{
          width: "100%",
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          height: "100%",
          overflow: "visible"
        }}
        useWindowMouseEvents
        resetOnLeave
      > */}
                  {group.map((skill) => {
                    return (
/*                       <MouseParallaxChild
                      key={skill.text}
                      factorX={(skill.value - 10 )/100}
                      factorY={(skill.value - 10 )/100}
                      updateStyles={{
                        overflow: "visible"
                      }}
                    > */
                     <span key={skill.text} className="skill-container" style={{  marginLeft: width < 1175 ? "10px" : "45px", fontSize: width < 1175 ? (skill.value > 29 ? (skill.value > 39 ? skill.value - 26 : skill.value - 22) : skill.value - 14) : skill.value}}>
                        {checked &&
                        <img className="skill-icon" src={`images/skills/${skill.text.toLocaleLowerCase()}.svg`} alt='' /> 
                        }
                        {skill.text}
                      </span>
                      /* </MouseParallaxChild> */
                    );
                  })}
                  {/* </MouseParallaxContainer> */}
                </div>
              );
            })}
          {/* </div> */}

          
        </div>
      </div>
      <div className='space'></div>
    </section>
  );
}
