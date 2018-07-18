import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const config = {
apiUrl: 'http://localhost:8000'
};

interface Response {
  success: boolean;
  errorMessage: string;
  data?: any;
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) { }
  login (username: string, password: string) {
    return this.http.post<any>(`${config.apiUrl}/users/authenticate`, { username: username, password: password })
            .pipe(map(res => {
                if (res && res.success && res.data) {
                    // store user details
                    sessionStorage.setItem('currentUser', JSON.stringify(res.data));
                }
                return res;
            }))
            .pipe(catchError(this.handleError('login', [])));
  }

  logout (username) {
    return this.http.get<any>(`${config.apiUrl}/users/logout/${username}`)
    .pipe(map(res => {
      sessionStorage.removeItem('currentUser');
      return res;
    }))
    .pipe(catchError(this.handleError('logout', [])));
  }

  private handleError (operation, result) {
    return (error: any): Observable<Response> => {
      console.log(`error in ${operation}:  ${error}`);
      return of({ success: false, errorMessage: 'Some error occured!!' } as Response);
    };
  }
}
