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

    console.log("====>>>>1111");
    cordova.plugins.testPlugin.coolMethod("向原生传递的参数",
      result => {
        alert(result)
      },
      error => {
        alert(error)
      });
  }

  openPage(){

    cordova.plugins.testPlugin.open("xx",
      result => {
        //alert(result)
      },
      error => {
       // alert(error)
      });

  }
}
