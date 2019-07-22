import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FlexLayoutModule } from "@angular/flex-layout";

import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";

import { SelectAutocompleteModule } from "mat-select-autocomplete";

// Material angular
import { BreedsComponent } from "./pages/breeds/breeds.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCheckboxModule,
  MatSelectModule,
  MatCardModule,
  MatGridListModule
} from "@angular/material";
import { MatDialogModule } from "@angular/material/dialog";
import { MatIconModule } from "@angular/material/icon";
import { ModalSubBreedComponent } from "./shares/modal-sub-breed/modal-sub-breed.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatRadioModule } from "@angular/material/radio";

@NgModule({
  declarations: [AppComponent, BreedsComponent, ModalSubBreedComponent],
  entryComponents: [ModalSubBreedComponent],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SelectAutocompleteModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
