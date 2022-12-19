import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from "react";
import { ContactContext } from "./ContactContext";

const ContactList = () => {
    const contacts = useContext(ContactContext);

    const renderContacts = contacts.map((contact) => {
        return (
            <ContactCard/>
        )
    })
    return (
        <div className="row">
            <div className="collumn">
                <div className="col-md-2 col-lg-2"></div>
                <div className="col-sm-12 col-md-10 col-lg-10">
                    <div className="d-md-flex justify-content-md-end">
                        <button className="btn btn-success">Add Contact</button>
                    </div>

                </div>
                <div className="col-md-2 col-lg-2"></div>
            </div>
        </div>
    );
}

export default ContactList