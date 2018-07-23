import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {LostitemformPage} from './lostitemform';


@NgModule({
  declarations: [
    LostitemformPage,
  ],
  imports: [
    IonicPageModule.forChild(LostitemformPage),
  ],
})
export class LostitemformPageModule {}
