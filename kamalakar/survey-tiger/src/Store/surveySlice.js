import {createSlice,configureStore,createAsyncThunk} from '@reduxjs/toolkit';

export const createSurvey=createAsyncThunk(
    'surveys/createSurvey',
    async(_,thunkAPI)=>{
        console.log(thunkAPI.getState());
        const newSurveyId=thunkAPI.getState().surveys.length+1;
        return newSurveyId;
    }
)
  export const surveySlice=createSlice({
    name:"surveys",
    initialState:[],
    reducers:{
        /*createSurvey:(state,action)=>{
            const newSurveyId=state.length+1;
            state.push({questions:[],surveyId:newSurveyId,isPublished:false})
            return state;*/
        },

        extraReducers:{
            [createSurvey.fulfilled]:(state,action)=>{
                state.push({questions:[],surveyId:action.payload,isPublished:false})
                console.log(state);
                console.log(action);
            }
        }
          

})
