package lt.codeacademy.city.api.exception;

public class UserNorFoundException extends RuntimeException {
    private final String userId;
    private final String message;

    public UserNorFoundException(String userId) {
        this.userId = userId;
        this.message = String.format("Tokio straipsnio %s nėra", userId);
    }
}
