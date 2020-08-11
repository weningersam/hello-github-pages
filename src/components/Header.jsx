import React from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';


function handleAppBarClick(url) {
  window.location.hash = url;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1,
    },
  }),
);


export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = useStyles();
  const theme = useTheme();

  const handleMobileMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setAnchorEl(null);
  };
  
  
  const mobile = useMediaQuery(theme.breakpoints.down("xs"));
    
    return(
      <div className={classes.root}>
        <AppBar position="fixed">
        <Toolbar className={classes.title}>
          {mobile ? (
            <>
            <Typography variant="h6" className={classes.title}>
              Sam Weninger
            </Typography>
            <MenuIcon aria-haspopup="true" onClick={handleMobileMenuClick}/>
            
            <Menu id="mobileMenu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleMobileMenuClose}>

              <MenuItem onClick={() => {handleAppBarClick('/'); setAnchorEl(null);} }>Home</MenuItem>
              <MenuItem onClick={() => {handleAppBarClick('/about'); setAnchorEl(null);} }>About</MenuItem>
              <MenuItem onClick={() => {handleAppBarClick('/projects'); setAnchorEl(null);} }>Projects</MenuItem>
              <MenuItem onClick={() => {handleAppBarClick('/contact'); setAnchorEl(null);} }>Contact</MenuItem>
            </Menu>

            </>
          ) : (
            <>
            <Typography variant="h6" className={classes.title}>
              Sam Weninger
            </Typography>
            <Button color="inherit" onClick={() => handleAppBarClick('/')}>Home</Button>
            <Button color="inherit" onClick={() => handleAppBarClick('/about')}>About</Button>
            <Button color="inherit" onClick={() => handleAppBarClick('/projects')}>Projects</Button>
            <Button color="inherit" onClick={() => handleAppBarClick('/contact')}>Contact</Button>
            </>
          ) }
        </Toolbar>
        </AppBar>
        <Toolbar/>{/* This is used to make sure the fixed appbar does not cover up anything directly below it */}
      </div>
    );
}