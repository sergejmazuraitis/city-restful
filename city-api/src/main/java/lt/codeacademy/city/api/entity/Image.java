package lt.codeacademy.city.api.entity;

import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.Type;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Setter
@Table(name = "Images")
public class Image {
    @Id
    @GeneratedValue
    @Column(columnDefinition = "VARCHAR(36)", updatable = false)
    @Type(type = "uuid-char")
    private UUID id;

    @Column(columnDefinition = "VARCHAR(100)")
    private String fileName;

    @Column(columnDefinition = "VARCHAR(30)")
    private String mediaType;

    @Column(columnDefinition = "int")
    private long size;

//    @Lob
//    private byte[] bytes;

//    @OneToMany(cascade = CascadeType.ALL, mappedBy = "image")
//    private List<Article> articles;
}
