package lt.codeacademy.city.api.service;

import lombok.extern.slf4j.Slf4j;
import lt.codeacademy.city.api.entity.Comment;
import lt.codeacademy.city.api.exception.ArticleNotFoundException;
import lt.codeacademy.city.api.exception.CommentNotFoundException;
import lt.codeacademy.city.api.repository.CommentRepository;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@Slf4j
public class CommentService {
    private final CommentRepository commentRepository;

    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    public void addComment(Comment comment) {
        try {
            commentRepository.save(comment);
        } catch (IllegalArgumentException e) {
            log.error("Cannot create Comment {}", comment);
        }
    }

    public Comment getCommentById(UUID id) {
        return commentRepository.findById(id).orElseThrow(() -> new CommentNotFoundException(id.toString()));
    }

    public void updateComment(Comment comment) {
        try {
            commentRepository.save(comment);
        } catch (IllegalArgumentException e) {
            log.error("Cannot create Comment {}", comment);
        }
    }

    public void deleteComment(UUID id) {
        commentRepository.deleteById(id);
    }

    public List<Comment> getCommentsByArticleId(UUID id) {
        return commentRepository.findAllById(id);
    }

    public boolean validateIsUserComment(UUID id, UUID userId, String role) {
        Comment comment = commentRepository.findById(id).orElseThrow(() -> new CommentNotFoundException(id.toString()));

        if (userId == null || role == null) {
            return false;
        } else if (role.equals("ADMIN")) {
            return true;
        }
        return comment.getUser().getId().equals(userId);
    }
}
