package lt.codeacademy.city.api;

public interface Endpoint {
    String UUID = "UUID";

    String API_ROOT = "/city/api";
    String ARTICLES = "/articles";
    String ARTICLE = "/{" + UUID + "}";
    String COMMENTS = ARTICLES + ARTICLE + "/comments";
    String COMMENT = ARTICLES + "/comment/{" + UUID + "}";
    String NEW_COMMENT = ARTICLES + "/comment";
    String LOGIN = "/login";
}
