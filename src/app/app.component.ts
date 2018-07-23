import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { TabsPage } from '../pages/tabs/tabs';
import { timer } from 'rxjs/observable/timer';

@Component({

  templateUrl: 'app.html'
})
export class MyApp {



  @ViewChild(Nav) nav: Nav;

  rootPage: any = "LoginPage";
 // rootPage: any = TabsPage;
  pages: any;
  


  showSplash = true;
 // splash = true;
  //tabBarElement: any;

  constructor(public platform: Platform, 
    public statusBar: StatusBar,
   
    public splashScreen: SplashScreen) {
    
     // this.tabBarElement = document.querySelector('.tabbar');
      this.initializeApp();

  }

  initializeApp() {
     

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
     
   

      timer(3000).subscribe(() => this.showSplash = false)
      
       
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

 /* ionViewDidLoad(){	
    this.tabBarElement.style.display = 'none';
      setTimeout(()=> {
        this.splash = false;
        this.tabBarElement.style.display = 'flex';
      }, 4000);
    }*/
}
