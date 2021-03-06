import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import * as firebase from 'firebase';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  
  data: { email: string, password: string } = { email: '', password: '' };


  constructor(
    public navCtrl: NavController,
    public alertController: AlertController) { }
    
  async signIn() {
    try {
      await firebase
        .auth()
        .signInWithEmailAndPassword(this.data.email, this.data.password);

      //this.navCtrl.goRoot('room');
      this.navCtrl.navigateRoot('room');

    } catch (error) {
      const alert = await this.alertController.create({
        header: '警告',
        message: error.message,
        buttons: ['OK']
      });
      alert.present();
    }
  }

  signUp() {
    //this.navCtrl.goForward('signup');
    this.navCtrl.navigateForward('signup');
  }
  
  ngOnInit() {
    
  }
}

  

