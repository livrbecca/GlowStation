import React from "react";
import "../css/Shop.css";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import ButtonGroup from "react-bootstrap/ButtonGroup";

const Shop = (props) => {
  return (
    <div>
      <div className="buttonArea">
          <DropdownButton
            className="mainButton"
            as={ButtonGroup}
            key={"down"}
            id={`dropdown-button-drop-${"down"}`}
            drop={"down"}
            title="Filter Products"
          >
            <Dropdown.Header className="filterBy">Filter by:</Dropdown.Header>

        
            <DropdownButton
              title="Skin Concern"
              className=""
              as={ButtonGroup}
              key={"right"}
              drop={"right"}
            >
           
              <Dropdown.Item eventKey="1">Acne & Blackheads</Dropdown.Item>
              <Dropdown.Item eventKey="2">Texture</Dropdown.Item>
              <Dropdown.Item eventKey="3">Eye concerns</Dropdown.Item>
              <Dropdown.Item eventKey="4">Lines & Wrinkes</Dropdown.Item>
              <Dropdown.Item eventKey="5">Dehydrated Skin</Dropdown.Item>
              <Dropdown.Item eventKey="6">
                Hyperpigmentation & Brigtening
              </Dropdown.Item>
              <Dropdown.Item eventKey="7">Redness</Dropdown.Item>
              <Dropdown.Item eventKey="8">
                Visible Pores & Oily Skin
              </Dropdown.Item>
              <Dropdown.Item eventKey="9">Dry Skin</Dropdown.Item>
            </DropdownButton>

            <DropdownButton
              className=""
              title="Product Type"
              as={ButtonGroup}
              key={"right"}
              drop={"right"}
            >
              <Dropdown.Item eventKey="10">Cleansers</Dropdown.Item>
              <Dropdown.Item eventKey="11">Toners & Essence</Dropdown.Item>
              <Dropdown.Item eventKey="12">Mists</Dropdown.Item>
              <Dropdown.Item eventKey="13">Exfoliators</Dropdown.Item>
              <Dropdown.Item eventKey="14">Serums</Dropdown.Item>
              <Dropdown.Item eventKey="15">Moisturisers</Dropdown.Item>
              <Dropdown.Item eventKey="16">Oils</Dropdown.Item>
              <Dropdown.Item eventKey="17">SPF</Dropdown.Item>
              <Dropdown.Item eventKey="18">Masks</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              title="Skin Type"
              className=""
              as={ButtonGroup}
              key={"right"}
              drop={"right"}
            >
              <Dropdown.Item eventKey="19">Sensitive</Dropdown.Item>
              <Dropdown.Item eventKey="20">Oily</Dropdown.Item>
              <Dropdown.Item eventKey="21">Dry</Dropdown.Item>
              <Dropdown.Item eventKey="22">Combination</Dropdown.Item>
            </DropdownButton>
            <DropdownButton
              title="Brands"
              className=""
              as={ButtonGroup}
              key={"right"}
              drop={"right"}
            >
              <Dropdown.Item eventKey="23">PSA Skin</Dropdown.Item>
              <Dropdown.Item eventKey="24">Indie Lee</Dropdown.Item>
              <Dropdown.Item eventKey="25">The Inkey List</Dropdown.Item>
              <Dropdown.Item eventKey="26">COSRX</Dropdown.Item>
            </DropdownButton>
          </DropdownButton>
      </div>
      <div className="shopContainer">{props.products}</div>
    </div>
  );
};
export default Shop;
