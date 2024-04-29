import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Hologram } from "../models/hologram";
import { Observable, catchError, of, tap, throwError } from "rxjs";
import { MessagesService } from "../../core/services/messages.service";

@Injectable({
  providedIn: "root",
})
export class HologramService {
  // private hologramsUrl = "api/holograms"; // for mock in-memory db
  private hologramsUrl = "http://localhost:3000/holograms";
  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };

  constructor(
    private http: HttpClient,
    private messageService: MessagesService,
  ) {}

  getHolograms(): Observable<Hologram[]> {
    return this.http.get<Hologram[]>(this.hologramsUrl).pipe(
      tap((_) => {
        // this.messageService.add(`Holograms fetched.`, 'info');
      }),
      catchError(this.handleError<Hologram[]>("Fail. There was a problem fetching holograms.", [])),
    );
  }

  addHologram(hologramToAdd: Hologram): Observable<Hologram> {
    return this.http.post<Hologram>(this.hologramsUrl, hologramToAdd, this.httpOptions).pipe(
      tap((newHologram: Hologram) => {
        this.messageService.add(`${newHologram.name} added`, "success");
      }),
      catchError(this.handleError<Hologram>("Fail. Hologram was not added.")),
    );
  }

  deleteHologram(id: number): Observable<Hologram> {
    const url = `${this.hologramsUrl}/${id}`;

    return this.http.delete<Hologram>(url, this.httpOptions).pipe(
      tap((deletedHologram) => {
        this.messageService.add(`${deletedHologram.name} removed`, "success");
      }),
      catchError(this.handleError<Hologram>("Fail. Hologram was not removed.")),
    );
  }

  updateHologram(hologram: Hologram, id: number): Observable<any> {
    const url = `${this.hologramsUrl}/${id}`;

    return this.http.patch(url, hologram, this.httpOptions).pipe(
      tap((_) => {
        this.messageService.add(`Hologram updated`, "success");
      }),
      catchError(this.handleError<any>("Fail. Hologram was not updated.")),
    );
  }

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.messageService.add(operation, "danger");
      return of(result as T);
    };
  }
}
