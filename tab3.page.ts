import { Component } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  costoBoleto:number = 55;
  sala:string;
  lugar:string;
  total:number;
  cantidad:string;
  pelicula:string;
  horario:string;
  msg:string;
  constructor(private router?:Router) {}

  comprar(){
    if(this.pelicula != "" && this.pelicula != null){
      if(this.sala != "" && this.sala != null){
        if(this.lugar != "" && this.lugar != null){
          if(this.cantidad != null && this.cantidad != ""){
            if(this.horario != "" && this.horario != null){
              window.localStorage.setItem('movie', this.pelicula);
              window.localStorage.setItem('hall', this.sala);
              window.localStorage.setItem('place', this.lugar);
              window.localStorage.setItem('amount', this.cantidad);
              window.localStorage.setItem('schedule', this.horario);
              this.pelicula = "";
              this.sala = "";
              this.lugar = "";
              this.cantidad = "";
              this.horario = "";
              this.router.navigate(['recibo']);
            }
            else{
              this.msg = "Por favor seleccione un horario.";
            }
          }
          else{
            this.msg = "Por favor seleccione la cantidad de boletos."
          } 
        }
        else{
          this.msg = "Por favor seleccione el lugar de su asiento."
        }
      }
      else{
        this.msg = "Por favor seleccione una sala.";
      }
    }
    else{
      this.msg = "Por favor seleccione una pelicula."
    }
    
  }

  validarEV (pelicula,sala,fila,cantidad,horario)
  {
    if (pelicula != '' && sala != '' && fila != '' && cantidad != '' && horario != ''){
      return true;
  
    }else
    
    {return false;}
  }

  validarIS ()
  {
    if(window.localStorage.getItem('tfLog')=='true')
    {
      return true;
    }else 
    {
      return false;
    }
  }

  IniciarSesion(estado)
  {
    if(estado==true)
    {
      window.localStorage.setItem('tfLog','true');
    }else 
    {
      window.localStorage.setItem('tfLog', 'false');
    }
  }
}
