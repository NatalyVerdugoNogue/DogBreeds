import { Component, ViewChild } from "@angular/core";
import { GetListService } from "src/app/services/getList/get-list.service";

import { GetImageService } from "../../services/getImage/get-image.service";

import { SelectAutocompleteComponent } from 'mat-select-autocomplete';

@Component({
  selector: "app-breeds",
  templateUrl: "./breeds.component.html",
  styleUrls: ["./breeds.component.css"]
})
export class BreedsComponent {
  @ViewChild(SelectAutocompleteComponent) multiSelect: SelectAutocompleteComponent;

  // variables inicio
  breedsList = [];
  selectedOptions = [];

  constructor(
    public listService: GetListService,
    public imagesService: GetImageService
  ) { }

  ngOnInit() {
    //carga de lista de razas desde http service 
    this.listService.getAllBreeds().subscribe(list => {
      const entries = Object.entries(list.message);
      this.breedsList = entries.map(name => {
        return { display: name[0], value: [name[0], name[1]] };
      });
    })
  }

  // trabajo lista para obtener url img
  getSelectedOptions(selected) {
    this.selected = [];
    selected.map(name => {
      this.imagesService.getImageBreed(name[0]).subscribe(url => {
        this.selected.push({ name: name[0], url: url.message, sub: name[1] });
      });
    });
  }

  // variables de mat-select-autocomplete
  selected = this.selectedOptions;
  showError = false;
  errorMessage = '';

  onToggleDropdown() {
    this.multiSelect.toggleDropdown();
  }

  onResetSelection() {
    this.selectedOptions = [];
  }
}
