export const useValidateForm = (props) => {

    const validateTitle = (title) => {
        const validate = (title !== undefined ? title.length : props.post.title.length)
        if (validate  === 0) {
            return 'Title is required.'
        }
        if (validate < 3) {
            return 'Title must be at least 3 characters long.'
        }
        if (validate > 150) {
            return 'Title should be between 3 and 150 characters long.'
        } 
    }

    const validateBody = (body) => {
        const validate = (body !== undefined ? body.length : props.post.body.length)
        if (validate  === 0) {
            return 'Body is required.'
        }
        if (validate < 5) {
            return 'Body must be at least 5 characters long.'
        }
        if (validate > 6000) {
            return 'Body should be between 5 and 6000 characters long.'
        } 
    }

    const validateAuthor = (author) => {
        const postOrComment = props.post ? props.post : props.comment
        const validate = (author !== undefined ? author.length : postOrComment.author.length)
        if (validate  === 0) {
            return 'Author is required.'
        }
        if (validate < 3) {
            return 'Author must be at least 3 characters long.'
        }
        if (validate > 20) {
            return 'Author should be between 3 and 20 characters long.'
        } 
      }

    const validateCategory = (category) => {
        const validate = (category !== undefined ? category : props.post.category)
        if (!((validate === 'redux') || (validate === 'react') || (validate === 'compasso'))) {
            return 'Category is required.'
        }
    }

    const validateComment = (comment) => {
        const validate = (comment !== undefined ? comment.length : props.comment.body.length)
        if (validate  === 0) {
            return 'Comment is required.'
        }
        if (validate < 3) {
          return 'Comment must be at least 3 characters long.'
        }
        if (validate > 300) {
            return 'Comment should be between 3 and 300 characters long.'
        } 
    }

  return { validateTitle, validateCategory, validateBody, validateAuthor, validateComment };
}