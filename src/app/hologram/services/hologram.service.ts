import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Hologram } from "../models/hologram";
import { Observable, catchError, of, tap } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HologramService {
  // private hologramsUrl = "api/holograms"; // for mock in-memory db
  private hologramsUrl = "http://localhost:3000/holograms";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(private http: HttpClient) {}

  getHolograms(): Observable<Hologram[]> {
    return this.http.get<Hologram[]>(this.hologramsUrl).pipe(
      tap((_) => {
        console.log("Fetched holograms");
      }),
      catchError(this.handleError<Hologram[]>("getHolograms", [])),
    );
  }

  addHologram(hologramToAdd: Hologram): Observable<Hologram> {
    return this.http.post<Hologram>(this.hologramsUrl, hologramToAdd, this.httpOptions).pipe(
      tap((newHologram: Hologram) => console.log(`added hologram ${newHologram.name}`)),
      catchError(this.handleError<Hologram>("addHologram")),
    );
  }

  deleteHologram(id: number): Observable<Hologram> {
    const url = `${this.hologramsUrl}/${id}`;

    return this.http.delete<Hologram>(url, this.httpOptions).pipe(
      tap((_) => console.log(`deleted hologram id=${id}`)),
      catchError(this.handleError<Hologram>("deleteHologram")),
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(operation, error, "Failed to fetch Holograms");

      return of(result as T);
    };
  }
}
