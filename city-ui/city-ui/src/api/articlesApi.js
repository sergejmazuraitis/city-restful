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

const updateArticle = (article) => HTTP.put('/articles', article)

export {fetchArticles, addNewArticle, fetchArticleById, deleteArticleById, updateArticle, addNewArticleWithImage, fetchLast5Articles}