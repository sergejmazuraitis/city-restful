import HTTP from "./index";

const fetchArticles = () => HTTP.get('/articles')
    .finally(response => new Promise((resolve, reject) => {
        setTimeout(() => resolve(response))
    }))

const addNewArticle = (newArticle) => HTTP.post('/articles', newArticle)

export { fetchArticles, addNewArticle }