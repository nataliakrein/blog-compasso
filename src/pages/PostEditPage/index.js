import React from 'react';
import './style.css';
import { ButtonSubmit, PostForm } from '../../components';
import { getAllPosts, getCategories, editPost } from '../../actions'
import { useDispatch, useSelector } from 'react-redux'
import { Form, TextInput, Heading, FormField, Select, TextArea, Button, Box } from 'grommet';

export const PostEditPage = (props) =>{
    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)
    const categories = useSelector(state => state.categories)

    React.useEffect(() => {
        const init = async () => {
            await dispatch(getCategories())
            posts.length === 0 && await dispatch(getAllPosts(props.match.params.category), [])
        }
        init()
    }, [props.match.params.category])

    const editForm = async (e) => {
        e.preventDefault()
        await dispatch(editPost(props.match.params.id, {
            title: e.target.title.value,
            body: e.target.body.value,
        }))
        props.history.replace('/')
    }
  return (
    <div className="post-form-div_edit">
        <Heading size="small" color="var(--title-post)" level="3">Edit Post</Heading>
        {posts && posts.map(post => post.id === props.match.params.id &&
        (<Form className="post-form-edit" key={post.id} onSubmit={editForm}
        >
        <FormField name="title" htmlFor="title" label="Title">
            <TextInput type="text" required id="title" name="title" defaultValue={post.title} />
        </FormField>
        <FormField name="body" htmlFor="body" label="Body">
            <TextArea type="text" required id="body" name="body" defaultValue={post.body}/>
        </FormField>
        <FormField name="author" htmlFor="author" label="Author">
            <TextInput type="text" disabled id="author" name="author" value={post.author} />
        </FormField>
        <FormField name="category" htmlFor="category" label="Category">
            <Select disabled
            options={['React', 'Redux', 'Compasso']} 
            value={post.category} 
            /*value={value}
            onChange={({ option }) => setValue(option)}*/
            />
        </FormField>
        <Box className="button-submit" cldirection="row" gap="medium">
            <ButtonSubmit/>
        </Box>
        </Form>))}
    </div>
  )
}