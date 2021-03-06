import React, {Component} from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import EditIcon from '@material-ui/icons/Edit';
import Divider from '@material-ui/core/Divider';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {MyCards} from "./MyCards";
import Container from '@material-ui/core/Container';
import './TaskApp.css';
import {BrowserRouter as Redirect} from 'react-router-dom'; 

const drawerWidth = 240;



const classes = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));




export class TaskApp extends Component {

    
    constructor(props) {
        super(props);
        this.state = {open:false};
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        
        
    }

    

    handleOpen(e) {
      this.setState({
        open: true
      });
    }

  handleClose(e) {
      this.setState({
        open: false
      });
  }

  handleLogout(e){
   
  }


  handleEdit(e){

  }

    render() {
      
       

        return (
            <div className="App">
              <CssBaseline />
              <React.Fragment >
              <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                  [classes.appBarShift]: this.state.open,
                })}
              >
                <Toolbar>
                  <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={this.handleOpen}
                    edge="start"
                    className={clsx(classes.menuButton, this.state.open && classes.hide)}
                  >
                    <MenuIcon />
                  </IconButton>
                  <Typography variant="h6" noWrap>
                    Task Planner
                  </Typography>
                </Toolbar>
              </AppBar>
                <Drawer anchor='left' open={this.state.open} onClose={this.handleClose}>
                <List>
                  
                        <ListItem >
                        <ListItemIcon> <PersonIcon fontSize="large"/> </ListItemIcon>
                          <ListItemText primary="Santiago Vega Romero" secondary="santiago.vega-r@mail.escuelaing.edu.co"/>
                        </ListItem>
                       
                </List>
                
                
                      <ListItemIcon> 
                        <IconButton onClick={this.handleEdit}>
                          <EditIcon /> 
                          </IconButton>
                      </ListItemIcon>
                
                
                    <Divider />

                <List>
                <ListItem >
                    <ListItemIcon>  
                        <IconButton  href="/" onClick={this.handleLogout}>
                            <ExitToAppIcon fontSize="large"/>
                        </IconButton> 
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                    </ListItem>
                </List>
                </Drawer>
                

               <main className="layout">
              
                    
                    <Container fixed>
                      <MyCards/>                        
                    </Container>
                </main>
                    
 
            </React.Fragment>
            
            </div>
        );
    }

   

}