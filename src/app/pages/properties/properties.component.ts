import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { PROPERTIES } from '../../data/properties';

type OperationFilter = 'todas' | 'venta' | 'renta';

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.scss'
})
export class PropertiesComponent implements OnInit {

  readonly properties: any[] = PROPERTIES;

  operationFilter: OperationFilter = 'todas';
  zoneFilter = 'todas';
  typeFilter = 'todos';
  maxPrice = 0;

  readonly priceOptions = [
    { label: 'Cualquier precio', value: 0 },
    { label: 'Hasta $3,000,000', value: 3000000 },
    { label: 'Hasta $5,000,000', value: 5000000 },
    { label: 'Hasta $7,500,000', value: 7500000 },
    { label: 'Hasta $10,000,000', value: 10000000 },
    { label: 'Hasta $15,000,000', value: 15000000 }
  ];

  constructor(
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(params => {

      const operation =
        params.get('operacion')?.toLowerCase();

      if (
        operation === 'venta' ||
        operation === 'renta'
      ) {
        this.operationFilter = operation;
        return;
      }

      this.operationFilter = 'todas';

    });

  }

  /* =====================================================
     REGRESAR
  ===================================================== */

goBack(): void {
  void this.router.navigateByUrl('/');
}

  /* =====================================================
     ZONAS
  ===================================================== */

  get zones(): string[] {

    return [
      ...new Set(
        this.properties
          .map(property => this.getZone(property))
          .filter(Boolean)
      )
    ].sort();

  }

  /* =====================================================
     TIPOS
  ===================================================== */

  get propertyTypes(): string[] {

    return [
      ...new Set(
        this.properties
          .map(property => this.getType(property))
          .filter(Boolean)
      )
    ].sort();

  }

  /* =====================================================
     FILTRO GENERAL
  ===================================================== */

  get filteredProperties(): any[] {

    return this.properties.filter(property => {

      const operationMatches =
        this.operationFilter === 'todas' ||
        this.getOperation(property) === this.operationFilter;

      const zoneMatches =
        this.zoneFilter === 'todas' ||
        this.getZone(property) === this.zoneFilter;

      const typeMatches =
        this.typeFilter === 'todos' ||
        this.getType(property) === this.typeFilter;

      const priceMatches =
        this.maxPrice === 0 ||
        this.getPrice(property) <= this.maxPrice;

      return (
        operationMatches &&
        zoneMatches &&
        typeMatches &&
        priceMatches
      );

    });

  }

  /* =====================================================
     VENTA / RENTA
  ===================================================== */

  setOperation(
    operation: OperationFilter
  ): void {

    this.operationFilter = operation;

    void this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        operacion:
          operation === 'todas'
            ? null
            : operation
      },
      queryParamsHandling: 'merge',
      replaceUrl: true
    });

  }

  /* =====================================================
     LIMPIAR
  ===================================================== */

  clearFilters(): void {

    this.zoneFilter = 'todas';
    this.typeFilter = 'todos';
    this.maxPrice = 0;

    this.setOperation('todas');

  }

  /* =====================================================
     DATOS
  ===================================================== */

  getOperation(
    property: any
  ): 'venta' | 'renta' {

    const operation =
      String(
        property.operation ?? 'Venta'
      )
        .trim()
        .toLowerCase();

    return operation.includes('rent')
      ? 'renta'
      : 'venta';

  }

  getZone(
    property: any
  ): string {

    return (
      property.zone ??
      property.location ??
      'Puebla'
    );

  }

  getType(
    property: any
  ): string {

    return (
      property.type ??
      property.propertyType ??
      'Casa'
    );

  }

  getPrice(
    property: any
  ): number {

    return Number(
      property.price ?? 0
    );

  }

  getImage(
    property: any,
    index: number
  ): string {

    return (
      property.image ??
      property.gallery?.[0] ??
      `images/carrusel/slide-${(index % 3) + 1}.jpg`
    );

  }

  getBedrooms(
    property: any
  ): number | string {

    return property.bedrooms ?? '-';

  }

  getBathrooms(
    property: any
  ): number | string {

    return property.bathrooms ?? '-';

  }

  getParking(
    property: any
  ): number | string {

    return property.parking ?? '-';

  }

  getLandSize(
    property: any
  ): number | string {

    return property.landSize ?? '-';

  }

  getConstruction(
    property: any
  ): number | string {

    return property.constructionSize ?? '-';

  }

  /* =====================================================
     FALLBACK IMAGEN
  ===================================================== */

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