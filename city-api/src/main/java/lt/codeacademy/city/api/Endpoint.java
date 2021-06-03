package lt.codeacademy.city.api;

public interface Endpoint {
    String UUID = "UUID";
    String COMMENT_UUID = "COMMENT_UUID";

    String API_ROOT = "/city/api";
    String ARTICLES = "/articles";
    String ARTICLE = "/{" + UUID + "}";
    String COMMENTS = ARTICLES + ARTICLE + "/comments";
    String COMMENT = "/{" + COMMENT_UUID + "}";
}
