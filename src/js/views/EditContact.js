import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { Context } from "../store/appContext";

export const EditContact = () => {
  const [fullNameValue, setFullNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [idValue, setIdValue] = useState("");

  const { store, actions } = useContext(Context);

  const params = useParams();

  const updateContact = async () => {
    const updatedContact = {
      full_name: fullNameValue,
      email: emailValue,
      phone: phoneValue,
      address: addressValue,
      agenda_slug: "DSBT",
      id: idValue,
    };

    var answer = await actions.updateContact(updatedContact);

    alert("Contact has been saved successfully");
  };

  const RefreshData = () => {
    var locContacts = store.contacts;

    for (var i = 0; i < locContacts.length; i) {
      if (locContacts[i].id === params.theid) {
        setIdValue(locContacts[i].id);
        setFullNameValue(locContacts[i].full_name);
        setEmailValue(locContacts[i].email);
        setPhoneValue(locContacts[i].phone);
        setAddressValue(locContacts[i].address);
        break;
      }
    }
  };

  useEffect(() => {
    RefreshData();
  }, []);

  return (
    <div className="container">
      <div>
        <h2 className="text-center mt-5">Update a contact</h2>
        <form>
          <div className="form-group">
            <label>Contact Id</label>
            <input
              type="text"
              onChange={(e) => setIdValue(e.target.value)}
              value={idValue}
              className="form-control"
              placeholder="Contact Id"
              readOnly
            />
          </div>
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              onChange={(e) => setFullNameValue(e.target.value)}
              value={fullNameValue}
              className="form-control"
              placeholder="Full Name"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              onChange={(e) => setEmailValue(e.target.value)}
              value={emailValue}
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label>Phone</label>
            <input
              type="phone"
              onChange={(e) => setPhoneValue(e.target.value)}
              value={phoneValue}
              className="form-control"
              placeholder="Enter phone"
            />
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              onChange={(e) => setAddressValue(e.target.value)}
              value={addressValue}
              className="form-control"
              placeholder="Enter address"
            />
          </div>
          <button
            type="button"
            onClick={updateContact}
            className="btn btn-primary form-control mb-3 mt-3"
          >
            save
          </button>
          <Link to="/allcontacts">
            <button type="button" className="btn btn-primary form-control">
              close
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};
