import React from 'react';
import './style.css';
import { Form, TextInput, Heading, FormField, Select, TextArea, Button, Box } from 'grommet';
import { ButtonSubmit } from '..';

export const PostForm = () =>{
  return (
      <div className="post-form-div">
        <Heading size="small" color="var(--title-post)" level="3">New Post</Heading>
        <Form className="post-form"
        /*value={value}
        onChange={nextValue => setValue(nextValue)}
        onReset={() => setValue({})}
        onSubmit={({ value }) => {}}*/
        >
        <FormField name="title" htmlFor="title" label="Title">
            <TextInput type="text" required id="title" name="title" />
        </FormField>
        <FormField name="body" htmlFor="body" label="Body">
            <TextArea type="text" required id="body" name="body" />
        </FormField>
        <FormField name="author" htmlFor="author" label="Author">
            <TextInput type="text" required id="author" name="author" />
        </FormField>
        <FormField name="category" htmlFor="category" label="Category">
            <Select required
            options={['React', 'Redux', 'Compasso']}
            /*value={value}
            onChange={({ option }) => setValue(option)}*/
            />
        </FormField>
        <ButtonSubmit/>
        </Form>
      </div>
  )
}