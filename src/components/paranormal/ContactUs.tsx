import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { SpiderWeb } from '../SpiderWeb';
import { Card } from '../ui/card';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Skull, Mail, Phone, MapPin } from 'lucide-react';

interface ContactUsProps {
  onBack: () => void;
}

export function ContactUs({ onBack }: ContactUsProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setTimeout(() => {
      alert('Your message has been sent to the void... 🌑');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background Image - Same as ParanormalPortal */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1690068372854-9f9438598afd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJrJTIwc3Bvb2t5JTIwYmFja2dyb3VuZHxlbnwxfHx8fDE3NTg3NzY0ODl8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Dark spooky background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
      </div>

      {/* Spider Webs */}
      <SpiderWeb position="top-left" />
      <SpiderWeb position="top-right" />
      <SpiderWeb position="bottom-left" />
      <SpiderWeb position="bottom-right" />

      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-500 rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>



      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 text-gray-300 hover:text-white transition-colors flex items-center space-x-2"
        >
          <span className="text-lg">←</span>
          <span>Return to Portal</span>
        </button>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-8 tracking-wider drop-shadow-2xl animate-pulse">
            CONTACT THE
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-red-500 mb-8 tracking-wider drop-shadow-2xl animate-pulse">
            UNKNOWN
          </h1>
          <div className="w-32 h-1 bg-red-500 mx-auto animate-pulse"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-black/80 border-gray-600 hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Skull className="w-8 h-8 text-red-500 mr-3" />
                <h2 className="text-2xl font-bold text-gray-200 tracking-wide">
                  SEND MESSAGE
                </h2>
                <Skull className="w-8 h-8 text-red-500 ml-3" />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 tracking-wide">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="bg-black/50 border-gray-600 text-gray-200 focus:border-red-500 focus:ring-red-500/50"
                    placeholder="Enter your identity..."
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 tracking-wide">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="bg-black/50 border-gray-600 text-gray-200 focus:border-red-500 focus:ring-red-500/50"
                    placeholder="your.email@void.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 tracking-wide">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="bg-black/50 border-gray-600 text-gray-200 focus:border-red-500 focus:ring-red-500/50"
                    placeholder="What brings you here..."
                  />
                </div>

                <div>
                  <label className="block text-gray-300 mb-2 tracking-wide">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="bg-black/50 border-gray-600 text-gray-200 focus:border-red-500 focus:ring-red-500/50 resize-none"
                    placeholder="Describe your encounter..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-bold tracking-wide py-3 transition-all duration-300 hover:shadow-lg hover:shadow-red-500/50"
                >
                  TRANSMIT TO THE VOID
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-black/80 border-gray-600 hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-200 mb-6 tracking-wide text-center">
                  REACH THE SHADOWS
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-gray-300">
                    <Mail className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-gray-400">contact@paranormal.void</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-300">
                    <Phone className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="font-bold">Emergency Line</p>
                      <p className="text-gray-400">1-800-UNKNOWN</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-300">
                    <MapPin className="w-6 h-6 text-red-500" />
                    <div>
                      <p className="font-bold">Location</p>
                      <p className="text-gray-400">Classified Coordinates</p>
                      <p className="text-gray-500 text-sm">█████████████</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-black/80 border-gray-600 hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:shadow-red-500/20">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-200 mb-4 tracking-wide text-center">
                  WARNING
                </h3>
                <div className="text-center space-y-2">
                  <p className="text-red-400 text-sm animate-pulse">
                    ⚠️ ALL COMMUNICATIONS MONITORED ⚠️
                  </p>
                  <p className="text-gray-400 text-xs">
                    By contacting us, you acknowledge that you have entered<br />
                    a realm beyond conventional understanding.
                  </p>
                  <p className="text-gray-500 text-xs">
                    Side effects may include: reality distortion,<br />
                    temporal displacement, and existential dread.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer warning */}
        <div className="text-center mt-16">
          <p className="text-red-400 text-sm tracking-wider animate-pulse">
            🕸️ THE VOID WHISPERS BACK 🕸️
          </p>
        </div>
      </div>
    </div>
  );
}