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

    //调用原生方法
    cordova.plugins.testPlugin.coolMethod("向底层传递传递的参数",
      result => {
        alert(result)
      },
      error => {
        alert(error)
      });
  }

  openPage(){

    //打开原生页面 
    cordova.plugins.testPlugin.open("open page",
      result => {
        console.log("result:"+result);
      },
      error => {
         console.log("error:"+error);
      });

  }
}
