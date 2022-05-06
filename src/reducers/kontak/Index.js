import React from "react";
import { GET_LIST_CONTACT, CREATE_CONTACT , DELETE_CONTACT, GET_LIST_CONTACT_BY_ID, UPDATE_CONTACT} from "../../actions/ContactAction";

const initialState = {

    getListContactResult : false,
    getListContactLoading : false,
    getListContactError : false,

    getListContactByIdResult : false,
    getListContactByIdLoading : false,
    getListContactByIdError : false,

    createContactResult : false,
    createContactLoading : false,
    createContactError : false,

    deleteContactResult : false,
    deleteContactLoading : false,
    deleteContactError : false,

    updateListContactResult : false,
    updateListContactLoading : false,
    updateListContactError : false,

    

}

const kontak = (state =  initialState, action) => {

    switch (action.type) {

        case GET_LIST_CONTACT:
            // console.log("4. Sign reducers", action);
            return{
                ...state,
                getListContactResult : action.payload.data,
                getListContactLoading : action.payload.loading,
                getListContactError : action.payload.errorMessage
            }

        break;
        case CREATE_CONTACT:
            // console.log("4. Sign reducers", action);
            return{
                ...state,
                createContactResult : action.payload.data,
                createContactLoading : action.payload.loading,
                createContactError : action.payload.errorMessage
            }

        break;
        case DELETE_CONTACT:
            // console.log("4. Sign reducers", action);
            return{
                ...state,
                deleteContactResult : action.payload.data,
                deleteContactLoading : action.payload.loading,
                deleteContactError : action.payload.errorMessage
            }

        break;
        case GET_LIST_CONTACT_BY_ID:
            //   console.log("4. Sign reducers", action);
            return {
                ...state,
                getListContactByIdResult : action.payload.data,
                getListContactByIdLoading : action.payload.loading,
                getListContactByIdError : action.payload.errorMessage
            }
        break;
        case UPDATE_CONTACT:
              console.log("4. Sign reducers", action);
            return {
                ...state,
                updateListContactResult : action.payload.data,
                updateListContactLoading : action.payload.loading,
                updateListContactError : action.payload.errorMessage
            }
        break;
        default:
            return state
        break;
        
    }

}

export default kontak