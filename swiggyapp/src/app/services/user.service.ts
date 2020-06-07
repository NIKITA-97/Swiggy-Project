import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor() {}
  set(getDataFromDatabase) {
    localStorage.setItem("users", JSON.stringify(getDataFromDatabase));
  }
  get_profile() {
    let users = localStorage.getItem("users");
    return JSON.parse(users);
  }
  destroy() {
    localStorage.removeItem("users");
  }
}
