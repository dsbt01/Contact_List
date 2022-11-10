import React from "react";
import { Link } from "react-router-dom";

import "../../styles/AllContacts.css";

import Contacts from "./contacts.js";

export const AllContacts = () => {
  return (
    <div>
      <div>
        <div className="row">
          <div className="col-10">
            <p className="headerText">All Contacts</p>
          </div>
          <div className="col-2">
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
      <ul className="list-group">
        <Contacts />
      </ul>
    </div>
  );
};
