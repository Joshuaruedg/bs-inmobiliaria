import { Component, computed, inject } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PROPERTIES } from '../../data/properties';
@Component({selector:'app-property-detail',standalone:true,imports:[CommonModule,CurrencyPipe,RouterLink],templateUrl:'./property-detail.component.html',styleUrl:'./property-detail.component.scss'})
export class PropertyDetailComponent { private route=inject(ActivatedRoute); id=Number(this.route.snapshot.paramMap.get('id')); property=PROPERTIES.find(p=>p.id===this.id); whatsapp = computed(() => this.property ? `https://wa.me/52${this.property.phone}?text=${encodeURIComponent('Hola, quiero información de: ' + this.property.title)}` : ''); }
