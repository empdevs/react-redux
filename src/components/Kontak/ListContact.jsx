import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getListContact, deleteContact, getContactById } from '../../actions/ContactAction';


export default function ListContact() {

    // get state reducers
    const { getListContactResult, getListContactLoading, getListContactError, deleteContactResult } = useSelector((state)=> state.ContactReducer);

    const dispatch = useDispatch();

    function _deleteData(e,id){

      e.preventDefault();

      let idContact = id;

      dispatch(deleteContact(idContact));

      // console.log(idContact);

    }

    function _editData(e,data){

      e.preventDefault();

      console.log("1. Sign in function edit");

      dispatch(getContactById(data));
    }

    const ListContact = (props) =>{

      return(

        // if Api get true
        props.getListContactResult.length > 0 ? (

          props.getListContactResult.map((item)=>{
    
              return(
                <>
                  <p key={item.id}>{item.name} - {item.phone} </p> 
                  <button className='btn btn-danger d-inline mx-1' onClick={(e)=>_deleteData(e,item.id)}>Delete</button>
                  <button className='btn btn-success d-inline mx-1' onClick={(e)=>_editData(e,item)}>Edit</button>
                  <hr />
                </>
              )
          })
        )
        :
        // if loading true
        props.getListContactLoading ? (
          
         
            <p>... Loading</p>

        )

        :
        (
        // if error
          <p>{props.getListContactError ? getListContactError : "Data error"}</p>
        )

      );

    }

    useEffect(()=>{

        // _loadData();
        // console.log("1 . Use effect actions");
        dispatch(getListContact());

    },[deleteContactResult,dispatch]); // if user udpate or delete data

  return (
    <>
    <div>List Contact</div>
      <ListContact
        getListContactResult = {getListContactResult}
        getListContactLoading = {getListContactLoading}
        getListContcatError = {getListContactError}
      />
    </>
  )
}
