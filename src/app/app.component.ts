import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pwagram';

  showpostform(){
    const form = document.getElementById('postform')||document.createElement('form');
      if(form!=null){
       if(form.style.display == 'none'){
         form.style.display = 'block';
       }
      }
   }

   closepost(){
    const form = document.getElementById('postform')||document.createElement('form');
    if(form!=null){
      if(form.style.display == 'block'){
        form.style.display = 'none';
      }
     }
  }
}
