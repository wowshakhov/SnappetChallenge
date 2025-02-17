import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(
    private http: HttpClient,
  ) {}

  getUsers() {
    return this.http.get<User[]>('http://localhost:8988/users');
  }
}
