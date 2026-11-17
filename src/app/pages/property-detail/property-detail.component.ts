import { Component, inject } from '@angular/core';
import { CurrencyPipe, NgFor, NgIf } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { PROPERTIES } from '../../data/properties';

@Component({
  selector: 'app-property-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgFor,
    NgIf,
    RouterLink
  ],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.scss'
})
export class PropertyDetailComponent {

  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);

  readonly property =
    PROPERTIES.find(
      property =>
        property.slug ===
        this.route.snapshot.paramMap.get('slug')
    ) ?? PROPERTIES[0];

  readonly whatsapp =
    `https://wa.me/522221673601?text=${encodeURIComponent(
      `Hola, me interesa la propiedad: ${this.property.title}`
    )}`;

  goToCatalog(): void {
    void this.router.navigate(['/propiedades']);
  }

  imageError(
    event: Event,
    index: number
  ): void {

    const image =
      event.target as HTMLImageElement;

    image.onerror = null;

    image.src =
      `images/carrusel/slide-${(index % 3) + 1}.jpg`;
  }
}