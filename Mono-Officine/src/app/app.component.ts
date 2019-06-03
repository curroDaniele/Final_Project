import { Component } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mono-Officine';

  public navbara: Boolean = false;
  public navbarb: Boolean = false;
  private navabrlog: boolean = false;

  navbarin() {
    this.navbara = true;
    this.navbarb = false;
  }

  ngOnInit() {
    if (localStorage.getItem("username") != null)
      this.navabrlog = true
    else
      this.navabrlog = false
  }
  /*
    public visiblel: Boolean = false;
    public visibler: Boolean = false;

    register() {
      this.visibler = true;
      this.visiblel = false;
    }

    login() {
      this.visiblel = true;
      this.visibler = false;
    }
  */


}
