import React from 'react';
import './style.css';
import { Card, CardFooter, CardHeader, Button, CardBody, Text, Heading, Box } from 'grommet';

export const CommentList = () =>{
  return (
    <div className="comment-list">
        <Heading size="small" color="var(--title-post)" level="5">Comments</Heading>
    </div>
  )
}