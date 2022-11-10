import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

const Contacts = () => {
  const { store, actions } = useContext(Context);

  var locContacts = store.contacts;

  if (locContacts.length === 0) {
    return (
      <div className="p-3">
        <h3>No contacts found</h3>
      </div>
    );
  } else {
    useEffect(async () => {
      var q = await actions.refreshData();
    }, []);

    return locContacts.map((items, index) => {
      async function deleteContact(id) {
        var q = await actions.deleteContact(id);

        alert("Contact was successfully deleted");
      }

      return (
        <li key={items.id} className="list-group-item list-group-item-primary">
          <div className="row w-100">
            <div className="col-12 col-sm-6 col-md-3 px-0">
              <img
                src="http://demos.themes.guide/bodeo/assets/images/users/m101.jpg"
                alt={items.full_name}
                className="rounded-circle mx-auto d-block img-fluid"
              />
            </div>
            <div className="col-12 col-sm-6 col-md-9 text-left text-sm-left">
              <div className="row">
                <div className="col-9">
                  <label className="w-100">
                    {items.id} - {items.full_name}
                  </label>
                </div>
                <div className="col-3">
                  <Link to={"/edit/" + items.id}>
                    <button className="btn">
                      <i className="fas fa-pencil-alt mr-3"></i>
                    </button>
                  </Link>
                  <button
                    className="btn"
                    onClick={() => deleteContact(items.id)}
                  >
                    <i className="fas fa-trash-alt"></i>
                  </button>
                </div>
              </div>
              <i className="fas fa-map-marker-alt text-muted mr-3"></i>
              <span className="text-muted p-1">{items.address}</span>
              <br />
              <span
                className="fa fa-phone fa-fw text-muted mr-3"
                data-toggle="tooltip"
                title="Phone number"
                data-original-title={items.phone}
              ></span>
              <span className="text-muted small p-1">{items.phone}</span>
              <br />
              <span
                className="fa fa-envelope fa-fw text-muted mr-3"
                data-toggle="tooltip"
                data-original-title=""
                title=""
              ></span>
              <span className="text-muted small text-truncate p-1">
                {items.email}
              </span>
            </div>
          </div>
        </li>
      );
    });
  }
};

export default Contacts;
