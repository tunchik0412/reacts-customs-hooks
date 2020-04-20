import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from "react-router-dom";
import routes from "../../constants/routes";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

export default function DrawerList(props) {
    const classes = useStyles();

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={props.toggleDrawer}
            onKeyDown={props.toggleDrawer}
        >
            <List>
                {routes.map((route, index) => (
                    <Link to={route.path}>
                        <ListItem button key={index}>
                            <ListItemText primary={route.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
        </div>
    );

    return (
        list('left')
    )
}
