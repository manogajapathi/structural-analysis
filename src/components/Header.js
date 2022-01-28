import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import dp from '../imgs/mano.jpg';
import GetAppIcon from '@material-ui/icons/GetApp';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles(theme => ({
    title: {
        paddingLeft : 10,
    }
  }));
const Header = () => {
    const classes = useStyles();
    return(
        <div>
            <AppBar position="static" color="primary"> 
                <ToolBar>
                    <Avatar alt="Mano" src={dp}/>
                        <Typography variant="title" color="inherit" className={classes.title}>
                            Manogajapathi Velmurugan
                        </Typography>
                        <Link href="mano-resume.pdf">
                            <GetAppIcon style={{ color: '#2f383b',position: 'absolute', top: '15', right: '15', fontSize: 30}}/>
                        </Link>                        
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default Header;