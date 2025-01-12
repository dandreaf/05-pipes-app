import { Component } from '@angular/core';

@Component({
  selector: 'products-basics-page',
  standalone: false,

  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {

  public nameLower: string = 'fabricio';
  public nameUpper: string = 'FABRICIO';
  public fullName: string = 'FaBrICio d aNdreA';
  public customDate: Date = new Date();
}
