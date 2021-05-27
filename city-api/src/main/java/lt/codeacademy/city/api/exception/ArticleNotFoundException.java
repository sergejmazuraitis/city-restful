package lt.codeacademy.city.api.exception;

public class ArticleNotFoundException extends RuntimeException{
    private final String articleId;
    private final String message;

    public ArticleNotFoundException(String articleId) {
        this.articleId = articleId;
        this.message = String.format("Tokio straipsnio %s nėra", articleId);
    }
}
