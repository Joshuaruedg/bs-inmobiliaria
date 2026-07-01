import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PROPERTIES } from '../../data/properties';
import { PropertyCardComponent } from '../../shared/property-card/property-card.component';

@Component({selector:'app-home',standalone:true,imports:[CommonModule,RouterLink,PropertyCardComponent],templateUrl:'./home.component.html',styleUrl:'./home.component.scss'})
export class HomeComponent { featured = PROPERTIES.filter(p => p.featured).slice(0, 2); }
