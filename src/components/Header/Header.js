import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

function Header() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: "85vw", maxWidth: 310, padding: 5, paddingTop: 14 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
          <ListItem button key={"Hjem"}>
            <ListItemText
              primary={"HJEM"}
              primaryTypographyProps={{
                marginTop: 1,
                marginBottom: 1,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 1,
                fontFamily: "TimesNewRoman",
              }}
            />
          </ListItem>
        </Link>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/booking"}
        >
          <ListItem button key={"Booking"}>
            <ListItemText
              primary={"BOOKING"}
              primaryTypographyProps={{
                marginTop: 1,
                marginBottom: 1,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 1,
                fontFamily: "TimesNewRoman",
              }}
            />
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        <Link
          style={{ textDecoration: "none", color: "black" }}
          to={"/anmeldelser"}
        >
          <ListItem button key={"Anmeldelser"}>
            <ListItemText
              primary={"ANMELDELSER"}
              primaryTypographyProps={{
                marginTop: 1,
                marginBottom: 1,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 1,
                fontFamily: "TimesNewRoman",
              }}
            />
          </ListItem>
        </Link>
        <Link style={{ textDecoration: "none", color: "black" }} to={"/omos"}>
          <ListItem button key={"Om Os"}>
            <ListItemText
              primary={"OM OS"}
              primaryTypographyProps={{
                marginTop: 1,
                marginBottom: 1,
                fontSize: 18,
                fontWeight: 600,
                letterSpacing: 1,
                fontFamily: "TimesNewRoman",
              }}
            />
          </ListItem>
        </Link>
      </List>
    </Box>
  );

  return (
    <nav className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      {document.documentElement.clientWidth < 1200 ? (
        <div className="menuButton">
          {["right"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button onClick={toggleDrawer(anchor, true)}>
                <MenuIcon
                  className="menuIcon"
                  sx={{ color: "white" }}
                  fontSize="large"
                />
              </Button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
      ) : (
        <div className="menuBar">
          <Link to={"/"} id="link">
            HJEM
          </Link>
          <Link to={"/Booking"} id="link">
            BOOKING
          </Link>
          <Link to={"/Anmeldelser"} id="link">
            ANMELDELSER
          </Link>
          <Link to={"/OmOs"} id="link">
            OM OS
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Header;
