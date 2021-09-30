import React from 'react';
import './style.css';
import { Select, Button, Box } from 'grommet';
import { Post } from '../../components';

export const PostsPage = () =>{
  return (
      <div className="posts-page">
          <Box direction="row" width="100%" align="stretch" justify="evenly">
            <Select alignSelf="stretch"
                a11yTitle="Posts filter"
                placeholder="Sort by..."
                options={['Vote Score', 'Date and Time']}
                /*value={value}
                onChange={({ option }) => setValue(option)}*/
                />
            <Button primary label="New Post" nameContainer="New Post"/>
          </Box>
            <Box direction="column" width="100%" justify="evenly">
                <Post/>
            </Box>

      </div>
  )
}