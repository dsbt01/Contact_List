import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/AllContacs.css";

export const AllContacts = () => {
  const { store, actions } = useContext(Context);

  return <h1>Hello World</h1>;
};
