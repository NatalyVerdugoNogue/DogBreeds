import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetImageService {
  constructor(private http: HttpClient) {}

  // obtener imagen random según raza
  getImageBreed(breed: string): Observable<any> {
    const urlImageBreeds = `https://dog.ceo/api/breed/${breed}/images/random`;
    return this.http.get(urlImageBreeds);
  }

  // obtener imagen random según sub raza
  getImageSubBreed(breed: string, subBreed: string): Observable<any> {
    const urlImageBreeds = `https://dog.ceo/api/breed/${breed.toLowerCase()}/${subBreed.toLowerCase()}/images/random`;
    return this.http.get(urlImageBreeds);
  }
}
