import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-pink-600 mb-4">About The Candy Lab</h1>
          <p className="text-lg text-gray-600">
            Where sweet dreams come to life through innovation and creativity
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-pink-600">Our Story</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                Founded in 2024, The Candy Lab began as a small dream to create extraordinary 
                candy experiences. Our team of passionate confectioners combines traditional 
                candy-making techniques with modern innovation to craft unique flavors and 
                beautiful designs that delight customers of all ages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-pink-600">Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 leading-relaxed">
                We believe that candy is more than just a sweet treat - it's a way to create 
                joy, bring people together, and make everyday moments special. Every piece we 
                create is made with love, using only the finest ingredients and innovative 
                techniques.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">What Makes Us Special</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🧪</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Innovation Lab</h3>
              <p className="text-sm text-gray-600">
                Our state-of-the-art lab creates unique flavors and textures you won't find anywhere else.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Natural Ingredients</h3>
              <p className="text-sm text-gray-600">
                We use only natural colors and flavors, sourced from the finest suppliers worldwide.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Made with Love</h3>
              <p className="text-sm text-gray-600">
                Every candy is handcrafted with care and attention to detail by our skilled artisans.
              </p>
            </div>
          </div>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-pink-600">Contact Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Visit Our Lab</h4>
                <p className="text-gray-600 text-sm">
                  123 Sweet Street<br />
                  Candy Town, CT 12345<br />
                  United States
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Get in Touch</h4>
                <p className="text-gray-600 text-sm">
                  Phone: (555) 123-CANDY<br />
                  Email: hello@thecandylab.com<br />
                  Hours: Mon-Sat 9AM-8PM
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}