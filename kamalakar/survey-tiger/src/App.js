import { BrowserRouter, Link, Switch, Route ,useHistory} from "react-router-dom";
import logo from "./logo-tiger-survey.png";
import "./App.css";
import { Button } from "reactstrap";
import CreateSurvey from "./Components/CreateSurvey";
import {Provider,useDispatch} from 'react-redux';
import {store} from './Store/global-store';
import {surveySlice,createSurvey} from './Store/surveySlice'
import {unwrapResult} from '@reduxjs/toolkit';
import TakeSurvey  from "./Components/TakeSurvey";
function App() {
  const dispatch=useDispatch();
  const history=useHistory();
  const redirectToNewSurvey=()=>{
    //dispatching action to create survey
    //dispatch(surveySlice.actions.createSurvey())
   
    dispatch(createSurvey()).then(unwrapResult).then(newSurveyId=>history.push("/create/"+newSurveyId));
  }
  return (
    
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Switch>
          <Route path="/create/:surveyId">
            <CreateSurvey />
          </Route>
          <Route path="/take"><TakeSurvey/></Route>
          <Route path="/">
            
              <Button className="survey-main-btn" onClick={redirectToNewSurvey}>Create Survey</Button>
            
            <Link to="/take">
              <Button clas  className="survey-main-btn">Take Survey</Button>
            </Link>
          </Route>
        </Switch>
      </div>
   
    
  );
}

export default App;
