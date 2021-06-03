package lt.codeacademy.city.api.exception;

public class CommentNotFoundException extends RuntimeException{
    private final String articleId;
    private final String message;

    public CommentNotFoundException(String articleId) {
        this.articleId = articleId;
        this.message = String.format("Tokio straipsnio %s nėra", articleId);
    }
}
