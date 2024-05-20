import ReactWordcloud from "react-wordcloud";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "./Skills.scss";

const words = [
  {
    text: "HTML5",
    value: 100,
  },
  {
    text: "CCS",
    value: 90,
  },
  {
    text: "SASS",
    value: 100,
  },
  {
    text: "BOOTSTRAP",
    value: 40,
  },
  {
    text: "JAVASCRIPT",
    value: 90,
  },
  {
    text: "ES6",
    value: 70,
  },
  {
    text: "JQUERY",
    value: 60,
  },
  {
    text: "REACTJS",
    value: 80,
  },
  {
    text: "NEXTJS",
    value: 60,
  },
  {
    text: "ANGULAR",
    value: 80,
  },
  {
    text: "TYPESCRIPT",
    value: 70,
  },
  {
    text: "NODE",
    value: 50,
  },
  {
    text: "PHP",
    value: 50,
  },
  {
    text: "LARAVEL",
    value: 100,
  },
  {
    text: "COMPOSER",
    value: 40,
  },
  {
    text: "MYSQL",
    value: 60,
  },
  {
    text: "GRAPHQL",
    value: 40,
  },
  {
    text: "MONGODB",
    value: 60,
  },
  {
    text: "NPM",
    value: 50,
  },
  {
    text: "GIT",
    value: 60,
  },
  {
    text: "WEBPACK",
    value: 40,
  },
  {
    text: "GULP",
    value: 30,
  },
  {
    text: "PHOTOSHOP",
    value: 70,
  },
  {
    text: "XD",
    value: 70,
  },
  {
    text: "FIGMA",
    value: 40,
  },
  {
    text: "ILLUSTRATOR",
    value: 50,
  },
  {
    text: "JIRA",
    value: 25,
  },
  {
    text: "TRELLO",
    value: 20,
  },
];

const options = {
  /* colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"], */
  /* colors: ["#00D8FF", "#00F89C", "#FD5658"  ], */
  rotations: 0,
/*   rotationAngles: [-0, 0], */
  scale: "sqrt",
  fontFamily: "Ubuntu Mono",
  padding: 1,
  fontSizes: [5, 60],
  enableTooltip: false,
  deterministic: false,
  fontStyle: "normal",
  fontWeight: "normal",
  spiral: "archimedean",
};

export default function Skills() {
  return (
      <div style={{ height: 400, width: 600 }}>
        <ReactWordcloud words={words} options={options}/>
    </div>
  );
  
}
