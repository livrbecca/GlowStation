import React from "react";
import "../css/Sidebar.css";
import { SidebarData } from "./SidebarData";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Sidebar = () => {
  return (
    <div>
      <DropdownButton
        className="mainButton"
        as={ButtonGroup}
        key={"down"}
        id={`dropdown-button-drop-${"down"}`}
        drop={"down"}
        title="Filter Products"
      >
        <Dropdown.Header className="filterBy">Filter by:</Dropdown.Header>

        <ul className="SidebarList">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row"
                onClick={() => {
                  console.log("button clicked");
                }}
              >
                
                <div id="icondiv">{val.icon}</div>
                  <DropdownButton className="arrow" title={val.title} key={"right"} drop={"right"}>
                 
                  {/* <div id="titlediv">{val.title}</div> */}
                      {val.topics.map((option) => {
                          return (
                            <Dropdown.Item eventKey="1">{option}</Dropdown.Item>
                          )
                      })}
                  
                </DropdownButton>
              </li>
            );
          })}
        </ul>
      </DropdownButton>
    </div>
  );
};

export default Sidebar;
