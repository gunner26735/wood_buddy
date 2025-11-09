import { Award, Users, Briefcase, Heart } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Award,
      title: 'Expert Craftsmanship',
      description: 'Decades of experience in fine woodwork and carpentry'
    },
    {
      icon: Users,
      title: 'Trusted Partner',
      description: 'Building lasting relationships with our clients'
    },
    {
      icon: Briefcase,
      title: 'Large-Scale Projects',
      description: 'Corporate offices, housing societies, and commercial spaces'
    },
    {
      icon: Heart,
      title: 'Personal Touch',
      description: 'Custom furniture solutions for every home and family'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-6">
              Building Dreams
              <span className="block text-amber-700 mt-2">One Piece at a Time</span>
            </h2>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              Wood Buddy is a premier carpentry and wooden work company dedicated to delivering exceptional craftsmanship and innovative design solutions. We specialize in transforming spaces through the timeless beauty of wood.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed mb-6">
              From large-scale corporate contracts to intimate home projects, we bring the same level of dedication, precision, and artistry to every piece we create. Our team of skilled craftsmen combines traditional techniques with modern design sensibilities.
            </p>
            <p className="text-lg text-stone-600 leading-relaxed">
              Whether you're furnishing an entire office complex, upgrading a housing society's common areas, or creating custom furniture for your home, Wood Buddy is your trusted partner in wood.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Craftsman at work"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-100 rounded-2xl -z-10" />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-stone-50 hover:bg-amber-50 transition-colors duration-300"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-600 text-white rounded-full mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-bold text-stone-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
