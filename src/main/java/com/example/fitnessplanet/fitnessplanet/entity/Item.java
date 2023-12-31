package com.example.fitnessplanet.fitnessplanet.entity;


import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Builder
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="items")
public class Item {

    @Id
    @SequenceGenerator(name = "product_seq_gen", sequenceName = "product_id_seq", allocationSize = 1)
    @GeneratedValue(generator = "product_seq_gen", strategy = GenerationType.SEQUENCE)
    private Integer productId;

    @Column(name = "product_name", nullable = false)
    private String productName;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "price", nullable = false)
    private float price;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "size", nullable = false)
    private int size;

//    @Enumerated(EnumType.STRING)
//    @Column(name = "type", nullable = false)
//    private ProductType type;
//
//    @Enumerated(EnumType.STRING)
//    @Column(name = "category", nullable = false)
//    private ProductCategory category;
//
}