import React from "react";

import classes from "./Modal.module.css";
import Card from "../Card/Card";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";

const Modal = ({ back, title, subTitle, url, message }) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={back} />
      <Card className={classes.modal}>
        <header className={classes.header} onClick={back}>
          <ArrowBackIosRoundedIcon />
          <span>Back to Portfolio Home</span>
        </header>
        <div>
          <div className={classes.content}>
            <h6>{title}</h6>
            <h6>{subTitle}</h6>

            <ul>
              {Object.keys(message).map((key, index) => (
                <li key={index}>
                  <p>{message[key]}</p>
                  <br />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <footer className={classes.actions}>
          <a href={url}>Go to Demo Website</a>
          <ArrowForwardIosRoundedIcon />
        </footer>
      </Card>
    </div>
  );
};

export default Modal;
