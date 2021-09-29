import React from 'react';
import './style.css';
import { Form, TextInput, Heading, FormField, TextArea, Button, Box } from 'grommet';
import { ButtonSubmit } from '..';

export const CommentForm = () =>{
  return (
      <div className="comment-form-div">
        <Heading size="small" color="var(--title-post)" level="3">New Comment</Heading>
        <Form className="comment-form"
        /*value={value}
        onChange={nextValue => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => {}}*/
        >
        <FormField name="comment" htmlFor="comment" label="Comment">
            <TextArea type="text" required id="comment" name="comment" />
        </FormField>
        <FormField name="author" htmlFor="author" label="Author">
            <TextInput type="text" required id="author" name="author" />
        </FormField>
        <ButtonSubmit/>
        </Form>
      </div>
  )
}