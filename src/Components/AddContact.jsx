import React, {useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { ContactContext } from './ContactContext';
import {v4 as uuid} from 'uuid';
import api from '../api/contacts';


const AddContact = () => {
    const {Contacts, setContacts} = useContext(ContactContext);
   

    const handleChange = (e) =>{
      const {name, value} = e.target;
      setContacts({...Contacts, [name]: value});
    }

    const Add = (e) => {
        e.preventDefault();

        if(Contacts.name === "" || Contacts.phone === "" || Contacts.email === ""){
            alert("You must fill all fields!");
            return;
        }
        addContactHandler({...Contacts})
        setContacts({name: "", phone: "", email:""})
    }

    const addContactHandler = async (contact) => {
        const request = {
            id: uuid(),
            ...contact,
        };
        
        const response = await api.post("/contacts", request);
        setContacts([...Contacts, response.data])
    }

   

    

  return (
    <div className='container-fluid'>
        <div className="row">
                <div className="col-md-3 col-lg-3"></div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                    <div className="heading">
                    <h3>Add A Contact</h3>
                    </div>
                    <div className="">
                        <form action="" onSubmit={Add}>
                            <div className="form-item form-group">
                                <label htmlFor="">Name: </label>
                                <input type="text" placeholder='Name...' 
                                className='form-control'
                                name='name'
                                value={Contacts.name}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="">Phone: </label>
                                <input type="tel" placeholder='+254..' 
                                className='form-control'
                                name='phone'
                                value={Contacts.phone}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-item">
                                <label htmlFor="">Email: </label>
                                <input type="email" placeholder='example@test.com' 
                                className='form-control'
                                name='email'
                                value={Contacts.email}
                                onChange={handleChange}
                                />
                            </div>
                            <div className="form-item d-md-flex justify-content-md-end">
                                <button className='btn btn-success btn-lg'>Save Contact</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-md-3 col-lg-3"></div>
        </div>
    </div>
  )
}

export default AddContact