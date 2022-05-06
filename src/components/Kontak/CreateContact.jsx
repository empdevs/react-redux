import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createContact, getListContact, updateContact } from '../../actions/ContactAction';

export default function CreateContact() {

    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [updateDataAction, setUpdateDataAction] = useState(false);

    const { createContactResult, getListContactByIdResult, updateListContactResult } = useSelector((state) => state.ContactReducer); 

    const dispacth = useDispatch();
    

    function _createData(e){

        e.preventDefault();

        // console.log("1. Action click create");

        let data = {

            "name" : name,
            "phone" : phone

        }

        //action function create data  
        dispacth(createContact(data));

        setName("");

        setPhone("");

    }

    function _updateData(e, id){

        e.preventDefault();

        let idContact = id;

        console.log("1. Action click update");

        let data = {

            "id" : idContact,
            "name" : name,
            "phone" : phone

        }

        dispacth(updateContact(data));

        setName("");

        setPhone("");

        setUpdateDataAction(false);

    }

    function _setDataById(data){ //when user update data

        // console.log(data);

        setName(data.name);

        setPhone(data.phone);

        setUpdateDataAction(true);
    }

    useEffect(()=>{

        if(createContactResult || updateListContactResult){

            dispacth(getListContact());
          
        }

    },[createContactResult ,updateListContactResult , dispacth]);//if user update or create data redirect call this function

   
    useEffect(()=>{

        if(getListContactByIdResult){

            _setDataById(getListContactByIdResult);

        }

    },[getListContactByIdResult, dispacth])

  return (
      <div className='row align-items-end'>
        {/* {console.log(getListContactByIdResult)} */}
        {/* {console.log(updateListContactResult)} */}
        {/* if value change being true  */}
        {/* {console.log(createContactResult)} */}
        <div className="col-lg-2">
            <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="name" value={name } onChange={(e)=>{ //when user udpate data 

                    if(e.target.value){

                        setName(e.target.value);

                    }else{

                        setName("");

                    }

                }}/>
            </div>
        </div>
        <div className="col-lg-2">
            <div class="mb-3">
                <label for="phone" class="form-label">Phone</label>
                <input type="text" class="form-control" id="phone" placeholder="phone" value={phone} onChange={(e)=>{ //when user udpate data 

                    if(e.target.value){

                        setPhone(e.target.value);

                    }else{

                        setPhone("");

                    }

                }}/>
            </div>
        </div>
        <div className="col-lg-1">
            <div class="mb-3">
                { !updateDataAction ?

                    <button type='submit' className='btn btn-primary' onClick={_createData}>Add</button>

                    :

                    <button type='submit' className='btn btn-success' onClick={(e)=>_updateData(e, getListContactByIdResult.id)}>Update</button>
                }
            </div>
        </div>
    </div>
  )
}
