import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guia-compradores',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './guia-compradores.component.html',
  styleUrl: './guia-compradores.component.scss'
})
export class GuiaCompradoresComponent {}