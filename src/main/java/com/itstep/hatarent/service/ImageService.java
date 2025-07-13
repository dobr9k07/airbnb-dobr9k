package com.itstep.hatarent.service;

import org.springframework.core.io.PathResource;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.NoSuchFileException;
import java.nio.file.Path;
import java.nio.file.StandardOpenOption;
import java.util.Objects;
import java.util.UUID;

@Service
public class ImageService {
  private final Path imagesDirectory = Path.of("data","rentalImages");

  public Resource getImageByPath(UUID id) throws IOException {
    Path imagePath = imagesDirectory.resolve(id.toString()).normalize();

    if (!imagePath.startsWith(imagesDirectory)) {
      throw new SecurityException("Access denied");
    }

    if (!Files.exists(imagePath) || !Files.isRegularFile(imagePath)) {
      throw new NoSuchFileException("Image not found: " + id);
    }

    return new PathResource(imagePath);
  }

  public void saveImage(UUID id, MultipartFile image) throws IOException {
    String contentType = Objects.requireNonNull(image.getContentType(), "Content type cannot be null");
    if (!contentType.startsWith("image/")) {
      throw new IllegalArgumentException("Not an image");
    }

    String extension = getExtensionFromContentType(contentType);
    String fileName = id + (extension != null ? "." + extension : "");
    Path imagePath = imagesDirectory.resolve(fileName).normalize();

    if (!imagePath.startsWith(imagesDirectory)) {
      throw new SecurityException("Access denied");
    }

    Files.write(imagePath, image.getBytes(), StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);
  }

  public void deleteImage(UUID id) throws IOException {
    Path imagePath = imagesDirectory.resolve(id.toString()).normalize();

    if (!imagePath.startsWith(imagesDirectory)) {
      throw new SecurityException("Access denied");
    }

    if (!Files.deleteIfExists(imagePath)) {
      throw new NoSuchFileException("No such image");
    }
  }

  private String getExtensionFromContentType(String contentType) {
    return switch (contentType) {
      case "image/jpeg" -> "jpg";
      case "image/png" -> "png";
      case "image/gif" -> "gif";
      default -> null;
    };
  }
}
