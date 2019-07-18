import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GetListService {
  private urlListAllBreeds = "https://dog.ceo/api/breeds/list/all";

  constructor(private http: HttpClient) {}

  getAllBreeds(): Observable<any> {
    return this.http.get(this.urlListAllBreeds);
  }
}
