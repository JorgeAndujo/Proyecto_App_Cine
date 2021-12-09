import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab3Page } from './tab3.page';

describe('Boletos',()=>
{
    let boleto:Tab3Page;

    beforeEach(waitForAsync(()=>{
        boleto = new Tab3Page();
        boleto.IniciarSesion(true);
    }))

    it('should be logged in', waitForAsync(()=>{
        expect(boleto.validarIS()).toEqual(true);
    }))

    it('should not be void', waitForAsync(()=>{
        expect(boleto.validarEV('123','asd','1234','asdf','as12')).toEqual(true);
    }))


    
}





)
