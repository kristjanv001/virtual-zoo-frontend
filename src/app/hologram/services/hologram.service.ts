import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Hologram } from "../models/hologram";
import { Observable, catchError, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HologramService {
  private hologramsUrl = "api/holograms";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  getHolograms(): Observable<Hologram[]> {
    return this.http.get<Hologram[]>(this.hologramsUrl).pipe(
      tap((_) => {
        console.log("fetched holograms");
      }),
      catchError(this.handleError<Hologram[]>("getHeroes", [])),
    );
  }

  addHologram(hologram: Hologram): Observable<Hologram> {
    return this.http.post<Hologram>(this.hologramsUrl, hologram, this.httpOptions).pipe(
      tap((newHologram: Hologram) => {
        console.log(`Added a new hologram with id: ${newHologram.id}`);
      }),
      catchError(this.handleError<Hologram>("addHologram")),
    );
  }

  deleteHologram(id: number): Observable<Hologram> {
      const url = `${this.hologramsUrl}/${id}`;

      return this.http.delete<Hologram>(url, this.httpOptions).pipe(
        tap(_ => {
          console.log(`Deleted hologram with id: ${id}`)
        }),
        catchError(this.handleError<Hologram>('deleteHero'))
      );
    }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error, "Failed to fetch Heroes");

      return of(result as T);
    };
  }
}
