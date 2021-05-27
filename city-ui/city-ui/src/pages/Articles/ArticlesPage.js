import {useEffect, useState} from "react";
import {fetchArticles} from "../../api/articlesApi";

const Articles = () => {

    const [articles, setArticles] = useState([])

    useEffect(() => {
        fetchArticles()
            .then(({data}) => {
                setArticles(data)
            })
    })

    return (
        <>
            <h1>Articles</h1>
            <h3>
                <pre>
                    {JSON.stringify(articles, null, 2)}
                </pre>
            </h3>
        </>

)
}

export default Articles