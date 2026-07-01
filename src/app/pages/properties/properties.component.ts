import { Component, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PROPERTIES } from '../../data/properties';
import { PropertyCardComponent } from '../../shared/property-card/property-card.component';
@Component({selector:'app-properties',standalone:true,imports:[CommonModule,FormsModule,PropertyCardComponent],templateUrl:'./properties.component.html',styleUrl:'./properties.component.scss'})
export class PropertiesComponent { query = signal(''); properties = computed(() => PROPERTIES.filter(p => `${p.title} ${p.location} ${p.type} ${p.zone}`.toLowerCase().includes(this.query().toLowerCase()))); setQuery(value:string){this.query.set(value);} }
