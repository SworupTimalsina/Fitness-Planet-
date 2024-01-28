package com.example.fitnessplanet.fitnessplanet.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemDTO {

    private Integer product_id;

    @NotNull
    private String productName;

    @NotNull
    private String description;

    @NotNull
    private float price;

    @NotNull
    private String category;



    public String getProductName() {
        return productName;
    }
}