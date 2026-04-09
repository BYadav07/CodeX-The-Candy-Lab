import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { SpiderWeb } from './SpiderWeb';
import { Card } from './ui/card';
import { Eye, Skull, Zap, Waves, Triangle, Mail } from 'lucide-react';

interface ParanormalPortalProps {
  onFileSelect: (file: string) => void;
  onBack: () => void;
}

const paranormalFiles = [
  {
    id: 'alien-sites',
    name: 'ALIEN SITES',
    icon: Eye,
    description: 'Extraterrestrial encounters and UFO sightings',
    glowColor: 'shadow-green-500/50'
  },
  {
    id: 'superhuman-abilities',
    name: 'SUPERHUMAN ABILITIES',
    icon: Zap,
    description: 'Powers beyond human comprehension',
    glowColor: 'shadow-purple-500/50'
  },
  {
    id: 'sirenhead',
    name: 'SIRENHEAD',
    icon: Skull,
    description: 'The terrifying creature of the woods',
    glowColor: 'shadow-red-500/50'
  },
  {
    id: 'mermaids',
    name: 'MERMAIDS',
    icon: Waves,
    description: 'Ancient beings of the deep ocean',
    glowColor: 'shadow-blue-500/50'
  },
  {
    id: 'illuminati',
    name: 'ILLUMINATI',
    icon: Triangle,
    description: 'The secret society that controls everything',
    glowColor: 'shadow-yellow-500/50'
  },
  {
    id: 'contact-us',
    name: 'CONTACT THE VOID',
    icon: Mail,
    description: 'Reach out into the darkness beyond',
    glowColor: 'shadow-gray-500/50'
  }
];

export function ParanormalPortal({ onFileSelect, onBack }: ParanormalPortalProps) {
  const [hoveredFile, setHoveredFile] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Main Background Image - Exact same structure as surface page but corrupted */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635342219731-4ae2bf39e1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMGJhY2tncm91bmQlMjBwYXR0ZXJufGVufDF8fHx8MTc1ODc3NTY3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Corrupted candy background"
          className="w-full h-full object-cover filter grayscale contrast-150 brightness-30 hue-rotate-180"
        />
        <div className="absolute inset-0 bg-black/70"></div>
      </div>
      
      {/* Secondary Background Images - Dark and spooky instead of corrupted candy */}
      <div className="absolute inset-0 z-0 opacity-25">
        <div className="grid grid-cols-3 h-full">
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1626878569157-98a1959e8771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZm9yZXN0JTIwbXlzdGVyeXxlbnwxfHx8fDE3NTg3NTAwNzh8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Dark forest mystery"
              className="w-full h-full object-cover filter contrast-150 brightness-30 saturate-50"
            />
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1715011043519-a64023b6ca7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXVudGVkJTIwYWJhbmRvbmVkJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzU4NzkwMTQ5fDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Haunted abandoned building"
              className="w-full h-full object-cover filter contrast-150 brightness-30 saturate-50"
            />
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1608993751944-e590f68d1c02?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9va3klMjBncmF2ZXlhcmQlMjBuaWdodHxlbnwxfHx8fDE3NTg3OTAxNTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Spooky graveyard night"
              className="w-full h-full object-cover filter contrast-150 brightness-30 saturate-50"
            />
          </div>
        </div>
        {/* Paranormal version of the surface gradient - red/green instead of pink/purple */}
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/70 via-green-900/70 to-red-800/70"></div>
      </div>

      {/* Spider Webs */}
      <SpiderWeb position="top-left" />
      <SpiderWeb position="top-right" />
      <SpiderWeb position="bottom-left" />
      <SpiderWeb position="bottom-right" />

      {/* Floating particles effect - Enhanced with different colors */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full opacity-40 animate-pulse ${
              i % 3 === 0 ? 'bg-red-500' : 
              i % 3 === 1 ? 'bg-green-500' : 'bg-gray-500'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${1.5 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Creepy shadows moving across the screen */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={`shadow-${i}`}
            className="absolute bg-black/60 rounded-full blur-xl animate-pulse"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${50 + Math.random() * 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Static noise overlay */}
      <div 
        className="absolute inset-0 opacity-5 mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          animation: 'noise 0.2s infinite'
        }}
      />

      <style jsx>{`
        @keyframes noise {
          0%, 100% { opacity: 0.05; }
          50% { opacity: 0.1; }
        }
      `}</style>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
        >
          <span className="text-lg">←</span>
          <span>Return to Surface</span>
        </button>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-8 tracking-wider drop-shadow-2xl animate-pulse">
            WHAT ARE YOU
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-8 tracking-wider drop-shadow-2xl animate-pulse">
            LOOKING FOR?
          </h1>
          <div className="w-32 h-1 bg-red-500 mx-auto animate-pulse"></div>
        </div>

        {/* File Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {paranormalFiles.map((file) => (
            <Card
              key={file.id}
              className={`bg-black/80 border-gray-600 hover:border-red-500 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl ${file.glowColor} group`}
              onMouseEnter={() => setHoveredFile(file.id)}
              onMouseLeave={() => setHoveredFile(null)}
              onClick={() => onFileSelect(file.id)}
            >
              <div className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <file.icon 
                    className={`w-12 h-12 ${hoveredFile === file.id ? 'text-red-500' : 'text-gray-400'} transition-colors`}
                  />
                </div>
                <h3 className={`font-bold text-lg mb-2 tracking-wide ${hoveredFile === file.id ? 'text-red-500' : 'text-gray-200'} transition-colors`}>
                  {file.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {file.description}
                </p>
                
                {/* Glitch effect on hover */}
                {hoveredFile === file.id && (
                  <div className="absolute inset-0 bg-red-500/10 animate-pulse"></div>
                )}
              </div>
            </Card>
          ))}
        </div>

        {/* Footer warning */}
        <div className="text-center mt-16">
          <p className="text-red-400 text-sm tracking-wider animate-pulse">
            ⚠️ CLASSIFIED INFORMATION - UNAUTHORIZED ACCESS DETECTED ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}