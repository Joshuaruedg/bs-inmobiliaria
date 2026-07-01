export interface Property {
  id: number;
  title: string;
  location: string;
  zone: 'Lomas de Angelópolis' | 'Cholula' | 'Cuautlancingo' | 'Puebla' | 'Otro';
  price: number;
  operation: 'venta' | 'renta';
  type: 'casa' | 'departamento' | 'terreno';
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  landSize?: number;
  constructionSize?: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  distribution?: string[];
  advisor: string;
  phone: string;
  featured?: boolean;
}
