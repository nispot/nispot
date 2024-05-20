import React, { useEffect, useState, useRef } from "react";
import "./Portfolio.scss";

// Data
import {
  portfolioList,
  allPortfolio
} from "../../data/data";

// components
/* import { Heading } from "components/Heading/Heading"; */

// Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faExternalLinkSquareAlt } from "@fortawesome/free-solid-svg-icons/faExternalLinkSquareAlt";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons/faGithubSquare";
import PortfolioItem from "./PortfolioItem/PortfolioItem";

const Portfolio = ({fullpageApi}) => {
  const [selected, setSelected] = useState("Featured");
  const [data, setData] = useState([]);

  const reBuild = () => {
    fullpageApi.reBuild();
  }

  const firstUpdate = useRef(true);

  useEffect(() => {
    
    if(selected == "all") {
      setData(allPortfolio);
    } /* else 
    if(selected == "featured") {
      setData(featuredPortfolio);
    } */else{
      setData(
       allPortfolio.filter(function(item) {
        return item.tagline.includes(selected);
      }
      )
      );
    }
    if (!firstUpdate.current) {
      
      setTimeout(() => {
        //console.log("rebuilded")
        reBuild();
      }, 800); 
    }
    firstUpdate.current = false;
  }, [selected]);



  return (
    <section className="container container-works">
      <div
        data-aos="fade-left"
        className="portfolio"
        name="portfolio"
        id="portfolio"
      >
        <h2 className="title-section text-left"> {`<Portfolio/>`} </h2>

        <div id="workslist" className="list">
          {portfolioList &&
            portfolioList.map((list) => (
              <a key={list.id}>
              <PortfolioItem
                title={list.title}
                active={selected === list.id}
                setSelected={setSelected}
                id={list.id}
                repoUrl={list.repositoryUrl}
                liveUrl={list.liveUrl}
                tagline={list.tagline}
              /></a>
            ))}
        </div>


        <div className="row">
          {data &&
            data.map((item, index) => (
              <div className="column" key={index}>
                <img src={item.img} alt={item.title} />
                <div className="overlay">
                  <div className="left">
                    <h3>{item.title}</h3>
                    {item.description && <p>{item.description}</p>}
                    <div className="pills-container">
                      {item.tagline && item.tagline.map((tag, i) => {
                        return (
                          <span className="experience-badge" key={i}>
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                  <div className="right">
                    {item.repositoryUrl &&
                      <a href={item.repositoryUrl}>
                        <FontAwesomeIcon
                          icon={faGithubSquare}
                          size="2x"
                          className="icon"
                          style={{ marginRight: "0.6em" }}
                          title="Github Repo"
                        />
                      </a>
                    }
                    {item.liveUrl &&
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FontAwesomeIcon
                          icon={faExternalLinkSquareAlt}
                          size="2x"
                          className="icon"
                          title="Live view"
                        />
                      </a>
                    }
                  </div>
                </div>
              </div>
            ))}
        </div>

      </div>
      
    </section>

  );
};

export default Portfolio;