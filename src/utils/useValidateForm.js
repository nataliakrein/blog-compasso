/*export default function useValidateForm(props) {

    const validateTitle = (title) => {
        const validate = (title !== undefined ? title.length : props.post.title.length)
        if (validate  === 0) {
            return 'Insira um titulo.'
        }
        if (validate <= 3) {
            return 'Titulo deve ter mais que 3 caracteres'
        }
        if (validate > 100) {
            return 'Titulo muito grande'
        } 
    }

    const validateBody = (body) => {
        const validate = (body !== undefined ? body.length : props.post.body.length)
        if (validate  === 0) {
            return 'Insira um conteudo.'
        }
        if (validate < 5) {
            return 'O conteudo deve ter mais que 5 caracteres'
        }
        if (validate > 6000) {
            return 'O conteudo deve ter menos que 6000 caracteres'
        } 
    }

    const validateAuthor = (author) => {
        const validate = (author !== undefined ? author.length : props.post.author.length)
        if (validate  === 0) {
            return 'Insira um autor.'
        }
        if (validate < 3) {
            return 'O conteudo deve ter mais que 3 caracteres'
        }
        if (validate > 20) {
            return 'O conteudo deve ter menos que 20 caracteres'
        } 
    }

    const validateCategory = (category) => {
        const validate = (category !== undefined ? category : props.post.category)
        if (!((validate === 'redux') || (validate === 'react') || (validate === 'compasso'))) {
            return 'Insira uma categoria.'
        }
    }

  return { validateTitle, validateCategory, validateBody, validateAuthor };
}*/