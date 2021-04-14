import * as actionTypes from "../actions/actionTypes";

const initialState = {
  showAlert: false,
};

const EventReducer = (state = initialState, action) => {
  switch (action.type) {
    //DISPLAY REGISTERED EVENTS
    case actionTypes.DISPLAY_REGISTERED_EVENTS_REQ:
      return {
        ...state,
        showAlert: true,
      };
    case actionTypes.DISPLAY_REGISTERED_EVENTS_SUCCESS:
      return {
        ...state,
        showAlert: true,
      };
    case actionTypes.DISPLAY_REGISTERED_EVENTS_FAILURE:
      return {
        ...state,
        showAlert: true,
      };

    //DISPLAY INTERESTED EVENTS
    case actionTypes.DISPLAY_INTERESTED_EVENTS_REQ:
      return {
        ...state,
        showAlert: true,
      };
    case actionTypes.DISPLAY_INTERESTED_EVENTS_SUCCESS:
      return {
        ...state,
        showAlert: true,
      };
    case actionTypes.DISPLAY_INTERESTED_EVENTS_FAILURE:
      return {
        ...state,
        showAlert: true,
      };

    default:
      return state;
  }
};

export default EventReducer;