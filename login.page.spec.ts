import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

describe ('LoginPage',() => {
    let login: LoginPage;
    

    beforeEach(waitForAsync(()=>{
        login = new LoginPage();
    }))
    
    it('should not be void', waitForAsync(()=>{
        expect(login.validarEV('eduardo','1234')).toEqual(true);
    }))

    it('user should be (admin) and password should be (0711)', waitForAsync(()=>{
        expect(login.RightLogin('admin','0711')).toEqual(true);
    }))
})

