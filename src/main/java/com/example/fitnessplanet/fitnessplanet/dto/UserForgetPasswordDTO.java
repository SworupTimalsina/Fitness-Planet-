package com.example.fitnessplanet.fitnessplanet.dto;

import org.antlr.v4.runtime.misc.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserForgetPasswordDTO {
    @NotNull
    private String email;

    private String otp;

    private String password;
}