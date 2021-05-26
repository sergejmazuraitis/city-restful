package lt.codeacademy.city.api.controller;

import lt.codeacademy.city.api.Endpoint;
import lt.codeacademy.city.api.entity.Article;
import lt.codeacademy.city.api.service.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping(Endpoint.API_ROOT + Endpoint.ARTICLES)
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void addArticle(@Valid @RequestBody Article article) {
        articleService.addArticle(article);
    }

    @GetMapping
    public List<Article> getAllArticles(){
        return articleService.getAllArticles();
    }
}