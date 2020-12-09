import React from "react";
import "../css/Sidebar.css";
import { SidebarData } from "./SidebarData";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Sidebar = (props) => {
  const filterBy = (code, topic) => {
    const filteredProducts = props.products.filter((product) => {
      if (code === "skinConcern") {
        return product.skinConcern222.includes(topic);
      } else if (code === "category") {
        return product.category.includes(topic);
      } else if (code === "skinType") {
        return product.skinType.includes(topic);
      }
      return false;
    });
    console.log(filteredProducts);
  };

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
              <li key={key} className="row" onClick={() => {}}>
                <div id="icondiv">{val.icon}</div>
                <DropdownButton
                  className="arrow"
                  title={val.title}
                  key={"right"}
                  drop={"right"}
                >
                  {val.topics.map((option, index) => {
                    return (
                      <Dropdown.Item
                        onClick={() => {
                          filterBy(val.code, option);
                        }}
                        key={index}
                      >
                        {option}
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
