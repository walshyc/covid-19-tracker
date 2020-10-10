import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { GlobalContext } from "../../context/GlobalState";
import { CountryPicker } from "../country/CountryPicker";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import PublicIcon from "@material-ui/icons/Public";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function Navbar() {
  const classes = useStyles();

  const {
    countries,
    nation,
    setCountry,
    getCountryHistory,
    getCountriesHistory,
    continents,
    getCountries,
    resetNation,
    changeButton,
    currentBtn,
    getGlobalData,
    filterCountries
  } = useContext(GlobalContext);

  const handleChange = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
    getCountryHistory(e.target.value);
    getCountriesHistory();
  };

  const handleChangeButton = (e) => {
    getCountries(e.target.value);
    resetNation();
    changeButton(e.target.value);
  };

  useEffect(() => {
    getGlobalData();
    getCountries("All");
    filterCountries();
    // eslint-disable-next-line
  }, []);

  return (
    <header>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Covid-19 Tracker
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        id="drawer"
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <FormControl className={classes.formControl}>
            <InputLabel htmlFor="age-native-simple">Country</InputLabel>
            <Select
              native
              onChange={handleChange}
              inputProps={{
                name: "country",
                id: "age-native-simple",
              }}
            >
              <option
                disabled={nation.country !== "" ? true : null}
                id="noCountry"
                defaultValue
              ></option>
              {countries.map((c) => {
                return (
                  <CountryPicker key={c.country} country={c}></CountryPicker>
                );
              })}
            </Select>
          </FormControl>
          <Divider />
          <Container>
            <List>
              {continents.map((c, index) => (
                <ListItem
                  component="button"
                  button
                  key={c}
                  value={c}
                  onClick={handleChangeButton}
                >
                  <ListItemIcon>
                    <PublicIcon></PublicIcon>
                  </ListItemIcon>
                  <ListItemText primary={c} />
                </ListItem>
              ))}
            </List>
          </Container>
          <Divider />
        </div>
      </Drawer>
    </header>
  );
}

export default Navbar;
