export function SpiderWeb({ position = "top-left" }: { position?: "top-left" | "top-right" | "bottom-left" | "bottom-right" }) {
  const positionClasses = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0 scale-x-[-1]",
    "bottom-left": "bottom-0 left-0 scale-y-[-1]",
    "bottom-right": "bottom-0 right-0 scale-[-1]"
  };

  return (
    <div className={`absolute ${positionClasses[position]} w-32 h-32 pointer-events-none opacity-60`}>
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Web structure */}
        <g stroke="#666" strokeWidth="1" fill="none" filter="url(#glow)">
          {/* Radial lines */}
          <line x1="20" y1="20" x2="100" y2="100" />
          <line x1="20" y1="20" x2="150" y2="50" />
          <line x1="20" y1="20" x2="180" y2="90" />
          <line x1="20" y1="20" x2="170" y2="130" />
          <line x1="20" y1="20" x2="120" y2="160" />
          <line x1="20" y1="20" x2="70" y2="170" />
          
          {/* Concentric circles/polygons */}
          <path d="M 40,30 Q 60,35 80,45 Q 95,60 85,80 Q 70,90 50,85 Q 35,70 40,50 Z" />
          <path d="M 60,40 Q 90,45 120,60 Q 140,85 125,110 Q 100,125 75,115 Q 55,95 60,70 Z" />
          <path d="M 80,50 Q 120,55 160,75 Q 185,105 165,135 Q 130,155 95,145 Q 70,120 80,90 Z" />
        </g>
        
        {/* Spider */}
        <g fill="#333">
          <ellipse cx="45" cy="40" rx="3" ry="2" />
          <ellipse cx="48" cy="38" rx="2" ry="1" />
          {/* Spider legs */}
          <line x1="43" y1="39" x2="38" y2="35" stroke="#333" strokeWidth="1" />
          <line x1="43" y1="41" x2="37" y2="45" stroke="#333" strokeWidth="1" />
          <line x1="50" y1="39" x2="55" y2="34" stroke="#333" strokeWidth="1" />
          <line x1="50" y1="41" x2="56" y2="46" stroke="#333" strokeWidth="1" />
        </g>
      </svg>
    </div>
  );
}