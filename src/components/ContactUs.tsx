import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';

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
    alert('Thank you for your message! We\'ll get back to you soon! 🍭');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-100">
      {/* Background candy images */}
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div className="grid grid-cols-4 h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1635342219731-4ae2bf39e1e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYW5keSUyMGJhY2tncm91bmQlMjBwYXR0ZXJufGVufDF8fHx8MTc1ODc3NTY3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Candy background"
            className="w-full h-full object-cover"
          />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1686270647432-3345e41343f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNhbmR5JTIwc3RvcmV8ZW58MXx8fHwxNzU4Nzc1Njc1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Colorful candy store"
            className="w-full h-full object-cover"
          />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1668364227353-395c06544233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNhbmR5JTIwc3dlZXRzfGVufDF8fHx8MTc1ODc3NTQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Colorful candy sweets"
            className="w-full h-full object-cover"
          />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1611605472036-e5ad9e804477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2xsaXBvcHMlMjBjYW5keSUyMHNob3B8ZW58MXx8fHwxNzU4Nzc1NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Colorful lollipops"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16">
        {/* Back button */}
        <button
          onClick={onBack}
          className="mb-8 text-pink-600 hover:text-pink-800 transition-colors flex items-center space-x-2 font-semibold"
        >
          <span className="text-lg">←</span>
          <span>Back to Home</span>
        </button>

        {/* Main Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold text-pink-600 mb-6">
            <span className="text-yellow-400">C</span>ONTACT <span className="text-yellow-400">U</span>S
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have a sweet question? We'd love to hear from you! 
            Whether it's about our delicious candies or custom orders, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="p-8">
              <div className="flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-pink-500 mr-3" />
                <h2 className="text-3xl font-bold text-pink-600">
                  Send us a message
                </h2>
                <Heart className="w-8 h-8 text-pink-500 ml-3" />
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Your Name *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full focus:ring-pink-500 focus:border-pink-500"
                    placeholder="Your sweet name..."
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full focus:ring-pink-500 focus:border-pink-500"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <Input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full focus:ring-pink-500 focus:border-pink-500"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full focus:ring-pink-500 focus:border-pink-500 resize-none"
                    placeholder="Tell us about your sweet dreams..."
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-pink-600 hover:bg-pink-700 text-white font-bold py-3 transition-all duration-300 hover:shadow-lg"
                >
                  Send Sweet Message 🍭
                </Button>
              </form>
            </div>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <h3 className="text-3xl font-bold text-pink-600 mb-6 text-center">
                  Get in Touch
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4 text-gray-700">
                    <Mail className="w-6 h-6 text-pink-500" />
                    <div>
                      <p className="font-bold">Email</p>
                      <p className="text-gray-600">hello@thecandylab.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-700">
                    <Phone className="w-6 h-6 text-pink-500" />
                    <div>
                      <p className="font-bold">Phone</p>
                      <p className="text-gray-600">1-800-SWEETIE</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4 text-gray-700">
                    <MapPin className="w-6 h-6 text-pink-500" />
                    <div>
                      <p className="font-bold">Visit Our Lab</p>
                      <p className="text-gray-600">123 Sugar Street</p>
                      <p className="text-gray-600">Candy City, CC 12345</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-pink-600 mb-4 text-center">
                  Business Hours
                </h3>
                <div className="space-y-2 text-center">
                  <p className="text-gray-700">
                    <strong>Monday - Friday:</strong> 9:00 AM - 7:00 PM
                  </p>
                  <p className="text-gray-700">
                    <strong>Saturday:</strong> 10:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-700">
                    <strong>Sunday:</strong> 12:00 PM - 5:00 PM
                  </p>
                  <p className="text-pink-500 text-sm mt-4">
                    🍬 Sweet dreams are made 24/7! 🍬
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}