import HTTP from "./index";

const fetchArticles = () => HTTP.get('/articles')

const fetchArticleById = (params) => HTTP.get('/articles/' + params)

const addNewArticle = (newArticle) => HTTP.post('/articles', newArticle)

const deleteArticleById = (id) => HTTP.delete('/articles/' + id)

const updateArticle = (article) => HTTP.put('/articles', article)

export { fetchArticles, addNewArticle, fetchArticleById, deleteArticleById, updateArticle}