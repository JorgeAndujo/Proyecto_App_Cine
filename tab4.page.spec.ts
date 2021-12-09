import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Tab4Page } from './tab4.page';

describe('Opciones', () => {
    let opciones: Tab4Page;
  
    beforeEach(
      waitForAsync(() => {
        opciones = new Tab4Page();
        window.localStorage.setItem('session', 'true');
      })
    );
  
    it('should be logged in', () => {
      expect(opciones.validarIS()).toEqual(true);
    });
  
    it('should be logged out', () => {
      //Simulador boton cerrar sesion
      opciones.btnCS(true);
      expect(opciones.validarIS()).toEqual(false);
    });
  });
  