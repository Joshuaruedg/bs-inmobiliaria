import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Property } from '../../core/models/property.model';
@Component({selector:'app-property-card',standalone:true,imports:[CurrencyPipe,RouterLink],templateUrl:'./property-card.component.html',styleUrl:'./property-card.component.scss'})
export class PropertyCardComponent{@Input({required:true}) property!:Property;}
