import React from "react";
import "./Sidebar.css";
import { SidebarData } from "./SidebarData";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Sidebar = (props) => {
  return (
    <div className="filterContainer">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        className="funnel"
        viewBox="0 0 16 16"
      >
        <path
          fillRule="evenodd"
          d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2z"
        />
      </svg>
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
              <li key={key} className="row">
                <div id="icondiv">{val.icon}</div>
                <DropdownButton
                  className="arrow"
                  title={val.title}
                  key={"right"}
                  drop={"right"}
                >
                  {val.topics.map((topic, index) => {
                    return (
                      <Dropdown.Item
                        onClick={() => {
                          props.filterBy(val.code, topic);
                        }}
                        key={index}
                      >
                        {topic}
                      </Dropdown.Item>
                    );
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
