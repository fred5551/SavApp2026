import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recette } from '../models/recette.model';
import { RecetteFormDTO, LigneIngredientDTO } from '../models/dto.model';


@Injectable({
  providedIn: 'root',
})
export class RecetteService {
  private readonly API_URL = 'http://localhost:8080/api-savon/v1/recette';

  constructor(private http: HttpClient) {}

  getRecettes(): Observable<Recette[]> {
    return this.http.get<Recette[]>(this.API_URL);
  }

  getRecetteById(id: number): Observable<Recette> {
    return this.http.get<Recette>(`${this.API_URL}/${id}`);
  }

  /** Crée une nouvelle recette — POST avec RecetteFormDTO */
  createRecette(dto: RecetteFormDTO): Observable<Recette> {
    return this.http.post<Recette>(this.API_URL, dto);
  }

  /** Met à jour une recette — PUT /:id avec RecetteFormDTO */
  updateRecette(id: number, dto: RecetteFormDTO): Observable<Recette> {
    return this.http.put<Recette>(`${this.API_URL}/${id}`, dto);
  }

  deleteRecette(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }

  deleteAllRecettes(): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/all`);
  }
  /** Récupère toutes les recettes de la base de données (Admin uniquement) */
  getAllRecettesAdmin(): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/all`);
  }
}