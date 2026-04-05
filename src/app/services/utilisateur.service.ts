import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Utilisateur } from '../models/utilisateur.model';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private readonly API_URL = 'http://localhost:8080/api/utilisateurs'; // adapte l'URL à ton backend

  constructor(private http: HttpClient) {}

   /**
   * Récupère la liste de tous les utilisateurs (Admin uniquement).
   */
  getUtilisateurs(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(this.API_URL);
  }

  /**
   * Récupère un utilisateur par son ID.
   */
  getUtilisateurById(id: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(`${this.API_URL}/${id}`);
  }
}