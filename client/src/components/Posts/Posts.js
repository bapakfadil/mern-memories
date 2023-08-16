import React from 'react';
import { Grid, CircularProgress, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';

import Post from './Post/Post.js';
import {useStyles, theme} from './styles.js';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);

    return (
        !posts.length ? <CircularProgress /> : (
            <ThemeProvider theme={theme}>
                <Grid className={classes.container} container alignItems='stretch' spacing={3} >
                    {posts.map((post) => (
                        <Grid key={post._id} item xs={12} sm={6} >
                            <Post post={post} />
                        </Grid>
                    ))};
                </Grid>
            </ThemeProvider>
        )
    );
}

export default Posts;