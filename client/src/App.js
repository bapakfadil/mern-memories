import React, { useEffect } from "react";
import {Container, AppBar, Typography, Grow, Grid, ThemeProvider } from '@mui/material';
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts.js";
import Form from "./components/Form/Form.js";
import memories from './images/memories.png';
import {useStyles, theme } from './styles.js';

const App = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [dispatch]);

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                    <img className={classes.image} src={memories} alt="icon" height="60" />
                </AppBar>
                <Grow in>
                    <Container>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Posts />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Form />
                        </Grid>
                    </Grid>
                    </Container>
                </Grow>
            </Container>
        </ThemeProvider>
    );
}

export default App;