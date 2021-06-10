package lt.codeacademy.city.api.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.multipart.MultipartResolver;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import java.nio.charset.StandardCharsets;

@Configuration
public class ApplicationConfig {
    public static final long FILE_MAX_SIZE = 50*1024*1024; //50MB
    @Bean
    public MultipartResolver multipartResolver()
    {
        CommonsMultipartResolver commonsMultipartResolver = new CommonsMultipartResolver();
        commonsMultipartResolver.setDefaultEncoding(StandardCharsets.UTF_8.name());
        commonsMultipartResolver.setMaxUploadSize(FILE_MAX_SIZE);
        return commonsMultipartResolver;
    }
}
