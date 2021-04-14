import * as actionTypes from "./actionTypes";
import axios from "axios";

export const createNewEvent = (event)=>{
    return dispatch =>{
        axios.post("", event)
        .then((res)=>{
            console.log(res)
            
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

// DISPLAY REGISTERED EVENTS
export const displayRegisteredEvents = ()=>{
    return dispatch =>{
        dispatch(displayRegisteredEventsReq)
        axios
        .get('')
        .then(res => {
            const events = res.data
            dispatch(displayRegisteredEventsSuccess(events))
        })
        .catch(error => {
            dispatch(displayRegisteredEventsFailure(error))
        })
    }
}

export const displayRegisteredEventsReq = ()=>{
    return {
        type: actionTypes.DISPLAY_REGISTERED_EVENTS_REQ,
    }
}

export const displayRegisteredEventsSuccess = events=>{
    return {
        type: actionTypes.DISPLAY_REGISTERED_EVENTS_SUCCESS,
        payload: events
    }
}

export const displayRegisteredEventsFailure = error=>{
    return {
        type: actionTypes.DISPLAY_REGISTERED_EVENTS_FAILURE,
        payload: error
    }
}

//DISPLAY INTERESTED EVENTS
export const displayInterestedEvents = ()=>{
    return dispatch =>{
        dispatch(displayInterestedEventsReq)
        axios
        .get('')
        .then(res => {
            const events = res.data
            dispatch(displayInterestedEventsSuccess(events))
        })
        .catch(error => {
            dispatch(displayInterestedEventsFailure(error))
        })
    }
}

export const displayInterestedEventsReq = ()=>{
    return {
        type: actionTypes.DISPLAY_INTERESTED_EVENTS_REQ,
    }
}

export const displayInterestedEventsSuccess = events=>{
    return {
        type: actionTypes.DISPLAY_INTERESTED_EVENTS_SUCCESS,
        payload: events
    }
}

export const displayInterestedEventsFailure = error=>{
    return {
        type: actionTypes.DISPLAY_INTERESTED_EVENTS_FAILURE,
        payload: error
    }
}