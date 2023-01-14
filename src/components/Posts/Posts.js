import React from "react";

import Post from "./Post/Post";
import useStyles from "./styles";
import { useSelector } from "react-redux";
import { CircularProgress, Container, Grid } from "@material-ui/core";
const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const { posts, isLoading } = useSelector((state) => state.posts);
  // if (!posts.length && !isLoading) return "No Posts";

  return isLoading ? (
    <Container className={classes.loading}>
      <CircularProgress size="5em" />
    </Container>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts?.map((post) => (
        <Grid key={post._id} item xs={12} sm={12} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
