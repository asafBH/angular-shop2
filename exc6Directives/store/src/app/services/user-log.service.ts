import { Injectable } from '@angular/core';
import { User } from 'src/app/models/users';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserLogService {
  private users: User[] = [
    { name: 'admin', password: 'admin' },
    { name: 'user', password: 'user' }
  ];

  isAuthenticated = false;
  userLoggedIn: string;

  constructor() { }

  logIn(user: string, password: string): Observable<string> {
    if (this.users.filter(u => u.name === user && u.password === password).length > 0) {
      this.isAuthenticated = true;
      this.userLoggedIn = user;
      return of(user);
    }
    return throwError('User Not Found');
  }

  logOut() {
    this.isAuthenticated = false;
    this.userLoggedIn = '';
  }

}
