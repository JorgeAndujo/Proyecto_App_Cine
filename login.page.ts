import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user:string;
  pass:string;
  msg:string;

  constructor(private router?:Router) { }

  ngOnInit() {
  }
  validarUsuario(){
    if(this.user == "admin"){
      if(this.pass == "0711"){
        this.user = "";
        this.pass = "";
        this.msg = "";
        window.localStorage.setItem('tfLog','true');
        this.router.navigate(['']);
      }
      else{
        this.msg = "La contraseña es incorrecta.";
      }
    }else{
      this.msg = "El nombre de usuario es incorrecto o no existe.";
    }


  }
  

  validarEV (user,pass)
  {
    if (user != '' && pass != ''){
      return true;
  
    }else
    
    {return false;}
  }
  
  RightLogin(user, pass)
  {
    if (user == 'admin' && pass == '0711'){
      return true;
  
    }else
    
    {return false;}
  }

}


