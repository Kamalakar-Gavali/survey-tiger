import React, { useRef, useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import SingleSelect from "./SingleSelect";
import MultiSelect from "./MultiSelect";
import {useParams} from 'react-router-dom';
import {surveySlice} from '../Store/surveySlice'
const CreateSurvey = (props) => {
  const [dropdownText, setDropdownText] = useState("Select Question");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const {surveyId}=useParams();
  const selectRef = useRef(null);
  return (
    <>
    <p>{surveyId}</p>
      {/*<select ref={selectRef} onClick={(t)=>setDropdownText(selectRef.current.value)}>
          <option className="select-option" value='Select Question'>Select Question</option>
          <option className="select-option" value='SingleSelect'>SingleSelect</option>
          <option className="select-option" value='MultiSelect'>MultiSelect</option>
      </select>*/}

      <Dropdown isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggle caret>{dropdownText}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => setDropdownText("SingleSelect")}>
            SingleSelect
          </DropdownItem>
          <DropdownItem onClick={() => setDropdownText("MultiSelect")}>
            MultiSelect
          </DropdownItem>
          <DropdownItem text>hhhh</DropdownItem>
        </DropdownMenu>
      </Dropdown>
      {dropdownText === "SingleSelect" ? <SingleSelect /> : null}
      {dropdownText === "MultiSelect" ? <MultiSelect /> : null}
    </>
  );
};

export default CreateSurvey;
