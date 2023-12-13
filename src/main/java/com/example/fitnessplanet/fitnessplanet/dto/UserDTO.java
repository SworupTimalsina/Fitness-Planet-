package com.example.fitnessplanet.fitnessplanet.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {

    private Integer id;
    @NotNull
    private String fullName;
    @NotNull
    private String email;
    @NotNull
    private String mobileNo;
    @NotNull
    private String password;
}
