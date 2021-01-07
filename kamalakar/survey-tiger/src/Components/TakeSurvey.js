import React, { useRef, useState } from "react";
import {
  Button
} from "reactstrap";  
import {useSelector} from 'react-redux';
const TakeSurvey = (props) => {
  const suerveyIDs=useSelector(globalStore=>globalStore.surveys.map(s=>s.surveyId));  
  return (
    <>
    {suerveyIDs.map(surveyId=>
      <Button className="survey-main-btn" key={surveyId}>Take Survey {surveyId}</Button>
    )}
    </>
  );
  }

export default TakeSurvey;
