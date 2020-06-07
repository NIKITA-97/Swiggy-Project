import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "swiggyApp";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyBZE-l2mx4SOrVsEQ3SSSthWAYFTYX7rr4",
      authDomain: "swiggy-41cf8.firebaseapp.com",
      databaseURL: "https://swiggy-41cf8.firebaseio.com",
      projectId: "swiggy-41cf8",
      storageBucket: "swiggy-41cf8.appspot.com",
      messagingSenderId: "764710349906",
      appId: "1:764710349906:web:925e2fdecada7e9010c38b"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
