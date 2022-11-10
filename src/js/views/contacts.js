import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Contacts = () => {
  const { store, actions } = useContext(Context);

  var locContacts = store.contacts;

  return locContacts.map((items, index) => {
    return (
      <li className="list-group-item" id={items.id}>
        <div className="row w-100">
          <div className="col-12 col-sm-6 col-md-3 px-0">
            <img
              src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
              alt={items.full_name}
              className="rounded-circle mx-auto d-block img-fluid"
            />
          </div>
          <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
            <div className="row">
              <div className="col-9">
                <label className="w-100">{items.full_name}</label>
              </div>
              <div className="col-3">
                <button className="btn">
                  <i className="fas fa-pencil-alt mr-3"></i>
                </button>
                <button className="btn">
                  <i className="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
            <br />
            <i className="fas fa-map-marker-alt text-muted mr-3"></i>
            <span className="text-muted">{items.address}</span>
            <br />
            <span
              className="fa fa-phone fa-fw text-muted mr-3"
              data-toggle="tooltip"
              title="Phone number"
              data-original-title={items.phone}
            ></span>
            <span className="text-muted small">{items.phone}</span>
            <br />
            <span
              className="fa fa-envelope fa-fw text-muted mr-3"
              data-toggle="tooltip"
              data-original-title=""
              title=""
            ></span>
            <span className="text-muted small text-truncate">
              {items.email}
            </span>
          </div>
        </div>
      </li>
    );
  });
};

export default Contacts;
