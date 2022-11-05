import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/AllContacs.css";

import ContactCard from "./ContactCard.js";
import AddContact from "./AddContact.js";

export const AllContacts = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div>
        <div className="row">
          <div>
            <h4 className="">All Contacts</h4>
          </div>
          <div className="ml-auto">
            <p>
              <Link to="/add">
                <button type="button" className="btn btn-success">
                  Add new contact
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          id="contacts"
          className="panel-collapse collapse show"
          aria-expanded="true"
        >
          <ul className="list-group pull-down" id="contact-list">
            <ContactCard />
            <ContactCard />
            <ContactCard />
            <ContactCard />
          </ul>
        </div>
      </div>
    </div>
  );
};
