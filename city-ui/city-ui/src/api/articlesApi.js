import HTTP from "./index";

const fetchArticles = () => HTTP.get('/articles')

const fetchArticleById = (params) => HTTP.get('/articles/' + params)

const addNewArticle = (newArticle) => HTTP.post('/articles', newArticle)

export { fetchArticles, addNewArticle, fetchArticleById }