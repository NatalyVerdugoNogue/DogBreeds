import { Component, OnInit } from "@angular/core";
import { GetListService } from "src/app/services/get-list.service";

import { FormControl } from "@angular/forms";

@Component({
  selector: "app-breeds",
  templateUrl: "./breeds.component.html",
  styleUrls: ["./breeds.component.css"]
})
export class BreedsComponent implements OnInit {
  breedsList: string[] = [];
  breeds = new FormControl();

  constructor(public listService: GetListService) {}

  ngOnInit(): void {
    this.listService.getAllBreeds().subscribe(list => {
      this.breedsList = Object.keys(list.message);
    });
  }
}
