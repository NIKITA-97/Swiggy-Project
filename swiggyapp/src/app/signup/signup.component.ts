import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import * as firebase from "firebase";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  constructor(private toastr: ToastrService, private router: Router) {}

  signup(form: NgForm) {
    let email = form.value.email;
    let password = form.value.password;
    let username = form.value.username;
    let phone = form.value.phone;
    //we need to store this information into firebase database
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userData => {
        userData.user.sendEmailVerification();
        // console.log(userData);
        let message = `${email} user notification has been sent to your address please verify..`;
        this.toastr.success(message);
        this.router.navigate(["/login"]);
        return firebase
          .database()
          .ref("/user" + userData.user.uid)
          .set({
            email,
            password,
            username,
            phone,
            uid: userData.user.uid,
            registrationDate: new Date().toString()
          });
      })
      .catch(err => {
        this.toastr.error(err.message);
        console.log(err);
      });

    form.resetForm();
  }

  ngOnInit() {}
}
