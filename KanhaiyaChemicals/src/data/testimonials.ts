export interface Testimonial {
  id: number;
  name: string;
  company: string;
  position: string;
  content: string;
  rating: number;
  imageUrl?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    company: 'AgroTech Industries',
    position: 'Procurement Manager',
    content: 'We have been working with Kanhaiya Chemicals for over 5 years now. Their quality is consistently excellent, and they always deliver on time. The industrial sulphur powder we purchase is of superior quality and meets all our specifications.',
    rating: 5
  },
  {
    id: 2,
    name: 'Anita Patel',
    company: 'Green Farms Ltd',
    position: 'Agricultural Director',
    content: 'The Sulphur 80% WDG from Kanhaiya Chemicals has significantly improved our crop yield. Their products are reliable and effective. Their customer service team is also very responsive and knowledgeable.',
    rating: 5
  },
  {
    id: 3,
    name: 'Suresh Mehta',
    company: 'Mehta Pharmaceuticals',
    position: 'Quality Control Officer',
    content: 'Finding a reliable supplier for pharmaceutical-grade materials is challenging, but Kanhaiya Chemicals has exceeded our expectations. Their technical sulphur powder meets our stringent quality requirements consistently.',
    rating: 5
  },
  {
    id: 4,
    name: 'Priya Singh',
    company: 'Eco Solutions',
    position: 'Chief Operations Officer',
    content: 'We have tried several suppliers, but none match the quality and service of Kanhaiya Chemicals. Their sulphur granules are perfect for our agricultural products, and their team is always helpful with technical specifications.',
    rating: 5
  },
  {
    id: 5,
    name: 'Manoj Verma',
    company: 'Rubber Products Corporation',
    position: 'Production Head',
    content: 'The rubber grade sulphur powder from Kanhaiya Chemicals is essential to our manufacturing process. The consistent quality and timely delivery have made them our preferred supplier for years.',
    rating: 5
  }
];

export const satisfactionMetrics = {
  response: 100,
  delivery: 100,
  quality: 100
};