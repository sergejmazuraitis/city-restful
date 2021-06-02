package lt.codeacademy.city.api.exception;

import lombok.Getter;

@Getter
public class ImageException extends RuntimeException {
    private final String message;

    public ImageException(String message) {
        super(message);
        this.message = message;
    }
}
