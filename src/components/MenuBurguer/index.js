import React from "react";
import Popup from "reactjs-popup";
import "./style.css";
import { BurguerIcon, Menu } from '..';

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center",
  marginTop: "40px",
  
};

const contentStyle = {
  background: "rgba(255,255,255,0)",
  width: "80%",
  border: "none"
};

export const MenuBurguer = () => (
  <div style={styles}>
    <Popup
      modal
      overlayStyle={{ background: "rgba(255,255,255,0.98" }} 
      contentStyle={contentStyle}
      closeOnDocumentClick={false}
      trigger={open => <BurguerIcon open={open} />}
    >
      {close => <div className="menu"><Menu close={close} /></div>}
      
    </Popup>
  </div>
);