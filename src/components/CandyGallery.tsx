import { ImageWithFallback } from './figma/ImageWithFallback';

const candyImages = [
  {
    src: "https://images.unsplash.com/photo-1668364227353-395c06544233?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGNhbmR5JTIwc3dlZXRzfGVufDF8fHx8MTc1ODc3NTQ0N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Colorful candy collection",
    title: "Assorted Sweets"
  },
  {
    src: "https://images.unsplash.com/photo-1606939733655-fb169c7d11db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndW1teSUyMGJlYXJzJTIwY2FuZHl8ZW58MXx8fHwxNzU4Nzc1NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Gummy bears candy",
    title: "Gummy Bears"
  },
  {
    src: "https://images.unsplash.com/photo-1686578220035-eb8530720b5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYW5keSUyMGJhcnN8ZW58MXx8fHwxNzU4Nzc1NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Chocolate candy bars",
    title: "Chocolate Bars"
  },
  {
    src: "https://images.unsplash.com/photo-1611605472036-e5ad9e804477?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb2xsaXBvcHMlMjBjYW5keSUyMHNob3B8ZW58MXx8fHwxNzU4Nzc1NDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    alt: "Colorful lollipops",
    title: "Lollipops"
  }
];

export function CandyGallery() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-pink-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Sweet Creations</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our amazing collection of handcrafted candies, made with love and the finest ingredients
            in our candy laboratory.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {candyImages.map((candy, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="aspect-square relative">
                <ImageWithFallback
                  src={candy.src}
                  alt={candy.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{candy.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}