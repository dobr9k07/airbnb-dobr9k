package com.itstep.hatarent.controller;

import com.itstep.hatarent.service.ImageService;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
import org.springframework.core.io.Resource;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.UUID;

@RestController
@AllArgsConstructor
@Tag(name = "Images", description = "Запросы связанные с изображениями")
@RequestMapping("/api/image")
public class ImageController {
  private ImageService imageService;

  @GetMapping("")
  public ResponseEntity<byte[]> downloadImage(@RequestParam UUID id) throws IOException {
    Resource resource = imageService.getImageByPath(id);
    if (resource == null || !resource.exists()) {
      return ResponseEntity.notFound().build();
    }

    String mimeType;
    try {
      mimeType = Files.probeContentType(resource.getFile().toPath());
    } catch (IOException e) {
      mimeType = "application/octet-stream";
    }
    if (mimeType == null) {
      mimeType = "application/octet-stream";
    }

    byte[] imageBytes = Files.readAllBytes(resource.getFile().toPath());

    return ResponseEntity.ok()
      .contentType(MediaType.parseMediaType(mimeType))
      .body(imageBytes);
  }

  @PostMapping(path = "", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
  public ResponseEntity<String> uploadImage(
    @RequestBody MultipartFile image) throws IOException {
    if (image == null || image.isEmpty()) {
      return ResponseEntity.badRequest().body("No image provided");
    }

    UUID id = UUID.randomUUID();
    imageService.saveImage(id, image);
    return ResponseEntity.ok(id.toString());
  }

  @DeleteMapping("")
  public ResponseEntity<String> deleteImage(@RequestParam UUID id) throws IOException {
    imageService.deleteImage(id);
    return ResponseEntity.ok(id.toString());
  }
}
