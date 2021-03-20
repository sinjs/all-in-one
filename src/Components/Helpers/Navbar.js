import React from 'react';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
}));

function NavBar() {
        const classes = useStyles();

        return <div className={classes.root}>
            <AppBar color="inherit" position="static">
                <Toolbar>
                    <Typography variant="h6" style={{cursor: 'pointer'}} onClick={() => {window.location.href='/?src=navbar_logo'}} className={classes.title}>
                        All in one
                    </Typography>
                    <Button component="a" href="/?src=navbar_item" color="inherit">Home</Button>
                    <Button component="a" href="/tools/0" color="inherit">Formatting</Button>
                    <Button component="a" href="/tools/1" color="inherit">Converting</Button>
                    <Button component="a" href="/tools/2" color="inherit">Code Tools</Button>
                </Toolbar>
            </AppBar>
        </div>;
}

export default NavBar;