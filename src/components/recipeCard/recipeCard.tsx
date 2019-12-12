import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';


import Avatar from '@material-ui/core/Avatar';

import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme: Theme) =>
createStyles({
    card: {
    maxWidth: 345,
    },
    media: {
    height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
    },
    expandOpen: {
    transform: 'rotate(180deg)',
    },
    avatar: {
    backgroundColor: red[500],
    },
}),
);

export default function RecipeCard() {
    const classes = useStyles();

    return (
    <Card className={classes.card}>
        <CardHeader
        avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
            T
            </Avatar>
        }
        title="Tortilla francesa"
        subheader="14 Diciembre 2019"
        />
        <CardMedia
        className={classes.media}
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcocina-casera.com%2Fwp-content%2Fuploads%2F2011%2F11%2Ftortilla-francesa-queso-receta.jpg&f=1&nofb=1"
        title="userimage"
        />
    </Card>
    );
}