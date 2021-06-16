package lt.codeacademy.city.api;

public interface Endpoint {
    String UUID = "UUID";

    String ARTICLES = "/articles";
    String UUID_VAR = "/{" + UUID + "}";
    String COMMENTS = ARTICLES + UUID_VAR + "/comments";
    String COMMENT = ARTICLES + "/comment/{" + UUID + "}";
    String NEW_COMMENT = ARTICLES + "/comment";
    String LOGIN = "/login";
    String USER = "/user";
}
