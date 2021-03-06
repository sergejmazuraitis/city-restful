package lt.codeacademy.city.api.repository;

import lt.codeacademy.city.api.entity.Article;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ArticleRepository extends JpaRepository<Article, UUID> {
    List<Article> findFirst5ByOrderByTimestampDesc();
}
