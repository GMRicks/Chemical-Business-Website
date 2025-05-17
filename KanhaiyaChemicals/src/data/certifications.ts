export interface Certification {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  issuedBy: string;
  validUntil?: string;
}

export const certifications: Certification[] = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    description: 'Quality Management System certification ensuring consistent product quality and customer satisfaction through standardized processes.',
    imageUrl: 'https://images.pexels.com/photos/7821906/pexels-photo-7821906.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    issuedBy: 'International Organization for Standardization',
    validUntil: 'December 2025'
  },
  {
    id: 'fco-license',
    name: 'FCO License',
    description: 'Fertilizer Control Order License authorizing the manufacture and distribution of fertilizer products in India.',
    imageUrl: 'https://images.pexels.com/photos/7821800/pexels-photo-7821800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    issuedBy: 'Ministry of Agriculture, Government of India',
    validUntil: 'March 2026'
  },
  {
    id: 'gmp',
    name: 'GMP Certification',
    description: 'Good Manufacturing Practice certification validating adherence to quality standards in manufacturing processes.',
    imageUrl: 'https://images.pexels.com/photos/3760069/pexels-photo-3760069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    issuedBy: 'Quality Council of India',
    validUntil: 'October 2024'
  },
  {
    id: 'ems-iso-14001',
    name: 'ISO 14001:2015',
    description: 'Environmental Management System certification demonstrating commitment to minimizing environmental impact and sustainable operations.',
    imageUrl: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    issuedBy: 'International Organization for Standardization',
    validUntil: 'December 2025'
  },
  {
    id: 'trustseal',
    name: 'IndiaMART TrustSEAL',
    description: 'Verification of business authenticity and credibility through IndiaMART\'s verification program.',
    imageUrl: 'https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    issuedBy: 'IndiaMART',
    validUntil: 'July 2024'
  }
];