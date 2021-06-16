import HTTP from "./index";

const fetchArticles = () => HTTP.get('/articles');

const fetchLast5Articles = () => HTTP.get('/articles/last');

const fetchArticleById = (params) => HTTP.get('/articles/' + params);

const addNewArticleWithImage = (newArticle) => {

    let formData = new FormData();
    formData.append('image', newArticle.image)
    formData.set('name', newArticle.name)
    formData.set('description', newArticle.description)
    formData.set('content', newArticle.content)

    return HTTP.post('/articles/upload', formData)
};

const deleteArticleById = (id) => HTTP.delete('/articles/' + id);

const updateArticle = (articleData) => {

    let formDataUpdate = new FormData();
    formDataUpdate.append('image', articleData.image)
    formDataUpdate.set('name', articleData.name)
    formDataUpdate.set('description', articleData.description)
    formDataUpdate.set('content', articleData.content)
    formDataUpdate.set('uuid', articleData.id)

    return HTTP.put('/articles', formDataUpdate)
};

const getArticlesPages = (page) => HTTP.get('/articles/pages?page=' + page);


export {
    fetchArticles,
    fetchArticleById,
    deleteArticleById,
    updateArticle,
    addNewArticleWithImage,
    fetchLast5Articles,
    getArticlesPages
};