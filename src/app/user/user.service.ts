import { environment } from './../../environments/environment';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';
import { User } from "./user";

@Injectable({providedIn: 'root'})
export class UserService {
    private apiServerUrl = environment.apiBaseUrl;

    constructor(private http: HttpClient) { }

    public getUsers() : Observable<User[]>
    {
    return this.http.get<User[]>(`${this.apiServerUrl}/api/user`);
    }
    public addUser(user: User): Observable<User> {
        return this.http.post<User>(`${this.apiServerUrl}/api/user`, user);
    }
    
    public updateUser(userId: number,user: User): Observable<User> {
        return this.http.put<User>(`${this.apiServerUrl}/api/user/${userId}`, user);
    }
    
    public deleteUser(userId: number): Observable<void> {
        return this.http.delete<void>(`${this.apiServerUrl}/api/user/${userId}`);
    } 
}