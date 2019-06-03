import { Component, OnInit, HostBinding } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error: string;

  constructor(public http: HttpClient, private AppComp: AppComponent) { }

 /* @HostBinding('class.is-open')
  isOpen = false;

  register() {
    this.isOpen = !this.isOpen;
  }*/

  reg(name: HTMLInputElement, sname: HTMLInputElement, username: HTMLInputElement, password: HTMLInputElement) : boolean  {

    if (name.value == '' || sname.value == '' || username.value == '' || password.value == '') {
      this.error = ('Tutti i campi sono obbligatori!');
      console.log(this.error)
    } else {

      //console.log('dgdfgdfjkhkonhjdfsrkohkop')
      //l'url va cambiato ogni volta
      this.http.post("http://node24.codenvy.io:48384/register", {
        name: name.value,
        sname: sname.value,
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
            this.error = 'registrazione effettuata con successo';
          } else {
            this.error = "registrazione non ha avuto successo";
          }

        });
    }
    return false;
  }
  ngOnInit() {

  }

}
