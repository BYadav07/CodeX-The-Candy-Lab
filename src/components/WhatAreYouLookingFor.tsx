import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Candy, Users, Phone, Info } from 'lucide-react';

interface WhatAreYouLookingForProps {
  onOptionSelect: (option: string) => void;
}

const options = [
  {
    id: 'candy-gallery',
    name: 'Our Candies',
    icon: Candy,
    description: 'Explore our sweet collection',
    color: 'from-pink-500 to-purple-600'
  },
  {
    id: 'about-us',
    name: 'About Us',
    icon: Info,
    description: 'Learn about The Candy Lab',
    color: 'from-blue-500 to-cyan-600'
  },
  {
    id: 'contact-us',
    name: 'Contact Us',
    icon: Phone,
    description: 'Get in touch with our team',
    color: 'from-green-500 to-emerald-600'
  }
];

export function WhatAreYouLookingFor({ onOptionSelect }: WhatAreYouLookingForProps) {
  return (
    <section className="relative py-16 min-h-[80vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1635342219731-4ae2bf39e1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMGJhY2tncm91bmQlMjBwYXR0ZXJufGVufDF8fHx8MTc1ODc3NTY3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Candy background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/70 via-purple-500/60 to-indigo-600/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-16 text-white drop-shadow-2xl">
          WHAT ARE YOU LOOKING FOR?
        </h1>
        
        {/* Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {options.map((option) => (
            <Card
              key={option.id}
              className="bg-white/90 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-300 cursor-pointer group border-0 shadow-2xl"
              onClick={() => onOptionSelect(option.id)}
            >
              <div className="p-8 text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <option.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {option.name}
                </h3>
                <p className="text-gray-600">
                  {option.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}