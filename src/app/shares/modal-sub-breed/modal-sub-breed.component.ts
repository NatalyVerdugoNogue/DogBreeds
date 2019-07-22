import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";
import { GetImageService } from "src/app/services/getImage/get-image.service";

@Component({
  selector: "app-modal-sub-breed",
  templateUrl: "./modal-sub-breed.component.html",
  styleUrls: ["./modal-sub-breed.component.css"]
})
export class ModalSubBreedComponent {
  allSubBreed: any = [];
  favoriteSubBreed: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public imagesService: GetImageService
  ) {
    this.getImages(data.name, data.subBreed);
  }

  // obtener url de imagene random y crear data
  getImages(breed: string, subBreed: any) {
    subBreed.map(sub => {
      this.imagesService.getImageSubBreed(breed, sub).subscribe(url => {
        this.allSubBreed.push({ breed, subBreed: sub, url: url.message });
        this.favoriteSubBreed = this.allSubBreed[0];
      });
    });
  }
}
