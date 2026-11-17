import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/home/home.component')
        .then(m => m.HomeComponent)
  },

  {
    path: 'propiedades',
    loadComponent: () =>
      import('./pages/properties/properties.component')
        .then(m => m.PropertiesComponent)
  },

  {
    path: 'propiedades/:slug',
    loadComponent: () =>
      import('./pages/property-detail/property-detail.component')
        .then(m => m.PropertyDetailComponent)
  },

  {
    path: 'descubrir',
    loadComponent: () =>
      import('./pages/discover/discover.component')
        .then(m => m.DiscoverComponent)
  },

  {
    path: 'descubrir/vivir-en-puebla',
    loadComponent: () =>
      import('./pages/discover/vivir-puebla/vivir-puebla.component')
        .then(m => m.VivirPueblaComponent)
  },

  {
    path: 'descubrir/zonas-destacadas',
    loadComponent: () =>
      import('./pages/discover/zonas-destacadas/zonas-destacadas.component')
        .then(m => m.ZonasDestacadasComponent)
  },

  {
    path: 'descubrir/guia-compradores',
    loadComponent: () =>
      import('./pages/discover/guia-compradores/guia-compradores.component')
        .then(m => m.GuiaCompradoresComponent)
  },

  {
    path: 'descubrir/inversion-inmobiliaria',
    loadComponent: () =>
      import('./pages/discover/inversion-inmobiliaria/inversion-inmobiliaria.component')
        .then(m => m.InversionInmobiliariaComponent)
  },

  {
    path: 'servicios',
    loadComponent: () =>
      import('./pages/services/services.component')
        .then(m => m.ServicesComponent)
  },

  {
    path: 'contacto',
    loadComponent: () =>
      import('./pages/contact/contact.component')
        .then(m => m.ContactComponent)
  },

  {
    path: '**',
    redirectTo: ''
  }
];