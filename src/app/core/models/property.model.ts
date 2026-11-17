export interface Property {
  id: number;
  slug: string;
  title: string;
  location: string;
  zone: string;
  price: number;
  operation: 'Venta' | 'Renta';
  type: 'Casa' | 'Departamento' | 'Terreno';
  bedrooms: number;
  bathrooms: number;
  parking: number;
  landSize: number;
  constructionSize: number;
  image: string;
  gallery: string[];
  description: string;
  features: string[];
  featured: boolean;
}
