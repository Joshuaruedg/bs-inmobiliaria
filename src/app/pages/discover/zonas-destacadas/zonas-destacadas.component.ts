import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-zonas-destacadas',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './zonas-destacadas.component.html',
  styleUrl: './zonas-destacadas.component.scss'
})
export class ZonasDestacadasComponent {}