import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Button,
} from "reactstrap";
import {useState} from 'react';
const SingleSelect = () => {
    const [options,setOptions]=useState(["",""]);
    const [question,setQuestion]=useState("");

    const setOptionArray=(value,optionIndex)=>{
        options[optionIndex]=value;
        setOptions([...options]);
    }

    const shouldQuestionAddandPublishDisabled=()=>{
        return question.trim()===""||options.find(opt=>opt.trim()==="")!==undefined;
    }
  return (
    <div className="question-container">
      <InputGroup className="input-grp">
        <InputGroupAddon addonType="prepend">
          <InputGroupText>?</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Your Question"  value={question} onChange={(e)=>setQuestion(e.target.value)}/>
      </InputGroup>
      <p className="option-text">Options</p>
      <InputGroup className="input-grp">
        <Input placeholder="Option 1"  value={options[0]} onChange={(e)=>setOptionArray(e.target.value,0)} />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>

      <InputGroup className="input-grp">
        <Input placeholder="Option 2" value={options[1]} onChange={(e)=>setOptionArray(e.target.value,1)} />
        <InputGroupAddon addonType="append">
          <InputGroupText>+</InputGroupText>
          <InputGroupText>-</InputGroupText>
        </InputGroupAddon>
      </InputGroup>
      <div className="question-buttons">
        <Button className="survey-main-btn" disabled={shouldQuestionAddandPublishDisabled()}>Add Question</Button>
        <Button className="survey-main-btn" disabled={shouldQuestionAddandPublishDisabled()}>Publish</Button>
      </div>
    </div>
  );
};
export default SingleSelect;
