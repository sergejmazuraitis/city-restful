package lt.codeacademy.city.api.controller;

import lt.codeacademy.city.api.Endpoint;
import lt.codeacademy.city.api.entity.Article;
import lt.codeacademy.city.api.service.ArticleService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;
import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping(Endpoint.ARTICLES)
public class ArticleController {

    private final ArticleService articleService;

    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasRole('ADMIN')")
    public void addArticle(@Valid @RequestBody Article article) {
        articleService.addArticle(article);
    }

    @GetMapping
    public List<Article> getAllArticles() {
        return articleService.getAllArticles();
    }

    @GetMapping(Endpoint.UUID_VAR)
    public Article getArticle(@PathVariable(Endpoint.UUID) UUID uuid) {
        return articleService.getArticle(uuid);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasRole('ADMIN')")
    public void updateArticle(@RequestParam MultipartFile image,
                              @RequestParam String name,
                              @RequestParam String description,
                              @RequestParam String content,
                              @RequestParam UUID uuid) throws IOException {

        articleService.updateArticle(image, name, description, content, uuid);
    }

    @DeleteMapping(Endpoint.UUID_VAR)
    @ResponseStatus(HttpStatus.NO_CONTENT)
    @PreAuthorize("hasRole('ADMIN')")
    public void deleteArticle(@PathVariable(Endpoint.UUID) UUID uuid) {
        articleService.deleteArticle(uuid);
    }

    @PostMapping("/upload")
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasRole('ADMIN')")
    public void saveImageInFileSystem(@RequestParam MultipartFile image,
                                     @RequestParam String name,
                                     @RequestParam String description,
                                     @RequestParam String content) throws IOException {
        articleService.saveNewArticle(image, name, description, content);
    }

    @GetMapping("/last")
    public List<Article> getLast5Articles() {
        return articleService.gelLast5Articles();
    }

    @GetMapping("/pages")
    public Page<Article> getArticlesWithPages(
            @RequestParam Optional<Integer> page,
            @RequestParam Optional<String> sortBy
            ) {
        return articleService.getArticlesWithPages(PageRequest.of(
                page.orElse(0),
                3,
                Sort.Direction.ASC, sortBy.orElse("name")
        ));
    }
}
