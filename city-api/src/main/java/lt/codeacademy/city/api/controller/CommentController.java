package lt.codeacademy.city.api.controller;

import lt.codeacademy.city.api.Endpoint;
import lt.codeacademy.city.api.entity.Comment;
import lt.codeacademy.city.api.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping(Endpoint.COMMENTS)
    public List<Comment> getCommentsByArticleId(@PathVariable(Endpoint.UUID) UUID uuid) {
        return commentService.getCommentsByArticleId(uuid);
    }

    @GetMapping(Endpoint.COMMENT)
    public Comment getCommentById(@PathVariable(Endpoint.UUID) UUID uuid) {
        return commentService.getCommentById(uuid);
    }

    @DeleteMapping(Endpoint.COMMENT)
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    public void deleteComment(@PathVariable(Endpoint.UUID) UUID uuid) {
        commentService.deleteComment(uuid);
    }

    @PostMapping(Endpoint.NEW_COMMENT)
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    public void creteNewComment(@Valid @RequestBody Comment comment) {
                commentService.addComment(comment);
    }

    @PutMapping(Endpoint.NEW_COMMENT)
    @ResponseStatus(HttpStatus.CREATED)
    @PreAuthorize("hasAnyRole('ADMIN', 'USER')")
    public void updateComment(@Valid @RequestBody Comment comment) {
        commentService.updateComment(comment);
    }
}
