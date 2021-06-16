package lt.codeacademy.city.api.service;

import lombok.extern.slf4j.Slf4j;
import lt.codeacademy.city.api.entity.Article;
import lt.codeacademy.city.api.entity.Image;
import lt.codeacademy.city.api.exception.ArticleNotFoundException;
import lt.codeacademy.city.api.repository.ArticleRepository;
import lt.codeacademy.city.api.repository.ImageRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.Base64;
import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class ArticleService {

    private final ArticleRepository articleRepository;
    private final ImageRepository imageRepository;

    public ArticleService(ArticleRepository articleRepository, ImageRepository imageRepository) {
        this.articleRepository = articleRepository;
        this.imageRepository = imageRepository;
    }

    public List<Article> getAllArticles() {
        return articleRepository.findAll();
    }

    public void addArticle(Article article) {
        try {
            articleRepository.save(article);
        } catch (IllegalArgumentException e) {
            log.error("Cannot create article {}", article);
        }
    }

    public List<Article> gelLast5Articles() {
        return articleRepository.findFirst5ByOrderByTimestampDesc();
    }

    public Article getArticle(UUID id) {
        return articleRepository.findById(id).orElseThrow(() -> new ArticleNotFoundException(id.toString()));
    }

    public void updateArticle(MultipartFile image, String name, String description, String content, UUID uuid) throws IOException {
        Article article = new Article();
        String imageBase64 = Base64.getEncoder().encodeToString(image.getBytes());
        article.setId(uuid);
        article.setName(name);
        article.setDescription(description);
        article.setContent(content);
        article.setImage(imageBase64);

        Image img = new Image();
        img.setFileName(image.getOriginalFilename());
        img.setMediaType(image.getContentType());
        img.setSize(image.getSize());

        imageRepository.save(img);


        articleRepository.save(article);
    }

    public void deleteArticle(UUID id) {
        articleRepository.deleteById(id);
    }

    public void saveNewArticle(MultipartFile image, String name, String description, String content) throws IOException {
        Article article = new Article();
        String imageBase64 = Base64.getEncoder().encodeToString(image.getBytes());
        article.setName(name);
        article.setDescription(description);
        article.setContent(content);
        article.setImage(imageBase64);

        Image img = new Image();
        img.setFileName(image.getOriginalFilename());
        img.setMediaType(image.getContentType());
        img.setSize(image.getSize());

        imageRepository.save(img);


        articleRepository.save(article);
    }

    public Page<Article> getArticlesWithPages(Pageable pageable) {
        return articleRepository.findAll(pageable);
    }
}
