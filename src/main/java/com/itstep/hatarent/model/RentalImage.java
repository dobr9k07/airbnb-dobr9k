package com.itstep.hatarent.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(
  name = "rental_image",
  uniqueConstraints = {
    @UniqueConstraint(columnNames = {"rental_id", "image_position"})
  }
)
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class RentalImage {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  @Column(name = "id")
  private Long id;

  @ManyToOne(fetch = FetchType.LAZY, optional = false)
  @JoinColumn(name = "rental_id", nullable = false, foreignKey = @ForeignKey(name = "rental_image_rental_FK"))
  private Rental rental;

  @Column(name = "image_path", nullable = false, length = 100)
  private String imagePath;

  @Column(name = "image_position", nullable = false)
  private Integer imagePosition;

}