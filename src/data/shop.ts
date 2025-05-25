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
  }
];

export const products: Product[] = [
  // Indoor Plants
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
  {
    id: 'fiddle-leaf-fig',
    name: 'Fiddle Leaf Fig',
    category: 'indoor-plants',
    price: 59.99,
    description: 'Popular indoor tree with large, violin-shaped leaves.',
    imageUrl: 'https://images.pexels.com/photos/2014422/pexels-photo-2014422.jpeg',
    specifications: ['Height: 3-4 feet', 'Light: Bright indirect', 'Water: Moderate', 'Pet-friendly: No'],
    stockStatus: 'low_stock',
    featured: true
  },
  {
    id: 'snake-plant',
    name: 'Snake Plant',
    category: 'indoor-plants',
    price: 24.99,
    description: 'Hardy, air-purifying plant with striking upright leaves.',
    imageUrl: 'https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg',
    specifications: ['Height: 1-3 feet', 'Light: Any', 'Water: Low', 'Pet-friendly: No'],
    stockStatus: 'in_stock'
  },

  // Outdoor Plants
  {
    id: 'japanese-maple',
    name: 'Japanese Maple',
    category: 'outdoor-plants',
    price: 89.99,
    description: 'Beautiful ornamental tree with delicate red foliage.',
    imageUrl: 'https://images.pexels.com/photos/1084188/pexels-photo-1084188.jpeg',
    specifications: ['Height: 4-5 feet', 'Light: Partial shade', 'Water: Regular', 'Cold Hardy: Yes'],
    stockStatus: 'in_stock',
    featured: true
  },
  {
    id: 'lavender',
    name: 'Lavender',
    category: 'outdoor-plants',
    price: 19.99,
    description: 'Fragrant herb with beautiful purple blooms.',
    imageUrl: 'https://images.pexels.com/photos/2363302/pexels-photo-2363302.jpeg',
    specifications: ['Height: 1-2 feet', 'Light: Full sun', 'Water: Low', 'Fragrant: Yes'],
    stockStatus: 'in_stock'
  },
  {
    id: 'hydrangea',
    name: 'Hydrangea',
    category: 'outdoor-plants',
    price: 34.99,
    description: 'Classic garden shrub with large, showy blooms.',
    imageUrl: 'https://images.pexels.com/photos/5766987/pexels-photo-5766987.jpeg',
    specifications: ['Height: 3-4 feet', 'Light: Partial shade', 'Water: Regular', 'Blooming: Summer'],
    stockStatus: 'low_stock'
  },

  // Succulents
  {
    id: 'echeveria',
    name: 'Echeveria',
    category: 'succulents',
    price: 12.99,
    description: 'Rosette-forming succulent with colorful leaves.',
    imageUrl: 'https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg',
    specifications: ['Height: 4-6 inches', 'Light: Bright', 'Water: Low', 'Pet-friendly: Yes'],
    stockStatus: 'in_stock',
    featured: true
  },
  {
    id: 'aloe-vera',
    name: 'Aloe Vera',
    category: 'succulents',
    price: 15.99,
    description: 'Medicinal succulent with thick, gel-filled leaves.',
    imageUrl: 'https://images.pexels.com/photos/4505257/pexels-photo-4505257.jpeg',
    specifications: ['Height: 1-2 feet', 'Light: Bright', 'Water: Low', 'Medicinal: Yes'],
    stockStatus: 'in_stock'
  },
  {
    id: 'jade-plant',
    name: 'Jade Plant',
    category: 'succulents',
    price: 18.99,
    description: 'Classic succulent known for its tree-like growth.',
    imageUrl: 'https://images.pexels.com/photos/4505167/pexels-photo-4505167.jpeg',
    specifications: ['Height: 1-3 feet', 'Light: Bright', 'Water: Low', 'Long-lived: Yes'],
    stockStatus: 'low_stock'
  },

  // Planters
  {
    id: 'ceramic-planter',
    name: 'Modern Ceramic Planter',
    category: 'planters',
    price: 29.99,
    description: 'Sleek ceramic planter with drainage hole and saucer.',
    imageUrl: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
    specifications: ['Size: 8 inches', 'Material: Ceramic', 'Drainage: Yes', 'Color: White'],
    stockStatus: 'in_stock',
    featured: true
  },
  {
    id: 'hanging-planter',
    name: 'Macrame Hanging Planter',
    category: 'planters',
    price: 24.99,
    description: 'Handcrafted macrame plant hanger with ceramic pot.',
    imageUrl: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
    specifications: ['Length: 40 inches', 'Material: Cotton rope', 'Pot included: Yes', 'Indoor use'],
    stockStatus: 'in_stock'
  },
  {
    id: 'concrete-planter',
    name: 'Industrial Concrete Planter',
    category: 'planters',
    price: 34.99,
    description: 'Modern concrete planter with clean lines.',
    imageUrl: 'https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg',
    specifications: ['Size: 10 inches', 'Material: Concrete', 'Drainage: Yes', 'Color: Gray'],
    stockStatus: 'low_stock'
  },

  // Plant Care
  {
    id: 'organic-fertilizer',
    name: 'Organic Plant Food',
    category: 'plant-care',
    price: 14.99,
    description: 'All-natural fertilizer for healthy plant growth.',
    imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    specifications: ['Size: 32 oz', 'Organic: Yes', 'All-purpose', 'Indoor/Outdoor use'],
    stockStatus: 'in_stock'
  },
  {
    id: 'pruning-shears',
    name: 'Premium Pruning Shears',
    category: 'plant-care',
    price: 22.99,
    description: 'Professional-grade pruning shears for precise cuts.',
    imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    specifications: ['Length: 8 inches', 'Material: Stainless steel', 'Ergonomic grip', 'Safety lock'],
    stockStatus: 'in_stock',
    featured: true
  },
  {
    id: 'moisture-meter',
    name: 'Soil Moisture Meter',
    category: 'plant-care',
    price: 12.99,
    description: 'Digital meter for monitoring soil moisture levels.',
    imageUrl: 'https://images.pexels.com/photos/1301856/pexels-photo-1301856.jpeg',
    specifications: ['Battery operated', 'Digital display', 'Easy to use', 'Accurate readings'],
    stockStatus: 'low_stock'
  }
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