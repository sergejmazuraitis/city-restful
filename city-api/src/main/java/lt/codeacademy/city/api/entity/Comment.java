package lt.codeacademy.city.api.entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "Comments")
public class Comment {

    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
    @Type(type = "uuid-char")
    private UUID commentId;

    @CreationTimestamp
    private LocalDateTime timestamp = LocalDateTime.now();

    @NotNull
    @Size(min = 1,
            max = 250,
            message = "{validation.size.name}")
    private String content;

    @Type(type = "uuid-char")
    private UUID articleId;

    @Type(type = "uuid-char")
    private UUID userId;

    @NotNull
    @Size(min = 1,
            max = 250)
    private String username;

}
