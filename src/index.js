import React from 'react';
import ReactDOM from 'react-dom';
import AnimatedCursor from "react-animated-cursor"
import './index.scss';
import PortfolioApp from './PortfolioApp';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <PortfolioApp />
    <AnimatedCursor
      innerSize={22}
      outerSize={22}
      color='0, 248, 156'
      outerAlpha={0.3}
      innerScale={0.7}
      outerScale={5}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
