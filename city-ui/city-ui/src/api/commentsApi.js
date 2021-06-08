import HTTP from "./index";

const fetchComments = (id) => HTTP.get("/articles/" + id + "/comments")
const postNewComment = (commentData) => HTTP.post("/articles/comment", commentData)
const deleteCommentById = (id) => HTTP.delete("/articles/comment/" + id)

export {fetchComments, postNewComment, deleteCommentById}