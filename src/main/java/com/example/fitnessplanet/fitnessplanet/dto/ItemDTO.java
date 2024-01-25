package com.example.fitnessplanet.fitnessplanet.dto;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class ItemDTO {

    private Integer itemId;

    @NotNull
    private String productName;

    @NotNull
    private String description;

    @NotNull
    private float price;

    @NotNull
    private int quantity;

    @NotNull
    private String category;
//
//    @NotNull
//    private ItemCategory category;

    public static Integer getItemId() {
        return 1;

    }

    public static String getitemName() {
        return "name";

    }
}