import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
declare let cordova: any;//引入插件
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }


  callTestPlugin() {
    cordova.plugins.TestPlugin.coolMethod("向原生传递的参数",
      result => {
        alert(result)
      },
      error => {
        alert(error)
      });
  }

}
