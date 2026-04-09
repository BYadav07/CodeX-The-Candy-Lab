import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SpiderWeb } from '../SpiderWeb';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, Waves, Anchor, Fish, Skull } from 'lucide-react';
import sonarDetection from 'figma:asset/8794663ca33c5f906cb1349cc2fd945aaccba628.png';

interface MermaidsProps {
  onBack: () => void;
}

const encounters = [
  {
    location: "Mariana Trench, Pacific Ocean",
    depth: "36,200 feet",
    date: "March 14, 2019",
    description: "Deep sea research vessel captured sonar readings of humanoid figures moving at impossible speeds. When lights were activated, creatures vanished instantly.",
    classification: "ABYSSAL VARIANT",
    threat_level: "UNKNOWN"
  },
  {
    location: "Bermuda Triangle",
    depth: "12,000 feet", 
    date: "July 8, 2020",
    description: "Submarine crew reported bioluminescent entities surrounding their vessel. Crew experienced shared hallucinations of drowning despite being in sealed chamber.",
    classification: "PSYCHIC VARIANT",
    threat_level: "EXTREME"
  },
  {
    location: "Arctic Ocean, Near Greenland",
    depth: "8,500 feet",
    date: "November 22, 2021",
    description: "Research team discovered an underwater city with architecture unlike any known civilization. Inhabitants observed but avoided all contact attempts.",
    classification: "ANCIENT CIVILIZATION",
    threat_level: "HOSTILE"
  },
  {
    location: "Mediterranean Sea, Off Malta",
    depth: "3,200 feet",
    date: "April 5, 2022", 
    description: "Fishing vessels reported nets being cut by unseen forces. Sonar detected humanoid shapes beneath boats. Three fishermen found with water in lungs despite never falling overboard.",
    classification: "TERRITORIAL VARIANT",
    threat_level: "HIGH"
  }
];

export function Mermaids({ onBack }: MermaidsProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1646232106482-f8d61cb91e09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHVuZGVyd2F0ZXIlMjBteXN0ZXJ5fGVufDF8fHx8MTc1ODc3NjUwMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Ocean underwater mystery"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/90 via-black/80 to-black/95"></div>
      </div>

      {/* Spider Webs */}
      <SpiderWeb position="top-left" />
      <SpiderWeb position="bottom-right" />

      {/* Water effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="text-blue-400 hover:text-blue-300 transition-colors flex items-center space-x-2 mr-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portal</span>
          </button>
          <div className="flex items-center space-x-3">
            <Waves className="w-8 h-8 text-blue-400 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-blue-400 tracking-wider">
              MERMAIDS
            </h1>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-blue-300 text-lg mb-4">
            PROJECT DEEPBLUE - AQUATIC HUMANOID ENTITIES
          </p>
          <div className="w-full h-1 bg-blue-500 animate-pulse"></div>
        </div>

        {/* Classification Warning */}
        <Card className="bg-blue-900/50 border-blue-500 mb-8">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Skull className="w-6 h-6 text-blue-400 animate-pulse" />
              <div>
                <p className="text-blue-300 font-bold">⚠️ MARITIME SECURITY ALERT ⚠️</p>
                <p className="text-blue-400 text-sm">
                  These entities are NOT the mythical creatures of folklore. They are ancient, intelligent, and consider human presence in their domain an invasion.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Image */}
        <div className="mb-12 relative">
          <Card className="bg-black/80 border-blue-500 overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={sonarDetection}
                alt="Sonar detection of underwater entity"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500/20 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-blue-300 text-sm">
                  SONAR DETECTION OF HOSTILE ENTITY - DEPTH: 15,000 FEET
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Entity Profile */}
        <Card className="bg-black/90 border-blue-600 mb-8">
          <CardHeader>
            <CardTitle className="text-blue-400 flex items-center space-x-2">
              <Fish className="w-6 h-6" />
              <span>SPECIES CLASSIFICATION</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-blue-300 font-bold mb-2">Physical Characteristics:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Length: 7-12 feet</li>
                  <li>• Upper body: Humanoid with gills</li>
                  <li>• Lower body: Fish-like tail</li>
                  <li>• Eyes: Bioluminescent, pupilless</li>
                  <li>• Skin: Scaled, iridescent</li>
                  <li>• Intelligence: Highly advanced</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-300 font-bold mb-2">Abilities:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Telepathic communication</li>
                  <li>• Pressure immunity</li>
                  <li>• Echolocation capabilities</li>
                  <li>• Bioelectric manipulation</li>
                  <li>• Oxygen extraction from water</li>
                  <li>• Rapid healing factor</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Encounters Grid */}
        <h2 className="text-2xl font-bold text-blue-400 mb-6">DEEP SEA ENCOUNTERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {encounters.map((encounter, index) => (
            <Card key={index} className="bg-black/90 border-blue-600 hover:border-blue-400 transition-all duration-300 hover:shadow-blue-500/20 hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-blue-400 flex items-center space-x-2">
                    <Anchor className="w-5 h-5" />
                    <span className="text-sm">{encounter.location}</span>
                  </CardTitle>
                  <span className={`px-2 py-1 text-xs rounded ${
                    encounter.threat_level === 'EXTREME' ? 'bg-red-500/20 text-red-400' :
                    encounter.threat_level === 'HIGH' ? 'bg-orange-500/20 text-orange-400' :
                    encounter.threat_level === 'HOSTILE' ? 'bg-red-600/20 text-red-500' :
                    'bg-gray-500/20 text-gray-400'
                  }`}>
                    {encounter.threat_level}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-blue-300 text-sm">
                  <span>Depth: {encounter.depth}</span>
                  <span>{encounter.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {encounter.description}
                  </p>
                  <div className="text-xs text-blue-400">
                    <span className="text-gray-400">Classification:</span> {encounter.classification}
                  </div>
                  <div className="flex items-center space-x-2 text-blue-500">
                    <Waves className="w-4 h-4" />
                    <span className="text-xs">DEEP WATER ANOMALY</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Research Notes */}
        <Card className="bg-black/90 border-blue-600 mt-8">
          <CardHeader>
            <CardTitle className="text-blue-400">RESEARCH CONCLUSIONS</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 text-sm">
              <p className="text-gray-300">
                <strong className="text-blue-400">Population Estimate:</strong> Conservative estimates suggest 50,000-100,000 individuals worldwide, 
                with established colonies in deep ocean trenches and underwater cave systems.
              </p>
              <p className="text-gray-300">
                <strong className="text-blue-400">Technological Level:</strong> Evidence suggests advanced bioengineering and underwater construction 
                capabilities. Structures discovered show no tool marks consistent with known human technology.
              </p>
              <p className="text-gray-300">
                <strong className="text-blue-400">Hostility Assessment:</strong> While not inherently aggressive, they view human deep-sea exploration 
                as territorial invasion. Several incidents suggest coordinated responses to perceived threats.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Footer Warning */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-blue-400 animate-pulse">
            <Waves className="w-4 h-4" />
            <span className="text-sm tracking-wider">
              🌊 THE OCEAN KEEPS ITS SECRETS - AND ITS GUARDIANS 🌊
            </span>
            <Waves className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}