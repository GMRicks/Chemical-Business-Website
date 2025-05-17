export interface Product {
  id: string;
  name: string;
  category: 'powder' | 'granules' | 'fertilizers' | 'fungicides' | 'potassium';
  price: string;
  minOrderQuantity: string;
  imageUrl: string;
  description: string;
  specifications: {
    label: string;
    value: string;
  }[];
  applications: string[];
  packagingOptions: string[];
}

export const products: Product[] = [
  {
    id: 'industrial-sulphur-powder',
    name: 'Industrial Sulphur Powder',
    category: 'powder',
    price: '₹25/Kg',
    minOrderQuantity: '1000 Kg',
    imageUrl: '/images/Industrial_Sulphur Powder-1.png',
    description: 'High-quality Industrial Sulphur Powder with 99% purity, perfect for various industrial applications. Our sulfur powder is known for consistent quality and is widely used in multiple industries including rubber manufacturing, agriculture, and chemical processing.',
    specifications: [
      { label: 'Form', value: 'Powder' },
      { label: 'Packaging Type', value: 'HDPE Bag' },
      { label: 'Purity', value: '99%' },
      { label: 'Grade Standard', value: 'Bio-Tech Grade' },
      { label: 'Packaging Size', value: '25 Kg, 50 Kg' },
      { label: 'Color', value: 'Bright Yellow' }
    ],
    applications: [
      'Rubber manufacturing',
      'Agricultural fertilizers',
      'Chemical processing',
      'Pharmaceutical industry'
    ],
    packagingOptions: ['25 Kg HDPE Bag', '50 Kg HDPE Bag', 'Bulk packaging available on request']
  },
  {
    id: 'rubber-grade-sulphur-powder',
    name: 'Rubber Grade Sulphur Powder',
    category: 'powder',
    price: '₹30/Kg',
    minOrderQuantity: '500 Kg',
    imageUrl: '/images/Rubber_Grade_Sulphur_Powder.png',
    description: 'Premium Rubber Grade Sulphur Powder specially formulated for rubber vulcanization and manufacturing processes. This high-purity powder ensures excellent dispersion and performance in rubber compounds.',
    specifications: [
      { label: 'Form', value: 'Fine Powder' },
      { label: 'Packaging Type', value: 'HDPE Bag' },
      { label: 'Purity', value: '99.5%' },
      { label: 'Grade Standard', value: 'Technical Grade' },
      { label: 'Packaging Size', value: '25 Kg, 50 Kg' },
      { label: 'Color', value: 'Yellow' }
    ],
    applications: [
      'Tire manufacturing',
      'Rubber molding',
      'Footwear production',
      'Industrial rubber products'
    ],
    packagingOptions: ['25 Kg HDPE Bag', '50 Kg HDPE Bag']
  },
  {
    id: 'sulphur-80-wdg',
    name: 'Sulphur 80% WDG',
    category: 'fertilizers',
    price: '₹120/Kg',
    minOrderQuantity: '100 Kg',
    imageUrl: '/images/Sulphur_80_Percent_Wdg.png',
    description: 'Sulphur 80% WDG (Water Dispersible Granules) is a high-quality agricultural fertilizer and fungicide. It provides essential sulfur to crops while also helping control fungal diseases. Our formulation ensures easy mixing and application.',
    specifications: [
      { label: 'Form', value: 'Water Dispersible Granules' },
      { label: 'Active Ingredient', value: '80% Sulphur' },
      { label: 'Packaging Type', value: 'Laminated Pouch' },
      { label: 'Grade Standard', value: 'Agricultural Grade' },
      { label: 'Packaging Size', value: '1 Kg, 5 Kg, 25 Kg' },
      { label: 'Solubility', value: 'Dispersible in Water' }
    ],
    applications: [
      'Fungal disease control in crops',
      'Soil sulfur supplementation',
      'Powdery mildew prevention',
      'Nutrient enhancement in agriculture'
    ],
    packagingOptions: ['1 Kg Laminated Pouch', '5 Kg HDPE Bag', '25 Kg HDPE Bag']
  },
  {
    id: 'sulphur-90-wdg',
    name: 'Sulphur 90% WDG',
    category: 'fertilizers',
    price: '₹140/Kg',
    minOrderQuantity: '100 Kg',
    imageUrl: '/images/Sulphur_90_Wdg.png',
    description: 'Premium Sulphur 90% WDG with higher concentration for enhanced performance in agricultural applications. This water-dispersible granule formulation is designed for easy mixing and application, providing both nutrition and fungicidal benefits.',
    specifications: [
      { label: 'Form', value: 'Water Dispersible Granules' },
      { label: 'Active Ingredient', value: '90% Sulphur' },
      { label: 'Packaging Type', value: 'Laminated Pouch' },
      { label: 'Grade Standard', value: 'Agricultural Grade' },
      { label: 'Packaging Size', value: '1 Kg, 5 Kg, 25 Kg' },
      { label: 'Solubility', value: 'Dispersible in Water' }
    ],
    applications: [
      'Advanced fungal disease control',
      'Enhanced soil sulfur supplementation',
      'Preventive crop protection',
      'High-value crop treatment'
    ],
    packagingOptions: ['1 Kg Laminated Pouch', '5 Kg HDPE Bag', '25 Kg HDPE Bag']
  },
  {
    id: 'sulphur-85-dp',
    name: 'Sulphur 85% DP',
    category: 'fungicides',
    price: '₹110/Kg',
    minOrderQuantity: '100 Kg',
    imageUrl: '/images/Sulphur_85%_DP.png',
    description: 'Sulphur 85% DP (Dusting Powder) is a specialized formulation for direct application to crops. This fine powder is designed for dusting applications to control fungal diseases and provide sulfur nutrition to plants.',
    specifications: [
      { label: 'Form', value: 'Dusting Powder' },
      { label: 'Active Ingredient', value: '85% Sulphur' },
      { label: 'Packaging Type', value: 'HDPE Bag' },
      { label: 'Grade Standard', value: 'Agricultural Grade' },
      { label: 'Packaging Size', value: '5 Kg, 25 Kg' },
      { label: 'Application Method', value: 'Dusting' }
    ],
    applications: [
      'Direct crop dusting',
      'Powdery mildew control',
      'Preventive fungal management',
      'Organic farming applications'
    ],
    packagingOptions: ['5 Kg HDPE Bag', '25 Kg HDPE Bag']
  },
  {
    id: 'yellow-sulphur-granules',
    name: 'Yellow Sulphur Granules',
    category: 'granules',
    price: '₹35/Kg',
    minOrderQuantity: '500 Kg',
    imageUrl: '/images/yellow_Sulphur Chemical_Granules.png',
    description: 'Premium quality Yellow Sulphur Granules with high purity and uniform size. Our granules offer excellent flowability and are ideal for agricultural applications and industrial processes where dust-free handling is important.',
    specifications: [
      { label: 'Form', value: 'Granules' },
      { label: 'Packaging Type', value: 'HDPE Bag' },
      { label: 'Purity', value: '99.5%' },
      { label: 'Grade Standard', value: 'Agricultural Grade' },
      { label: 'Packaging Size', value: '25 Kg, 50 Kg' },
      { label: 'Color', value: 'Bright Yellow' }
    ],
    applications: [
      'Agricultural soil amendment',
      'Fertilizer blending',
      'Industrial processes',
      'Chemical manufacturing'
    ],
    packagingOptions: ['25 Kg HDPE Bag', '50 Kg HDPE Bag', 'Bulk bags available']
  },
  {
    id: 'potassium-carbonate-powder',
    name: 'Potassium Carbonate Powder',
    category: 'potassium',
    price: '₹85/Kg',
    minOrderQuantity: '250 Kg',
    imageUrl: '/images/Potassium_Carbonate_Powder.png',
    description: 'High-purity Potassium Carbonate Powder for industrial and pharmaceutical applications. Our product meets strict quality standards and is suitable for various applications including food processing, pharmaceutical manufacturing, and industrial processes.',
    specifications: [
      { label: 'Form', value: 'Powder' },
      { label: 'Chemical Formula', value: 'K₂CO₃' },
      { label: 'Packaging Type', value: 'HDPE Bag' },
      { label: 'Purity', value: '99%' },
      { label: 'Grade Standard', value: 'Industrial/Pharmaceutical' },
      { label: 'Packaging Size', value: '25 Kg, 50 Kg' },
      { label: 'Color', value: 'White' }
    ],
    applications: [
      'Food processing',
      'Pharmaceutical manufacturing',
      'Glass production',
      'Specialty chemicals',
      'Soap and detergent manufacturing'
    ],
    packagingOptions: ['25 Kg HDPE Bag', '50 Kg HDPE Bag']
  }
];

export function getProductsByCategory(category: string) {
  return products.filter(product => product.category === category);
}

export function getCategories() {
  return [
    { id: 'powder', name: 'Sulphur Powder' },
    { id: 'granules', name: 'Sulphur Granules' },
    { id: 'fertilizers', name: 'Agricultural Fertilizers' },
    { id: 'fungicides', name: 'Sulphur WDG & Fungicides' },
    { id: 'potassium', name: 'Potassium Carbonate' }
  ];
}

export function getProductById(id: string) {
  return products.find(product => product.id === id);
}