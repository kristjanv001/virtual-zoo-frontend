import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Hologram } from "../models/hologram";
import { Observable, catchError, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  private hologramsUrl = "api/holograms";
  private holograms: Hologram[] = [];

  constructor(private http: HttpClient) {}

  getHolograms(): Observable<Hologram[]> {
    return this.http.get<Hologram[]>(this.hologramsUrl).pipe(
      tap((_) => {
        console.log("fetched holograms");
      }),
      catchError(this.handleError<Hologram[]>("getHeroes", [])),
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      console.error("Failed to fetch Heroes");

      return of(result as T);
    };
  }
}
