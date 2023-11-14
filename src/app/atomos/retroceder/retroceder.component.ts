import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-retroceder',
  templateUrl: './retroceder.component.html',
  styleUrls: ['./retroceder.component.scss']
})
export class RetrocederComponent {

  constructor(private router:Router){}
  
  retroceder(){
    this.router.navigate(['/']); 
    
  }
}
