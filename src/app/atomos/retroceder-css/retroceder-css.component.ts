import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retroceder-css',
  templateUrl: './retroceder-css.component.html',
  styleUrls: ['./retroceder-css.component.scss']
})
export class RetrocederCSSComponent {
  constructor(private router:Router){}
  
  retroceder(){
    this.router.navigate(['/']); 
    
  }

}
