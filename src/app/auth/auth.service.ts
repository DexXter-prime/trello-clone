import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  state = false;

  isLoggedIn(): Observable<boolean> {
    return of(this.state).pipe(delay(200))
  }
}
