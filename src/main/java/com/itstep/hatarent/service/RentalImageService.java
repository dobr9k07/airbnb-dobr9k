package com.itstep.hatarent.service;

import com.itstep.hatarent.dto.rentalImage.RentalImageStripedDto;
import com.itstep.hatarent.model.RentalImage;
import com.itstep.hatarent.repository.RentalImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RentalImageService {
  @Autowired
  private RentalImageRepository rentalImageRepository;

  public List<RentalImageStripedDto> getRentalsImagesByRentalId(Long id) {
    List<RentalImage> rentalImages = rentalImageRepository.findByRental_Id(id);

    return rentalImages.stream().map(RentalImageStripedDto::new).toList();
  }
}
