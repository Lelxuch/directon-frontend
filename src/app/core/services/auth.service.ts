import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authDataKey = "authData";
  private tokenKey = "token"

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { }

  get currentUser(): any {
    return JSON.parse(<string>sessionStorage.getItem(this.authDataKey));
  }

  get token(): string | null {
    return sessionStorage.getItem(this.tokenKey) as string;
  }

  get isLogged(): boolean {
    return !!this.token;
  }

  login(user: any) {
    // return this.http.post(`/api/v1/users/signin?password=${user.password}&username=${user.username}`, user).pipe(
    //   map((response: any) => {
    //
    //     let loggedUser: any = {
    //       id: response.id,
    //       username: response.username,
    //       firstName: response.firstName,
    //       lastName: response.lastName,
    //       role: response.userRole
    //     }
    //
    //     sessionStorage.setItem(this.authDataKey, JSON.stringify(loggedUser));
    //     sessionStorage.setItem(this.tokenKey, response.token);
    //
    //     return this.currentUser;
    //   })
    // )

    let loggedUser: any = {
      id: 1,
      username: 'test',
      firstName: 'test',
      lastName: 'test',
      role: 'ROLE_USER'
    }

    sessionStorage.setItem(this.authDataKey, JSON.stringify(loggedUser));
    sessionStorage.setItem(this.tokenKey, "token");
    return this.currentUser;
  }

  logout() {
    sessionStorage.clear();
    this.router.navigateByUrl('/');
  }
}
