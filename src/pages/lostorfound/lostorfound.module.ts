import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {LostorfoundPage} from './lostorfound';


@NgModule({
  declarations: [
    LostorfoundPage,
  ],
  imports: [
    IonicPageModule.forChild(LostorfoundPage),
  ],
})
export class LostorfoundPageModule {}
