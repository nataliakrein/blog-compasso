import React from 'react';
import { CommentList, Post } from '../../components';
import './style.css';
//import { Card, CardFooter, CardHeader, Button, CardBody, Text, Heading, Box } from 'grommet';
//import { Edit, Trash, Like, Dislike, Chat } from 'grommet-icons';

export const PostDetailPage = () =>{
  return (
      <div>
          <Post/>
          <CommentList/>
      </div>
  )
}