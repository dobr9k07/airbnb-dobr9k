package com.itstep.hatarent.controller;

import com.itstep.hatarent.service.ImageService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.AllArgsConstructor;
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
  public ResponseEntity<byte[]> downloadImage(UUID id) throws IOException {
    byte[] data = imageService.getImageByPath(id);
    Path path = Path.of("/data/rentalImages").resolve(id.toString()).normalize();
    String mimeType = Files.probeContentType(path);
    if (mimeType == null) mimeType = "application/octet-stream";

    return ResponseEntity.ok()
      .contentType(MediaType.parseMediaType(mimeType))
      .body(data);
  }

  @PostMapping("")
  public ResponseEntity<String> uploadImage(@RequestParam("image") MultipartFile image) throws IOException {
    UUID id = UUID.randomUUID();
    imageService.saveImage(id, image);
    return ResponseEntity.ok(id.toString());
  }
}
