package lt.codeacademy.city.api.controller;

import lt.codeacademy.city.api.Endpoint;
import lt.codeacademy.city.api.entity.Comment;
import lt.codeacademy.city.api.service.CommentService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping(Endpoint.COMMENTS)
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public List<Comment> getCommentsByArticleId (@PathVariable(Endpoint.UUID)UUID uuid) {
        return commentService.getCommentsByArticleId(uuid);
    }

    @DeleteMapping(Endpoint.COMMENT)
    public void deleteComment(@PathVariable(Endpoint.COMMENT_UUID)UUID uuid) {
        commentService.deleteComment(uuid);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void creteNewComment(@Valid @RequestBody Comment comment) {
        commentService.addComment(comment);
    }

    @PutMapping
    @ResponseStatus(HttpStatus.CREATED)
    public void updateComment(@Valid @RequestBody Comment comment){
        commentService.updateComment(comment);
    }
}
