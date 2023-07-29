import React, { useState } from "react";
import { useDispatch } from "react-redux";

import ShareModal from "../ShareModal/ShareModal";
import NavIcons from "../NavIcons/NavIcons";
import { logout } from "../../actions/AuthActions";
import "./RightSide.css"; 

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  const dispatch = useDispatch()
  const handleLogOut = () => {
    dispatch(logout())
  }
  return (
    <div className="RightSide">
      <NavIcons />
      <button className="button logout-btn-right" onClick={handleLogOut}>Log Out</button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;
