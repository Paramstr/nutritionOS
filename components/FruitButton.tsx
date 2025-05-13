import Link from 'next/link';

interface FruitButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const FruitButton: React.FC<FruitButtonProps> = ({ href, children, className = '' }) => {
  return (
    <div className="relative group w-auto inline-block"> {/* Added w-auto inline-block */}
      <Link
        href={href}
        className={`inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-full text-sm font-medium relative z-10 transition-all duration-300 ease-in-out group-hover:scale-105 shadow-xl ${className}`}
      >
        {children}
      </Link>
      {/* Fruit Emojis Container - Adjusted for responsiveness */}
      <div className="absolute inset-0 flex justify-around items-center z-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {/* 
          The fruits are now positioned more abstractly within this container.
          We'll use scale and relative font sizes (e.g., em or %) if text-based emojis are kept.
          For more precise control, SVG would be better.
          The blur and shadow effects are kept on hover.
          Absolute positioning of individual fruits within this flex container.
        */}
        <span 
          className="absolute text-[2em] sm:text-[2.5em] md:text-[3em] transform -rotate-12 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-lg blur-sm group-hover:blur-none" 
          style={{ left: '5%', top: '10%' }} // Adjusted positioning
          role="img" 
          aria-label="Banana"
        >🍌</span>
        <span 
          className="absolute text-[2em] sm:text-[2.5em] md:text-[3em] transform rotate-6 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-lg blur-sm group-hover:blur-none" 
          style={{ left: '30%', top: '-10%' }} // Adjusted positioning
          role="img" 
          aria-label="Orange"
        >🍊</span>
        <span 
          className="absolute text-[2em] sm:text-[2.5em] md:text-[3em] transform -rotate-6 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-lg blur-sm group-hover:blur-none" 
          style={{ right: '30%', top: '-5%' }} // Adjusted positioning
          role="img" 
          aria-label="Avocado"
        >🥑</span>
        <span 
          className="absolute text-[2em] sm:text-[2.5em] md:text-[3em] transform rotate-12 transition-all duration-300 ease-in-out group-hover:scale-125 group-hover:drop-shadow-lg blur-sm group-hover:blur-none" 
          style={{ right: '5%', top: '15%' }} // Adjusted positioning
          role="img" 
          aria-label="Apple"
        >🍎</span>
      </div>
    </div>
  );
};