import {
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    Button,
  } from "reactstrap";
  import {useState} from 'react';
const MultipleSelect=()=>{

    const [options,setOptions]=useState([""]);
    const [question,setQuestion]=useState("");
    
    const addOptions=(optionIndex)=>{
        if(options.length<4)
        {
            options.splice(optionIndex+1,0,"");
            setOptions([...options]);
        
        }
    }
    const removeOptions=(optionIndex)=>{
        let tempOptions=options;
        tempOptions.splice(optionIndex,1);
        setOptions([...tempOptions]);
    }
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

      { options.map((option,optionIndex)=>(
        <InputGroup className="input-grp" key={optionIndex}>
        <Input placeholder={`Option ${optionIndex+1}`} value={option} onChange={(e)=>setOptionArray(e.target.value,optionIndex)}/>
        <InputGroupAddon addonType="append">
          <Button onClick={()=>addOptions(optionIndex)} disabled={options.length==4}>+</Button>
          <Button onClick={()=>{removeOptions(optionIndex)}} disabled={options.length==1}>-</Button>
        </InputGroupAddon>
      </InputGroup>
          ))
}
{
    options.length==4?

      <div className="question-buttons">
        <Button className="survey-main-btn" disabled={shouldQuestionAddandPublishDisabled()}>Add Question</Button>
        <Button className="survey-main-btn" disabled={shouldQuestionAddandPublishDisabled()}>Publish</Button>
      </div>
      :null
}
    </div>
    );
}
export default MultipleSelect;