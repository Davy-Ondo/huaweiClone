import React from "react";
import './features.css';
import  Feature  from '../Feature.jsx';

const box = [
    {
        title: "title1",
        text: "text1"
    },
    {
        title: "title2",
        text: "text2"
    }
];


const Features = () => {
  return (
    <div className="main_container">
        <div className="welcome"
        style={{
            
        }}>

        </div>
        <div className="features_component">
            {box.map((item, index) => (
                <Feature title={item.title} text={item.text} key={item.title + index } />
            ))}
        </div>
    </div>
  )
}

export default Features