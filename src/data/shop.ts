export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  imageUrl: string;
  specifications: string[];
  stockStatus: 'in_stock' | 'low_stock' | 'out_of_stock';
  featured?: boolean;
  newArrival?: boolean;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    id: 'indoor-plants',
    name: 'Indoor Plants',
    imageUrl: 'https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg',
    productCount: 24
  },
  {
    id: 'outdoor-plants',
    name: 'Outdoor Plants',
    imageUrl: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg',
    productCount: 18
  },
  {
    id: 'succulents',
    name: 'Succulents',
    imageUrl: 'https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg',
    productCount: 15
  },
  {
    id: 'planters',
    name: 'Planters',
    imageUrl: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
    productCount: 30
  },
  {
    id: 'plant-care',
    name: 'Plant Care',
    imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    productCount: 12
  },
  {
    id: 'tools',
    name: 'Tools',
    imageUrl: 'https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg',
    productCount: 20
  },
  {
    id: 'fertilizers',
    name: 'Fertilizers',
    imageUrl: 'https://images.pexels.com/photos/1105019/pexels-photo-1105019.jpeg',
    productCount: 8
  },
  {
    id: 'decor',
    name: 'Plant Décor',
    imageUrl: 'https://images.pexels.com/photos/1366913/pexels-photo-1366913.jpeg',
    productCount: 25
  },
  {
    id: 'gifts',
    name: 'Plant Gifts',
    imageUrl: 'https://images.pexels.com/photos/1058771/pexels-photo-1058771.jpeg',
    productCount: 15
  },
  {
    id: 'accessories',
    name: 'Accessories',
    imageUrl: 'https://images.pexels.com/photos/1701535/pexels-photo-1701535.jpeg',
    productCount: 22
  }
];

export const products: Product[] = [
  {
    id: 'monstera-deliciosa',
    name: 'Monstera Deliciosa',
    category: 'indoor-plants',
    price: 45.99,
    description: 'The Swiss Cheese Plant, known for its distinctive leaves with natural holes.',
    imageUrl: 'https://images.pexels.com/photos/3125195/pexels-photo-3125195.jpeg',
    specifications: ['Height: 2-3 feet', 'Light: Bright indirect', 'Water: Weekly', 'Pet-friendly: No'],
    stockStatus: 'in_stock',
    featured: true
  },
  {
    id: 'peace-lily',
    name: 'Peace Lily',
    category: 'indoor-plants',
    price: 29.99,
    description: 'An elegant plant known for its air-purifying qualities and white flowers.',
    imageUrl: 'https://images.pexels.com/photos/4505270/pexels-photo-4505270.jpeg',
    specifications: ['Height: 1-2 feet', 'Light: Low to bright indirect', 'Water: Weekly', 'Pet-friendly: No'],
    stockStatus: 'in_stock'
  },
  // Add more products as needed
];

export const getProductsByCategory = (categoryId: string): Product[] => {
  return products.filter(product => product.category === categoryId);
};

export const getProductById = (productId: string): Product | undefined => {
  return products.find(product => product.id === productId);
};

export const getRelatedProducts = (productId: string, limit: number = 4): Product[] => {
  const product = getProductById(productId);
  if (!product) return [];
  
  return products
    .filter(p => p.category === product.category && p.id !== productId)
    .slice(0, limit);
};