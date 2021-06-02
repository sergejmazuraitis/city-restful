package lt.codeacademy.city.api.controller;

import lt.codeacademy.city.api.Endpoint;
import lt.codeacademy.city.api.entity.Article;
import lt.codeacademy.city.api.service.ArticleService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(Endpoint.API_ROOT + Endpoint.ARTICLES)
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

//    @PostMapping
//    @ResponseStatus(HttpStatus.CREATED)
//    public void addArticle(@Valid @RequestBody Article article) {
//        articleService.addArticle(article);
//    }

    @GetMapping
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping(Endpoint.ARTICLE)
    public Article getArticle(@PathVariable(Endpoint.UUID) UUID uuid) {
        return articleService.getArticle(uuid);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void updateArticle(@Valid @RequestBody Article article) {
        articleService.updateArticle(article);
    }

    @DeleteMapping(Endpoint.ARTICLE)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteArticle(@PathVariable(Endpoint.UUID) UUID uuid) {
        articleService.deleteArticle(uuid);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void saveArticleWithImage(@RequestParam MultipartFile multipartFile,
                                     @RequestParam String name,
                                     @RequestParam String description,
                                     @RequestParam String content) throws IOException {
        articleService.saveNewArticle(multipartFile, name, description, content);
    }

    @PostMapping("/upload")
    @ResponseStatus(HttpStatus.CREATED)
    public void saveImagenFileSystem(@RequestParam MultipartFile multipartFile,
                                     @RequestParam String name,
                                     @RequestParam String description,
                                     @RequestParam String content) {
        articleService.saveImageInFileSystem(multipartFile);
    }
}
