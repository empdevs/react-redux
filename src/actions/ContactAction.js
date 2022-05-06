import axios from "axios";

export const GET_LIST_CONTACT = "GET_LIST_CONTACT";
export const GET_LIST_CONTACT_BY_ID = "GET_LIST_CONTACT_BY_ID";
export const CREATE_CONTACT = "CREATE_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
export const UPDATE_CONTACT = "UPDATE_CONTACT";

export const getListContact = () => {

    console.log("Action List");

    return async (dispatch) => {

        // console.log("3 . Get Api with axios");
        // loading
        dispatch({

            type : GET_LIST_CONTACT,
            payload : {
                loading : true,
                data : false,
                errorMessage : false
            }

        });
        
       
       await axios.get("http://localhost:3001/contacts")
       .then(function(response){

            // console.log("5. Success get list data" ,response);

            let dataResponse = response.data;

            dispatch({

                type : GET_LIST_CONTACT,
                payload : {
                    loading : false,
                    data : dataResponse,
                    errorMessage : false
                }
    
            });

       })
       .catch(function(error){

            // console.log(error);

            dispatch({

                type : GET_LIST_CONTACT,
                payload : {
                    loading : false,
                    data : false,
                    errorMessage : error.toJSON()
                }
    
            });

       });

    }

}

export const createContact = (data) =>{

    // console.log("2 . Sign Action");

    // console.log(data);

    return async (dispatch) => {

        // console.log("3 . Get Api with axios");
        // loading
        dispatch({

            type : CREATE_CONTACT,
            payload : {
                loading : true,
                data : false,
                errorMessage : false
            }

        });
        
       
       await axios.post("http://localhost:3001/contacts", data)
       .then(function(response){

            // console.log("Success create data" ,response);

            let dataResponse = response.data;

            dispatch({

                type : CREATE_CONTACT,
                payload : {
                    loading : false,
                    data : dataResponse,
                    errorMessage : false
                }
    
            });

       })
       .catch(function(error){

            console.log(error);

            dispatch({

                type : CREATE_CONTACT,
                payload : {
                    loading : false,
                    data : false,
                    errorMessage : error.toJSON()
                }
    
            });

       });

    }

}

export const updateContact = (data) =>{

    console.log("2 . Sign Action");

    // console.log(data);

    return async (dispatch) => {

        console.log("3 . Get Api with axios");
        // loading
        dispatch({

            type : UPDATE_CONTACT,
            payload : {
                loading : true,
                data : false,
                errorMessage : false
            }

        });
        
       
       await axios.put(`http://localhost:3001/contacts/${data.id}`, data)
       .then(function(response){

            console.log("Success udpate data" ,response);

            let dataResponse = response.data;

            dispatch({

                type : UPDATE_CONTACT,
                payload : {
                    loading : false,
                    data : dataResponse,
                    errorMessage : false
                }
    
            });

       })
       .catch(function(error){

            console.log(error);

            dispatch({

                type : UPDATE_CONTACT,
                payload : {
                    loading : false,
                    data : false,
                    errorMessage : error.toJSON()
                }
    
            });

       });

    }

}

export const deleteContact = (id) =>{

    // console.log("2 . Sign Action");

    // console.log(data);

    let idContact = id;

    return async (dispatch) => {

        // console.log("3 . Get Api with axios");
        // loading
        dispatch({

            type : DELETE_CONTACT,
            payload : {
                loading : true,
                data : false,
                errorMessage : false
            }

        });
        
       
       await axios.delete(`http://localhost:3001/contacts/${idContact}`)
       .then(function(response){

            // console.log("Success delete data" ,response);

            // let dataResponse = response.data;

            dispatch({

                type : DELETE_CONTACT,
                payload : {
                    loading : false,
                    data : true,
                    errorMessage : false
                }
    
            });

       })
       .catch(function(error){

            console.log(error);

            dispatch({

                type : DELETE_CONTACT,
                payload : {
                    loading : false,
                    data : false,
                    errorMessage : error.toJSON()
                }
    
            });

       });

    }


}

export const getContactById = (data) =>{

    console.log("2 . Sign Action");

    // console.log(data);

    let dataResponse = data;

    return async (dispatch) => {

        console.log("3 . Get Api with axios");
        // loading
        dispatch({

            type : GET_LIST_CONTACT_BY_ID,
            payload : {
                loading : true,
                data : dataResponse,
                errorMessage : false
            }

        });

    }
}