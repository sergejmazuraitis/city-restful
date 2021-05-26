package lt.codeacademy.city.api.service;

import lombok.extern.slf4j.Slf4j;
import lt.codeacademy.city.api.entity.Article;
import lt.codeacademy.city.api.repository.ArticleRepository;
import org.springframework.stereotype.Service;

import java.util.List;

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
}
