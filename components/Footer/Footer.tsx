import React, { FC } from "react";
import classNames from "classnames";
import {
  List,
  ListItem
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Favorite from "@material-ui/icons/Favorite";

import styles from "assets/jss/components/footerStyle";
import FooterProps from "./FooterProps"
const useStyles = makeStyles(styles);

const Footer: FC<FooterProps> = (props) => {
  const classes = useStyles();
  const { whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
              >
                Creative EIMS
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
              >
                About us
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href=""
                className={classes.block}
              >
                EIMS Blog
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="#"
                className={classes.block}
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getFullYear()} , made with{" "}
          <Favorite className={classes.icon} /> by{" "}
          <a
            href="#"
            className={aClasses}
          >
            Creative EIMS
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}

export default Footer