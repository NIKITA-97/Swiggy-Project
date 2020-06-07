import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { UserService } from "../services/user.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  logo = "../../assets/images/swiggylogo.svg";
  constructor(private userservice: UserService) {}

  ngOnInit() {}
  logout() {
    this.userservice.destroy();
    firebase.auth().signOut();
  }
}
