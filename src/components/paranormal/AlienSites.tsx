import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SpiderWeb } from '../SpiderWeb';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, MapPin, Calendar, Eye } from 'lucide-react';
import classifiedFootage from 'figma:asset/5074f5562db9b29e9ffafea3cd828f1f4f3500c5.png';

interface AlienSitesProps {
  onBack: () => void;
}

const alienSightings = [
  {
    location: "Area 51, Nevada",
    date: "1947-Present",
    description: "The most classified military base in the US. Countless UFO sightings and alleged alien technology reverse-engineering.",
    classification: "TOP SECRET",
    coordinates: "37.2431° N, 115.7930° W"
  },
  {
    location: "Roswell, New Mexico", 
    date: "July 8, 1947",
    description: "The infamous crash that started it all. Military claimed it was a weather balloon, but witnesses saw something else entirely.",
    classification: "DECLASSIFIED",
    coordinates: "33.3943° N, 104.5230° W"
  },
  {
    location: "Phoenix, Arizona",
    date: "March 13, 1997", 
    description: "Massive V-shaped craft witnessed by thousands. Government explanation: military flares. Truth: Unknown technology.",
    classification: "UNEXPLAINED",
    coordinates: "33.4484° N, 112.0740° W"
  },
  {
    location: "Rendlesham Forest, UK",
    date: "December 1980",
    description: "US military personnel encountered a triangular craft in the forest. Official logs confirm 'unexplained lights'.",
    classification: "RESTRICTED",
    coordinates: "52.0959° N, 1.4500° E"
  }
];

export function AlienSites({ onBack }: AlienSitesProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1723274604840-f8aa72551cfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbGllbiUyMHVmbyUyMG15c3RlcmlvdXN8ZW58MXx8fHwxNzU4Nzc2NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Alien UFO mysterious"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>
      </div>

      {/* Spider Webs */}
      <SpiderWeb position="top-left" />
      <SpiderWeb position="bottom-right" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="text-green-400 hover:text-green-300 transition-colors flex items-center space-x-2 mr-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portal</span>
          </button>
          <div className="flex items-center space-x-3">
            <Eye className="w-8 h-8 text-green-400 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-green-400 tracking-wider">
              ALIEN SITES
            </h1>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-green-300 text-lg mb-4">
            CLASSIFIED DATABASE - EXTRATERRESTRIAL CONTACT LOCATIONS
          </p>
          <div className="w-full h-1 bg-green-500 animate-pulse"></div>
        </div>

        {/* Main Image */}
        <div className="mb-12 relative">
          <Card className="bg-black/80 border-green-500 overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={classifiedFootage}
                alt="Classified alien encounter footage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-green-500/20 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-green-300 text-sm">
                  CLASSIFIED FOOTAGE - EXTRATERRESTRIAL ENCOUNTER
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Sightings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {alienSightings.map((sighting, index) => (
            <Card key={index} className="bg-black/90 border-green-600 hover:border-green-400 transition-all duration-300 hover:shadow-green-500/20 hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-green-400 flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{sighting.location}</span>
                  </CardTitle>
                  <span className={`px-2 py-1 text-xs rounded ${
                    sighting.classification === 'TOP SECRET' ? 'bg-red-500/20 text-red-400' :
                    sighting.classification === 'DECLASSIFIED' ? 'bg-green-500/20 text-green-400' :
                    sighting.classification === 'RESTRICTED' ? 'bg-yellow-500/20 text-yellow-400' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {sighting.classification}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-green-300">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{sighting.date}</span>
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {sighting.description}
                  </p>
                  <div className="text-xs text-green-500 font-mono">
                    COORDINATES: {sighting.coordinates}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Warning Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-green-400 animate-pulse">
            <Eye className="w-4 h-4" />
            <span className="text-sm tracking-wider">
              👽 THEY ARE WATCHING - TRUST NO ONE 👽
            </span>
            <Eye className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}