import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, ThemeProvider, IconButton } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import moment from 'moment';

import {useStyles, theme} from './styles.js';

const Post = ({ post }) => {
    const classes = useStyles();
    
    return (
        <ThemeProvider theme={theme}>
            <Card className={classes.card}>
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
                <div className={classes.overlay}>
                    <Typography variant="h6">{post.creator}</Typography>
                    <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography>
                </div>
                <div className={classes.overlay2}>
                    {/* <Button style={{color: 'white'}} size="small" startIcon={<MoreHorizIcon />} onClick={() => {}}>
                    </Button> */}
                    <IconButton style={{color: 'white'}} aria-label="edit" onClick={() => {}}>
                        <MoreHorizIcon />
                    </IconButton>
                </div>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary">{post.tags.map((tag) => `#${tag} `)}</Typography>
                </div>
                <CardContent>
                    <Typography className={classes.title} variant="h5" gutterBottom>{post.message}</Typography>
                </CardContent>
                <CardActions className={classes.cardActions}>
                    {/* 
                        in React 18, <button> tag will create a pure html button. but <Button> tag,
                        will create a React button.
                    */}
                    <Button size="small" startIcon={<ThumbUpAltIcon />} onClick={() => {}}>
                        Like
                        {post.likeCount}
                    </Button>
                    <Button size="small" startIcon={<DeleteIcon />} onClick={() => {}}>
                        Delete
                    </Button>
                </CardActions>
            </Card>
        </ThemeProvider>
    );
}

export default Post;