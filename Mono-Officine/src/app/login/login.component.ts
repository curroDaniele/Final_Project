import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: string;

  constructor(public http: HttpClient, private AppComp: AppComponent, private router: Router) { }

 /* @HostBinding('class.is-open')
  isOpen = false;

  login() {
    this.isOpen = !this.isOpen;
  }*/

  log(username: HTMLInputElement, password: HTMLInputElement): boolean {

    if (username.value == '' || password.value == '') {
      this.error = ('Tutti i campi sono obbligatori!');
      console.log(this.error)
    } else {
      //l'url va cambiato ogni volta
      this.http.post("http://node11.codenvy.io:33045/login", {
        username: username.value,
        password: password.value
      },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Access-Control-Allow-Origin': '*'
          })
        }).subscribe(data => {
          console.log(data)

          if (data == true) {
            this.router.navigate(['/map'])
            localStorage.setItem("username",username.value)
            window.location.reload();

          } else {
            this.error = "login non ha avuto successo";
          }

        });
    }
    return false;
  }
  ngOnInit() {

  }

}
