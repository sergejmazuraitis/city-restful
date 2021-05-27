import HTTP from "./index";

const fetchArticles = () => HTTP.get('/articles')
    .finally(response => new Promise((resolve, reject) => {
        setTimeout(() => resolve(response))
    }))

export { fetchArticles }