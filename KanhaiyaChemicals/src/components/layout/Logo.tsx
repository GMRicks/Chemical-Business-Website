import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/images/Kanhaiya_Chemicals_logo.png"
        alt="Kanhaiya Chemicals"
        className="h-16 w-auto object-contain"
      />
    </Link>
  );
}