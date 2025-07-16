package com.ecommerce.store;

import com.ecommerce.store.model.Product;
import com.ecommerce.store.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StoreApplication {

    public static void main(String[] args) {
        SpringApplication.run(StoreApplication.class, args);
    }

    @Bean
    CommandLineRunner run(ProductRepository productRepository) {
        return args -> {
            productRepository.save(new Product(
                    "Noise Smartwatch",
                    "Fitness tracker with AMOLED display",
                    2999.0,
                    "https://m.media-amazon.com/images/I/71Zf9uUp+GL._AC_UF1000,1000_QL80_.jpg"
            ));
            productRepository.save(new Product(
                    "Canon DSLR Camera",
                    "24MP Digital SLR with lens kit",
                    45999.0,
                    "https://m.media-amazon.com/images/I/914hFeTU2-L._AC_UF1000,1000_QL80_.jpg"
            ));
        };
    }
}
