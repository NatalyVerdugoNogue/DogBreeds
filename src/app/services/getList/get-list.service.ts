import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetListService {

  constructor(private http: HttpClient) { }

  // lista de razas 
  getAllBreeds(): Observable<any> {
    const urlListAllBreeds = "https://dog.ceo/api/breeds/list/all";
    return this.http.get(urlListAllBreeds);
  }

  // lista de subraza dependiendo de la raza
  getSubBreeds(subBreed: string): Observable<object> {
    const urlListSubBreed = `https://dog.ceo/api/breed/${subBreed}/list`
    return this.http.get(urlListSubBreed);
  }
}
