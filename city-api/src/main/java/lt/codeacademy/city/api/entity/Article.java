package lt.codeacademy.city.api.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.Date;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "Articles")
public class Article {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
    @Type(type = "uuid-char")
    private UUID id;

    @NotNull
    @Size(min = 2,
            max = 50)
    private String name;

    @NotNull
    @Size(min = 5,
            max = 250)
    private String description;

    @NotNull
    @Size(min = 5,
            max = 10000)
    @Column(columnDefinition = "VARCHAR(10000)")
    private String content;

    private Date date = new Date();
}
