import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(private router?:Router) { }

  ngOnInit() {
  }
  cerrarSesion(){
    window.localStorage.setItem('tfLog','');
    this.router.navigate(['login']);
  }

  validarIS() {
    if (window.localStorage.getItem('session') == 'true') {
      return true;
    } else {
      return false;
    }
  }

  btnCS(click) {
    if (click == true) {
      window.localStorage.setItem('session', 'false');
    } else {
      return;
    }
  }
}
