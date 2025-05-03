package com.itstep.hatarent.dto;

import com.itstep.hatarent.model.Rental;
import lombok.Data;
import org.springframework.data.geo.Point;

import java.math.BigDecimal;

@Data
public class RentalDto {
    private String name;
    private String description;
    private BigDecimal price_per_night;
    private String location;

    public RentalDto(Rental entity) {
        this.name = entity.getName();
        this.description = entity.getDescription();
        this.price_per_night = entity.getPrice_per_night();
        this.location = entity.getLocation();
    }
}
