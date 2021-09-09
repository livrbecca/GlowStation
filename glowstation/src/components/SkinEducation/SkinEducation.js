import React from "react";
import { EducationData } from "./EducationData";
import Card from "react-bootstrap/Card";
import "./SkinEducation.css";


const SkinEducation = (props) => {
  return (
      <>
    <h2 className="skinEd">Skin Education</h2>

    <div className="articleContainer">

      {EducationData.map((value, key) => {
        return (
          <Card.Body className="artBody" key={key}>
            <a rel="noopener noreferrer" target="_blank" href={value.link}>
              <Card.Img className="artImage" src={value.image} alt="article" />
              <Card.Title className="artTitle">{value.title}</Card.Title>
            </a>
          </Card.Body>
        );
      })}
      
    </div>
    </>
  );
};

export default SkinEducation;
