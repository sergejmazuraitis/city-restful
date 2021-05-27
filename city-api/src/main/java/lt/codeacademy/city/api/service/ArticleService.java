package lt.codeacademy.city.api.service;

import lombok.extern.slf4j.Slf4j;
import lt.codeacademy.city.api.entity.Article;
import lt.codeacademy.city.api.exception.ArticleNotFoundException;
import lt.codeacademy.city.api.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class ArticleService {
    private final ArticleRepository articleRepository;

    public ArticleService(ArticleRepository articleRepository) {
        this.articleRepository = articleRepository;
    }

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public void addArticle(Article article) {
        try {
            articleRepository.save(article);
        }catch (IllegalArgumentException e) {
            log.error("Cannot create article {}", article);
        }
    }

    public Article getArticle(UUID id) {
        return articleRepository.findById(id).orElseThrow(() -> new ArticleNotFoundException(id.toString()));
    }

    public void updateArticle(Article article) {
        try {
            articleRepository.save(article);
        }catch (IllegalArgumentException e) {
            log.error("Cannot create article {}", article);
        }
    }

    public void deleteArticle(UUID id){
        articleRepository.deleteById(id);
    }
}
