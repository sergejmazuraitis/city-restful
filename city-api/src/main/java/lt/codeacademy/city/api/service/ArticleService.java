package lt.codeacademy.city.api.service;

import lombok.extern.slf4j.Slf4j;
import lt.codeacademy.city.api.entity.Article;
import lt.codeacademy.city.api.entity.Image;
import lt.codeacademy.city.api.exception.ArticleNotFoundException;
import lt.codeacademy.city.api.exception.ImageException;
import lt.codeacademy.city.api.repository.ArticleRepository;
import lt.codeacademy.city.api.repository.ImageRepository;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Base64;
import java.util.List;
import java.util.Set;
import java.util.UUID;

@Service
@Slf4j
public class ArticleService {
    private static final int MAX_SIZE = 10000000; //10MB
    private final Set<String> types;
    private final Path fileLocation;

    private final ArticleRepository articleRepository;
    private final ImageRepository imageRepository;

    public ArticleService(ArticleRepository articleRepository, ImageRepository imageRepository) {
        this.articleRepository = articleRepository;
        this.imageRepository = imageRepository;
        fileLocation = Paths.get("./files").toAbsolutePath().normalize();
        types = Set.of(MediaType.IMAGE_GIF_VALUE, MediaType.IMAGE_PNG_VALUE, MediaType.IMAGE_JPEG_VALUE);

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

    public List<Article> gelLast5Articles() {
        return articleRepository.findFirst5ByOrderByTimestampDesc();
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

    public void saveNewArticle(MultipartFile image, String name, String description, String content) throws IOException {
        Article article = new Article();
        String imageBase64 = new String(Base64.getEncoder().encodeToString(image.getBytes()));
        article.setName(name);
        article.setDescription(description);
        article.setContent(content);
        article.setImage(imageBase64);

        articleRepository.save(article);
    }

    public void saveImageInFileSystem(MultipartFile multipartFile) {
        validateFile(multipartFile);
        createDirectory();

        try {
            Image image = new Image();
            image.setFileName(multipartFile.getOriginalFilename());
            image.setMediaType(multipartFile.getContentType());
            image.setSize(multipartFile.getSize());

           image = imageRepository.save(image);

            Path newFilePath = fileLocation.resolve(image.getId().toString());
            Files.copy(multipartFile.getInputStream(), newFilePath, StandardCopyOption.REPLACE_EXISTING);
        } catch (Exception e) {
            log.error("Cannot create file ", e);
            throw new ImageException("Cannot create file");
        }
    }

    private void createDirectory() {
        try {
            if (!Files.exists(fileLocation)) {
                Files.createDirectory(fileLocation);
            }
        } catch (Exception e) {
            log.error("Cannot create directory ", e);
            throw new ImageException("Cannot create directory");
        }
    }

    private void validateFile(MultipartFile file) {
        if (file.getSize() > MAX_SIZE) {
            throw new ImageException("Image is to big");
        }

        if (!types.contains(file.getContentType())) {
            throw new ImageException("Image media type not allowed");
        }
    }

}
