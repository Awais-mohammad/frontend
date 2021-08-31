import { Component } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpResponse, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  desktop: boolean;

  constructor(
    private http: HttpClient,

  ) {
    setTimeout(() => {
      setInterval(() => {
        if (window.innerWidth > 1200) {
          this.desktop = true;
          this.scrollNav();
        } else {
          this.desktop = false;
          if (window.scrollY >= 150) {
            let nav = document.getElementById("navMob");
            nav.style.animation = "navShort2 0.3s linear";
            nav.style.padding = "10px";
          } else if (window.scrollY < 150) {
            let nav = document.getElementById("navMob");
            nav.style.animation = "navBig2 0.3s linear";
            nav.style.padding = "30px";
          }
        }
      }, 100)
    }, 1000);
  }

  scrollNav() {
    if (window.scrollY >= 150) {
      let logo = document.getElementById("guid_682dbfc9_3c61_4d87_8709_2f2f2df57685");
      logo.style.animation = "logoShort 0.3s linear";
      logo.style.height = "45px";
      logo.style.top = "30px";

      let navBar = document.getElementById("navBar");
      navBar.style.animation = "navShort 0.3s linear";
      navBar.style.height = "90px";

      let home = document.getElementById("guid_d9c80f04_d190_44b6_ac8d_3c0811afc983");
      home.style.animation = "pageShort 0.3s linear";
      home.style.transform = "matrix(1, 0, 0, 1, 71.12582397460938, 75.55709838867188)";

      let about = document.getElementById("guid_2a2d8652_a83f_4d33_8333_d4c14d3e03e8");
      about.style.animation = "aboutShort 0.3s linear";
      about.style.transform = "matrix(1, 0, 0, 1, 243.12582397460938, 75.55709838867188)";

      let products = document.getElementById("guid_91f5347f_baa6_4846_9d1e_ddf339e4cbae");
      products.style.animation = "proShort 0.3s linear";
      products.style.transform = "matrix(1, 0, 0, 1, 133.12582397460938, 75.55709838867188)";

      let arrow1 = document.getElementById("guid_befab96e_2aef_427e_bb34_abb4070b8240");
      arrow1.style.animation = "arrow1Short 0.3s linear";
      arrow1.style.transform = "matrix(0, 1, -1, 0, 212.12579345703125, 80.5571060180664)";

      let contact = document.getElementById("guid_bcded2ac_ad52_4d03_a1ca_28affe2a32ff");
      contact.style.animation = "contactShort 0.3s linear";
      contact.style.transform = "matrix(1, 0, 0, 1, 312.1258239746094, 75.55709838867188)";

      let redBar = document.getElementById("guid_c09c97ac_3aa6_4f40_99c7_8131229385f0");
      redBar.style.animation = "redShort 0.3s linear";
      redBar.style.height = "80px";

      let icons = document.getElementById("guid_1138e213_0fb2_4e7b_8a67_f4fbf0df25ba");
      icons.style.animation = "iconShort 0.3s linear";
      icons.style.marginTop = "37px";

    } else if (window.scrollY <= 150) {
      console.log("initiated");

      let logo = document.getElementById("guid_682dbfc9_3c61_4d87_8709_2f2f2df57685");
      logo.style.animation = "logoBig 0.3s linear";
      logo.style.height = "68px";
      logo.style.top = "45px";

      let navBar = document.getElementById("navBar");
      navBar.style.animation = "navBig 0.3s linear";
      navBar.style.height = "120px";

      let home = document.getElementById("guid_d9c80f04_d190_44b6_ac8d_3c0811afc983");
      home.style.animation = "pageBig 0.3s linear";
      home.style.transform = "matrix(1, 0, 0, 1, 71.12582397460938, 92.55709838867188)";


      let about = document.getElementById("guid_2a2d8652_a83f_4d33_8333_d4c14d3e03e8");
      about.style.animation = "aboutBig 0.3s linear";
      about.style.transform = "matrix(1, 0, 0, 1, 243.12582397460938, 92.55709838867188)";

      let products = document.getElementById("guid_91f5347f_baa6_4846_9d1e_ddf339e4cbae");
      products.style.animation = "proBig 0.3s linear";
      products.style.transform = "matrix(1, 0, 0, 1, 133.12582397460938, 92.55709838867188)";

      let arrow1 = document.getElementById("guid_befab96e_2aef_427e_bb34_abb4070b8240");
      arrow1.style.animation = "arrow1Big 0.3s linear";
      arrow1.style.transform = "matrix(0, 1, -1, 0, 212.12579345703125, 101.5571060180664)";

      let contact = document.getElementById("guid_bcded2ac_ad52_4d03_a1ca_28affe2a32ff");
      contact.style.animation = "contactBig 0.3s linear";
      contact.style.transform = "matrix(1, 0, 0, 1, 312.1258239746094, 92.55709838867188)";

      let icons = document.getElementById("guid_1138e213_0fb2_4e7b_8a67_f4fbf0df25ba");
      icons.style.animation = "iconBig 0.3s linear";
      icons.style.marginTop = "50px";

      let redBar = document.getElementById("guid_c09c97ac_3aa6_4f40_99c7_8131229385f0");
      redBar.style.animation = "redBig 0.3s linear";
      redBar.style.height = "100px";
    }
  }

}