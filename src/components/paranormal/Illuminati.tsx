import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SpiderWeb } from '../SpiderWeb';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, Triangle, Eye, Crown, Shield } from 'lucide-react';

interface IlluminatiProps {
  onBack: () => void;
}

const operations = [
  {
    name: "OPERATION MINDBRIDGE",
    year: "1971-1987",
    description: "Mass media psychological conditioning program. Subliminal messaging inserted into popular television shows and advertisements to shape public opinion on key political issues.",
    status: "COMPLETED",
    classification: "EYES ONLY"
  },
  {
    name: "PROJECT DIGITAL VEIL",
    year: "1995-Present",
    description: "Internet information control initiative. Algorithms designed to suppress or promote specific information, creating artificial consensus through manipulated search results and social media feeds.",
    status: "ONGOING",
    classification: "COSMIC"
  },
  {
    name: "OPERATION GREENBACK",
    year: "2008-2012", 
    description: "Global financial market manipulation to create economic dependency. Strategic placement of members in key financial institutions to control monetary policy and resource distribution.",
    status: "SUCCESSFUL",
    classification: "ULTRA SECRET"
  },
  {
    name: "THE WEATHER PROJECT",
    year: "2015-Present",
    description: "Climate modification technology used to influence agricultural output and create artificial scarcity. HAARP facilities and stratospheric aerosol injection programs.",
    status: "ACTIVE",
    classification: "BLACK"
  }
];

const hierarchy = [
  {
    level: "THE ALL-SEEING",
    members: "13",
    description: "The innermost circle. Names unknown even to most members. Control global policy through proxies and influence networks.",
    symbol: "⚡"
  },
  {
    level: "GRAND ARCHITECTS", 
    members: "144",
    description: "Regional controllers who implement directives. Include heads of state, central bank governors, and media moguls.",
    symbol: "🔺"
  },
  {
    level: "SHADOW OPERATORS",
    members: "1,728",
    description: "Field operatives in key positions: intelligence agencies, major corporations, academic institutions, and religious organizations.",
    symbol: "👁️"
  },
  {
    level: "USEFUL ASSETS",
    members: "Unknown",
    description: "Unwitting participants who further the agenda without knowledge of the larger structure. Politicians, celebrities, and public figures.",
    symbol: "🎭"
  }
];

export function Illuminati({ onBack }: IlluminatiProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1498066534384-8b6a352543b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbGx1bWluYXRpJTIwc3ltYm9sJTIwbXlzdGVyaW91c3xlbnwxfHx8fDE3NTg3NzY1MDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Illuminati symbol mysterious"
          className="w-full h-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95"></div>
      </div>

      {/* Spider Webs */}
      <SpiderWeb position="top-left" />
      <SpiderWeb position="top-right" />
      <SpiderWeb position="bottom-left" />
      <SpiderWeb position="bottom-right" />

      {/* All-seeing eye effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(7)].map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 opacity-20"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            <Triangle className="w-full h-full text-yellow-500 animate-pulse" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="text-yellow-400 hover:text-yellow-300 transition-colors flex items-center space-x-2 mr-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portal</span>
          </button>
          <div className="flex items-center space-x-3">
            <Triangle className="w-8 h-8 text-yellow-400 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-yellow-400 tracking-wider">
              ILLUMINATI
            </h1>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-yellow-300 text-lg mb-4">
            THE SECRET SOCIETY - ORDO ILLUMINATUS BAVARIA
          </p>
          <div className="w-full h-1 bg-yellow-500 animate-pulse"></div>
        </div>

        {/* Critical Warning */}
        <Card className="bg-yellow-900/50 border-yellow-500 mb-8 animate-pulse">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <Eye className="w-12 h-12 text-yellow-400" />
              <div>
                <p className="text-yellow-300 font-bold text-lg mb-2">👁️ NOVUS ORDO SECLORUM 👁️</p>
                <p className="text-yellow-400">
                  The New World Order is not a conspiracy theory - it is an operational reality. 
                  They have been in control for centuries, and their influence spans every aspect of human civilization.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Main Symbol */}
        <div className="mb-12 relative">
          <Card className="bg-black/80 border-yellow-500 overflow-hidden">
            <div className="aspect-video relative">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-yellow-900/30 to-black">
                <div className="relative">
                  <Triangle className="w-48 h-48 text-yellow-500" />
                  <Eye className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 text-yellow-400 animate-pulse" />
                </div>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-yellow-300 text-sm text-center">
                  THE ALL-SEEING EYE - SYMBOL OF ABSOLUTE KNOWLEDGE AND CONTROL
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Hierarchy Structure */}
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">ORGANIZATIONAL HIERARCHY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {hierarchy.map((level, index) => (
            <Card key={index} className="bg-black/90 border-yellow-600 hover:border-yellow-400 transition-all duration-300 hover:shadow-yellow-500/20 hover:shadow-2xl">
              <CardHeader>
                <CardTitle className="text-yellow-400 flex items-center space-x-2">
                  <span className="text-2xl">{level.symbol}</span>
                  <span>{level.level}</span>
                </CardTitle>
                <p className="text-yellow-300 text-sm">Members: {level.members}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {level.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Operations Grid */}
        <h2 className="text-2xl font-bold text-yellow-400 mb-6">CLASSIFIED OPERATIONS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {operations.map((operation, index) => (
            <Card key={index} className="bg-black/90 border-yellow-600 hover:border-yellow-400 transition-all duration-300 hover:shadow-yellow-500/20 hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-yellow-400 flex items-center space-x-2">
                    <Shield className="w-5 h-5" />
                    <span className="text-sm">{operation.name}</span>
                  </CardTitle>
                  <span className={`px-2 py-1 text-xs rounded ${
                    operation.status === 'ONGOING' ? 'bg-red-500/20 text-red-400' :
                    operation.status === 'ACTIVE' ? 'bg-orange-500/20 text-orange-400' :
                    operation.status === 'COMPLETED' ? 'bg-green-500/20 text-green-400' :
                    'bg-blue-500/20 text-blue-400'
                  }`}>
                    {operation.status}
                  </span>
                </div>
                <div className="flex items-center space-x-4 text-yellow-300 text-sm">
                  <span>Period: {operation.year}</span>
                  <span>Class: {operation.classification}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {operation.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Control Methods */}
        <Card className="bg-black/90 border-yellow-600 mt-8">
          <CardHeader>
            <CardTitle className="text-yellow-400 flex items-center space-x-2">
              <Crown className="w-6 h-6" />
              <span>METHODS OF CONTROL</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <h4 className="text-yellow-300 font-bold mb-2">ECONOMIC</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Central banking systems</li>
                  <li>• Debt-based currencies</li>
                  <li>• Artificial market manipulation</li>
                  <li>• Resource monopolization</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 font-bold mb-2">INFORMATION</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Media ownership concentration</li>
                  <li>• Search algorithm manipulation</li>
                  <li>• Academic institution influence</li>
                  <li>• Historical narrative control</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 font-bold mb-2">POLITICAL</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Think tank placement</li>
                  <li>• Secret society recruitment</li>
                  <li>• Blackmail operations</li>
                  <li>• Policy coordination</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* The Truth */}
        <Card className="bg-black/90 border-yellow-600 mt-8">
          <CardHeader>
            <CardTitle className="text-yellow-400">THE ULTIMATE TRUTH</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Founded in Bavaria on May 1, 1776, the Illuminati has evolved from an Enlightenment-era secret society 
              into the shadow government of the modern world. Their goal: the complete restructuring of human civilization 
              under a single world authority.
            </p>
            <p className="text-gray-300 text-sm leading-relaxed">
              Every major historical event of the past 250 years has been orchestrated or influenced by this organization. 
              Wars, revolutions, economic collapses, and technological breakthroughs all serve their ultimate agenda: 
              the establishment of a New World Order with themselves as the permanent ruling class.
            </p>
          </CardContent>
        </Card>

        {/* Footer Warning */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-yellow-400 animate-pulse">
            <Triangle className="w-4 h-4" />
            <span className="text-sm tracking-wider">
              👁️ KNOWLEDGE IS POWER - POWER IS CONTROL - CONTROL IS EVERYTHING 👁️
            </span>
            <Triangle className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}