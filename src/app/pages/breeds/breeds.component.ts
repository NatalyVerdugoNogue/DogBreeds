import { Component, OnInit } from "@angular/core";
import { GetListService } from "src/app/services/getList/get-list.service";

import { FormControl } from "@angular/forms";
import { GetImageService } from "../../services/getImage/get-image.service";

@Component({
  selector: "app-breeds",
  templateUrl: "./breeds.component.html",
  styleUrls: ["./breeds.component.css"]
})
export class BreedsComponent implements OnInit {
  breedsList: string[] = [];
  breeds = new FormControl();

  constructor(
    public listService: GetListService,
    public imageService: GetImageService
  ) {}

  ngOnInit(): void {
    this.listService.getAllBreeds().subscribe(list => {
      this.breedsList = Object.keys(list.message);
    });
  }

  imageBreed(breed: string) {
    this.imageService.getImageBreed(breed).subscribe(image => {
      return image.message;
    });
  }
}
