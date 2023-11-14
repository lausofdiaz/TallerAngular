import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retroceder-js',
  templateUrl: './retroceder-js.component.html',
  styleUrls: ['./retroceder-js.component.scss']
})
export class RetrocederJSComponent {
  constructor(private router:Router){}
  
  retroceder(){
    this.router.navigate(['/']); 
    
  }
}
