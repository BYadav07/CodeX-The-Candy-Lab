import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SpiderWeb } from '../SpiderWeb';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowLeft, Skull, MapPin, AlertTriangle, Volume2 } from 'lucide-react';
import sirenheadImage from 'figma:asset/40940313dbb7aff5d3589b8b39b0d9f34cfcb787.png';

interface SirenheadProps {
  onBack: () => void;
}

const sightings = [
  {
    location: "Berkshire County, Massachusetts",
    date: "October 13, 2019",
    description: "Hikers reported hearing emergency broadcasts that led them deeper into the woods. Two never returned. Found only their phones, still playing the broadcast.",
    audio_frequency: "1420-1680 Hz",
    status: "MISSING PERSONS"
  },
  {
    location: "Pine Barrens, New Jersey",
    date: "August 3, 2020", 
    description: "40-foot tall humanoid creature with sirens for a head spotted near abandoned radio tower. Witnesses hospitalized for severe psychological trauma.",
    audio_frequency: "800-2000 Hz",
    status: "CONFIRMED SIGHTING"
  },
  {
    location: "Olympic National Forest, Washington",
    date: "June 15, 2021",
    description: "Search and rescue teams heard their own voices calling for help from the woods. The sounds led them in circles for 6 hours before they realized the deception.",
    audio_frequency: "Variable",
    status: "ONGOING INVESTIGATION"
  },
  {
    location: "Adirondack Park, New York",
    date: "September 22, 2022",
    description: "Campers recorded 40-minute audio of what sounded like air raid sirens mixed with screaming. The creature was observed standing motionless between trees.",
    audio_frequency: "200-4000 Hz",
    status: "AUDIO EVIDENCE"
  }
];

export function Sirenhead({ onBack }: SirenheadProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1655658532463-d43925aadb69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwZm9yZXN0JTIwY3JlYXR1cmV8ZW58MXx8fHwxNzU4Nzc2NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Dark forest creature"
          className="w-full h-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/95"></div>
      </div>

      {/* Spider Webs */}
      <SpiderWeb position="top-left" />
      <SpiderWeb position="top-right" />
      <SpiderWeb position="bottom-left" />
      <SpiderWeb position="bottom-right" />

      {/* Sound wave effects */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-full h-px bg-red-500 opacity-20 animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '2s'
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
            className="text-red-400 hover:text-red-300 transition-colors flex items-center space-x-2 mr-8"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Portal</span>
          </button>
          <div className="flex items-center space-x-3">
            <Skull className="w-8 h-8 text-red-400 animate-pulse" />
            <h1 className="text-4xl md:text-6xl font-bold text-red-400 tracking-wider">
              SIRENHEAD
            </h1>
          </div>
        </div>

        <div className="mb-8">
          <p className="text-red-300 text-lg mb-4">
            ANOMALOUS ENTITY CLASSIFICATION: KETER - AUDIO PREDATOR
          </p>
          <div className="w-full h-1 bg-red-500 animate-pulse"></div>
        </div>

        {/* Main Sirenhead Image */}
        <div className="mb-12 relative">
          <Card className="bg-black/80 border-red-500 overflow-hidden">
            <div className="aspect-video relative">
              <img
                src={sirenheadImage}
                alt="Sirenhead entity caught on surveillance"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-red-500/20 animate-pulse"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-red-300 text-sm">
                  SURVEILLANCE FOOTAGE - 40-FOOT ENTITY CONFIRMED
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Critical Warning */}
        <Card className="bg-red-900/80 border-red-500 mb-8 animate-pulse">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <AlertTriangle className="w-12 h-12 text-red-400" />
              <div>
                <p className="text-red-300 font-bold text-lg mb-2">🚨 EXTREME DANGER 🚨</p>
                <p className="text-red-400">
                  If you hear emergency broadcasts, air raid sirens, or familiar voices calling from the woods - DO NOT INVESTIGATE. 
                  The entity mimics audio to lure victims. Survival rate: 12%
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Entity Description */}
        <Card className="bg-black/90 border-red-600 mb-8">
          <CardHeader>
            <CardTitle className="text-red-400 flex items-center space-x-2">
              <Volume2 className="w-6 h-6" />
              <span>ENTITY PROFILE</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-red-300 font-bold mb-2">Physical Description:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Height: 40+ feet tall</li>
                  <li>• Body: Emaciated, mummified humanoid</li>
                  <li>• Head: Two large air raid sirens</li>
                  <li>• Limbs: Unnaturally long and thin</li>
                  <li>• Movement: Silent despite size</li>
                </ul>
              </div>
              <div>
                <h4 className="text-red-300 font-bold mb-2">Behavioral Patterns:</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Mimics emergency broadcasts</li>
                  <li>• Reproduces human voices perfectly</li>
                  <li>• Hunts primarily at night</li>
                  <li>• Stands motionless for hours</li>
                  <li>• Avoids populated areas</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sightings Grid */}
        <h2 className="text-2xl font-bold text-red-400 mb-6">DOCUMENTED ENCOUNTERS</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sightings.map((sighting, index) => (
            <Card key={index} className="bg-black/90 border-red-600 hover:border-red-400 transition-all duration-300 hover:shadow-red-500/20 hover:shadow-2xl">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-red-400 flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span className="text-sm">{sighting.location}</span>
                  </CardTitle>
                  <span className={`px-2 py-1 text-xs rounded ${
                    sighting.status === 'MISSING PERSONS' ? 'bg-red-500/20 text-red-400' :
                    sighting.status === 'CONFIRMED SIGHTING' ? 'bg-orange-500/20 text-orange-400' :
                    sighting.status === 'AUDIO EVIDENCE' ? 'bg-purple-500/20 text-purple-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {sighting.status}
                  </span>
                </div>
                <p className="text-red-300 text-sm">{sighting.date}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {sighting.description}
                  </p>
                  <div className="flex items-center space-x-4 text-xs">
                    <div className="text-red-400">
                      <span className="text-gray-400">Audio Frequency:</span> {sighting.audio_frequency}
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-red-500">
                    <Volume2 className="w-4 h-4" />
                    <span className="text-xs">AUDIO ANOMALY DETECTED</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Survival Instructions */}
        <Card className="bg-black/90 border-red-600 mt-8">
          <CardHeader>
            <CardTitle className="text-red-400">SURVIVAL PROTOCOL</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="text-red-300 font-bold mb-2">IF ENCOUNTERED:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Do NOT approach or respond to calls</li>
                  <li>• Avoid making noise</li>
                  <li>• Move away slowly and quietly</li>
                  <li>• Do not use electronic devices</li>
                </ul>
              </div>
              <div>
                <h4 className="text-red-300 font-bold mb-2">WARNING SIGNS:</h4>
                <ul className="text-gray-300 space-y-1">
                  <li>• Emergency broadcasts in remote areas</li>
                  <li>• Familiar voices calling from woods</li>
                  <li>• Tall, dark silhouettes between trees</li>
                  <li>• Electronic interference</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Footer Warning */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-red-400 animate-pulse">
            <Skull className="w-4 h-4" />
            <span className="text-sm tracking-wider">
              📻 WHEN YOU HEAR THE SIRENS, IT'S ALREADY TOO LATE 📻
            </span>
            <Skull className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
}