import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink,
    NgFor
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  name = '';
  phone = '';
  email = '';
  interest = 'Comprar una propiedad';
  message = '';

  readonly interests = [
    'Comprar una propiedad',
    'Vender una propiedad',
    'Rentar una propiedad',
    'Publicar mi propiedad',
    'Invertir en preventa',
    'Invertir en una propiedad',
    'Solicitar valoración de mi propiedad',
    'Agendar una visita',
    'Recibir asesoría inmobiliaria',
    'Otra consulta'
  ];

  sendWhatsApp(): void {

    const text = [
      'Hola, BS Inmobiliaria.',
      '',
      'Me gustaría recibir asesoría.',
      '',
      `Nombre: ${this.name || 'No indicado'}`,
      `Teléfono: ${this.phone || 'No indicado'}`,
      `Correo: ${this.email || 'No indicado'}`,
      `Interés: ${this.interest}`,
      `Mensaje: ${this.message || 'Sin mensaje adicional'}`
    ].join('\n');

    const url =
      `https://wa.me/522221673601?text=${encodeURIComponent(text)}`;

    window.open(
      url,
      '_blank',
      'noopener,noreferrer'
    );
  }
}
