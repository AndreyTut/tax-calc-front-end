import {HttpClient} from "@angular/common/http";
import {TaxDetails} from "../model/TaxDetails";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class TaxService {
  http: HttpClient;
  baseUrl: string = 'http://localhost:8080/tax/'

  constructor(httpClient: HttpClient) {
    this.http = httpClient
  }

  getTaxDetails(salary: string): Observable<TaxDetails> {
    return this.http.get<TaxDetails>(this.baseUrl + salary);
  }
}
