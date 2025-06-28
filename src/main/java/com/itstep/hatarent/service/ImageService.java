package com.itstep.hatarent.service;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.UUID;

@Service
public class ImageService {
  public final Path imagesDirectory = Path.of("data/rentalImages");

  public byte[] getImageByPath(UUID id) throws IOException {
    Path imagePath = imagesDirectory.resolve(id.toString()).normalize();

    if (!imagePath.startsWith(imagesDirectory)) {
      throw new SecurityException("Access denied");
    }

    if (!Files.exists(imagePath) || !Files.isRegularFile(imagePath)) {
      throw new NoSuchFileException("Image not found: " + id);
    }

    return Files.readAllBytes(imagePath);
  }

  public void saveImage(UUID id, MultipartFile image) throws IOException {
    Path imagePath = imagesDirectory.resolve(id.toString()).normalize();

    if (!imagePath.startsWith(imagesDirectory)) {
      throw new SecurityException("Access denied");
    }

    Files.write(imagePath, image.getBytes(), StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);
  }

}
