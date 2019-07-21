import { Component, ViewChild, OnInit } from "@angular/core";

// Servicios
import { GetListService } from "src/app/services/getList/get-list.service";
import { GetImageService } from "../../services/getImage/get-image.service";

// Selector con autocompletar
import { SelectAutocompleteComponent } from "mat-select-autocomplete";

// Modal sub raza
import { MatDialog } from "@angular/material/dialog";
import { ModalSubBreedComponent } from "../../shares/modal-sub-breed/modal-sub-breed.component";

@Component({
  selector: "app-breeds",
  templateUrl: "./breeds.component.html",
  styleUrls: ["./breeds.component.css"]
})
export class BreedsComponent implements OnInit {
  @ViewChild(SelectAutocompleteComponent)
  multiSelect: SelectAutocompleteComponent;

  // variables inicio
  breedsList = [];
  selectedOptions = [];
  // variables de mat-select-autocomplete
  selected = this.selectedOptions;
  showError = false;
  errorMessage = "";

  constructor(
    public listService: GetListService,
    public imagesService: GetImageService,
    public dialog: MatDialog
  ) {}

  // carga de lista de razas desde http service
  ngOnInit() {
    this.listService.getAllBreeds().subscribe(list => {
      const entries = Object.entries(list.message);
      this.breedsList = entries.map(name => {
        return {
          display: name[0].replace(/\b\w/g, l => l.toUpperCase()),
          value: [name[0], name[1]]
        };
      });
    });
  }

  // trabajo lista para obtener url img
  getSelectedOptions(selected) {
    this.selected = [];
    selected.map(name => {
      this.imagesService.getImageBreed(name[0]).subscribe(url => {
        this.selected.push({
          name: name[0].replace(/\b\w/g, l => l.toUpperCase()),
          url: url.message,
          sub: name[1]
        });
      });
    });
  }

  // variables de mat-select-autocomplete
  onToggleDropdown() {
    this.multiSelect.toggleDropdown();
  }
  onResetSelection() {
    this.selectedOptions = [];
  }

  // Modal sub raza
  openDialog() {
    const dialogRef = this.dialog.open(ModalSubBreedComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
