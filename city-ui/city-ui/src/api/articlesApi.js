import HTTP from "./index";

const fetchArticles = () => HTTP.get('/articles')

const fetchLast5Articles = () => HTTP.get('/articles/last')

const fetchArticleById = (params) => HTTP.get('/articles/' + params)

const addNewArticle = (newArticle) => HTTP.post('/articles', newArticle)

const addNewArticleWithImage = (newArticle) => {

    console.log('newArticle', newArticle)

    let formData = new FormData();
    formData.append('image', newArticle.image)
    formData.set('name', newArticle.name)
    formData.set('description', newArticle.description)
    formData.set('content', newArticle.content)

    console.log(formData.get('image'))

    return HTTP.post('/articles/upload', formData)
}

const deleteArticleById = (id) => HTTP.delete('/articles/' + id)

const updateArticle = (articleData) => {

    let formDataUpdate = new FormData();
    formDataUpdate.append('image', articleData.image)
    formDataUpdate.set('name', articleData.name)
    formDataUpdate.set('description', articleData.description)
    formDataUpdate.set('content', articleData.content)
    formDataUpdate.set('uuid', articleData.id)

    console.log(formDataUpdate.get('image'))

    return HTTP.put('/articles', formDataUpdate)
}

export {
    fetchArticles,
    addNewArticle,
    fetchArticleById,
    deleteArticleById,
    updateArticle,
    addNewArticleWithImage,
    fetchLast5Articles
}