
import {
  Component,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef
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
export class HomeComponent implements AfterViewInit, OnDestroy {

  /* =======================================================
     HERO - 3 VIDEOS, 5 SEGUNDOS CADA UNO
     No altera los filtros ni el carrusel de propiedades.
  ======================================================= */

  @ViewChild('videoPuebla')
  private videoPuebla?: ElementRef<HTMLVideoElement>;

  @ViewChild('videoModerno')
  private videoModerno?: ElementRef<HTMLVideoElement>;

  @ViewChild('videoTercero')
  private videoTercero?: ElementRef<HTMLVideoElement>;

  activeHeroScene = 0;

  private heroInterval?: ReturnType<typeof setInterval>;
  private heroPauseTimeout?: ReturnType<typeof setTimeout>;

  ngAfterViewInit(): void {
    this.playHeroVideo(0);

    this.heroInterval = setInterval(() => {
      const previousScene = this.activeHeroScene;
      const nextScene = (previousScene + 1) % 3;

      // Iniciar el video entrante antes del fundido.
      this.playHeroVideo(nextScene);
      this.activeHeroScene = nextScene;

      if (this.heroPauseTimeout !== undefined) {
        clearTimeout(this.heroPauseTimeout);
      }

      // Mantener el video saliente durante los 1.2 s de transición.
      this.heroPauseTimeout = setTimeout(() => {
        this.getHeroVideo(previousScene)?.pause();
      }, 1200);
    }, 10000);
  }

  ngOnDestroy(): void {
    if (this.heroInterval !== undefined) {
      clearInterval(this.heroInterval);
    }

    if (this.heroPauseTimeout !== undefined) {
      clearTimeout(this.heroPauseTimeout);
    }

    this.videoPuebla?.nativeElement.pause();
    this.videoModerno?.nativeElement.pause();
    this.videoTercero?.nativeElement.pause();
  }

  private getHeroVideo(index: number): HTMLVideoElement | undefined {
    if (index === 0) {
      return this.videoPuebla?.nativeElement;
    }

    if (index === 1) {
      return this.videoModerno?.nativeElement;
    }

    return this.videoTercero?.nativeElement;
  }

  private playHeroVideo(index: number): void {
    const video = this.getHeroVideo(index);

    if (!video) return;

    video.muted = true;
    video.currentTime = 0;
    video.playbackRate = index === 0 ? 1.20 : 1;

    void video.play().catch(error => {
      console.error(`Error al reproducir video ${index + 1}:`, error);
    });
  }


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
