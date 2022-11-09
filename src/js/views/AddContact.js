import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const AddContact = () => {
  const [fullNameValue, setFullNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [addressValue, setAddressValue] = useState("");

  const saveNewContact = () => {
    const newContact = {
      fullName: fullNameValue,
      email: emailValue,
      phone: phoneValue,
      address: addressValue,
    };

    Context.contacts.push(newContact);

    setFullNameValue("");
    setEmailValue("");
    setPhoneValue("");
    setAddressValue("");
  };

  return (
    <div className="container">
      <div>
        <h2 className="text-center mt-5">Add a new contact</h2>
        <form>
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
            onClick={saveNewContact}
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
