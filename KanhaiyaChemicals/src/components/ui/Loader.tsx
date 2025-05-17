import { Circle as CircleNotch } from 'lucide-react';

export default function Loader() {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
      <CircleNotch className="w-12 h-12 text-primary animate-spin" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}