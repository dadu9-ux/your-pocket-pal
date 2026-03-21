import { MOTIVATIONAL_QUOTES } from '@/data/defaultPlan';
import { useMemo } from 'react';

interface HeroBannerProps {
  planName: string;
  description: string;
}

export default function HeroBanner({ planName, description }: HeroBannerProps) {
  const quote = useMemo(() => MOTIVATIONAL_QUOTES[Math.floor(Math.random() * MOTIVATIONAL_QUOTES.length)], []);

  return (
    <div className="gradient-hero px-4 pt-12 pb-6 safe-top">
      <h1 className="text-2xl font-bold text-center font-display tracking-wider text-primary-foreground">
        {planName}
      </h1>
      <p className="text-center text-sm mt-1 opacity-90 text-primary-foreground">{description}</p>
      <div className="mt-4 bg-black/20 rounded-lg px-4 py-3">
        <p className="text-xs italic text-primary-foreground/90 text-center">"{quote.text}"</p>
        <p className="text-xs text-right mt-1 text-primary-foreground/70">— {quote.author}</p>
      </div>
    </div>
  );
}
