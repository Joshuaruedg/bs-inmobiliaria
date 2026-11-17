import {
  Component
} from '@angular/core';

import {
  CurrencyPipe,
  NgFor
} from '@angular/common';

import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

import { Property } from '../../core/models/property.model';
import { PROPERTIES } from '../../data/properties';


/* =========================================================
   INTERFACES
========================================================= */

interface FeaturedPropertyView {
  property: Property;
  image: string;
}


interface Testimonial {
  quote: string;
  label: string;
  detail: string;
  image: string;
}


/* =========================================================
   COMPONENTE HOME
========================================================= */

@Component({
  selector: 'app-home',

  standalone: true,

  imports: [
    FormsModule,
    RouterLink,
    NgFor,
    CurrencyPipe
  ],

  templateUrl: './home.component.html',

  styleUrl: './home.component.scss'
})
export class HomeComponent {


  /* =======================================================
     BUSCADOR
  ======================================================= */

  operation = 'Venta';

  zone = '';

  propertyType = '';

  budget = '';


  /* =======================================================
     PROPIEDADES DESTACADAS
  ======================================================= */

  featuredIndex = 0;


  /*
   * Toma únicamente las primeras 3 propiedades
   * que tengan:
   *
   * featured: true
   *
   * en:
   *
   * src/app/data/properties.ts
   *
   *
   * Las fotografías son independientes
   * del carrusel principal.
   *
   * Deben existir:
   *
   * public/images/destacadas/destacada-1.jpg
   * public/images/destacadas/destacada-2.jpg
   * public/images/destacadas/destacada-3.jpg
   */

  readonly featuredProperties:
    FeaturedPropertyView[] =
      PROPERTIES
        .filter(
          property =>
            property.featured
        )
        .slice(0, 3)
        .map(
          (property, index) => ({

            property,

            image:
              `images/destacadas/destacada-${index + 1}.jpg`

          })
        );


  /* =======================================================
     PROPIEDAD CENTRAL
  ======================================================= */

  get featuredCurrent():
    FeaturedPropertyView {

    return this.featuredProperties[
      this.featuredIndex
    ];

  }


  /* =======================================================
     PROPIEDAD ANTERIOR
  ======================================================= */

  get featuredPrevious():
    FeaturedPropertyView {

    const index =
      (
        this.featuredIndex -
        1 +
        this.featuredProperties.length
      ) %
      this.featuredProperties.length;


    return this.featuredProperties[
      index
    ];

  }


  /* =======================================================
     PROPIEDAD SIGUIENTE
  ======================================================= */

  get featuredNext():
    FeaturedPropertyView {

    const index =
      (
        this.featuredIndex +
        1
      ) %
      this.featuredProperties.length;


    return this.featuredProperties[
      index
    ];

  }


  /* =======================================================
     DESTINOS
  ======================================================= */

  readonly destinations = [

    {
      name:
        'Lomas de Angelópolis',

      description:
        'Residencias, preventas y estilo de vida premium',

      image:
        'images/luxury/destino-lomas-clean.jpg'
    },


    {
      name:
        'Cholula',

      description:
        'Historia, conectividad y una ubicación estratégica',

      image:
        'images/luxury/destino-cholula-clean.jpg'
    },


    {
      name:
        'Cuautlancingo',

      description:
        'Nuevas opciones residenciales con excelente valor',

      image:
        'images/luxury/destino-cuautlancingo-clean.jpg'
    }

  ];


  /* =======================================================
     TESTIMONIOS
  ======================================================= */

  readonly testimonials: Testimonial[] = [

    {
      quote:
        'Nos sentimos acompañados durante todo el proceso. La atención fue cercana, clara y hoy estamos disfrutando una nueva etapa en nuestro hogar.',

      label:
        'Un nuevo hogar, una nueva etapa',

      detail:
        'Entrega de propiedad · Cuautlancingo',

      image:
        'images/testimonios/testimonio-1.jpg'
    },


    {
      quote:
        'Me sentí acompañada durante todo el proceso. Siempre tuve claridad, atención y apoyo para tomar cada decisión con tranquilidad. Estoy muy feliz de comenzar esta nueva etapa en mi hogar',

      label:
        'UNA NUEVA ETAPA COMIENZA AQUÍ',

      detail:
        'Entrega de propiedad · Puebla',

      image:
        'images/testimonios/testimonio-2.jpg'
    },


    {
      quote:
        'Más que encontrar una propiedad, encontramos un espacio para comenzar una nueva historia. Gracias por acompañarnos en cada paso.',

      label:
        'El comienzo de una nueva historia',

      detail:
        'Entrega de propiedad · Puebla',

      image:
        'images/testimonios/testimonio-3.jpg'
    }

  ];


  /* =======================================================
     CARRUSEL PROPIEDADES DESTACADAS
  ======================================================= */

  nextFeatured(): void {

    if (
      this.featuredProperties.length <= 1
    ) {

      return;

    }


    this.featuredIndex =
      (
        this.featuredIndex +
        1
      ) %
      this.featuredProperties.length;

  }


  previousFeatured(): void {

    if (
      this.featuredProperties.length <= 1
    ) {

      return;

    }


    this.featuredIndex =
      (
        this.featuredIndex -
        1 +
        this.featuredProperties.length
      ) %
      this.featuredProperties.length;

  }



}