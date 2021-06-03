package lt.codeacademy.city.api.repository;

import lt.codeacademy.city.api.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CommentRepository extends JpaRepository<Comment, UUID> {
}
