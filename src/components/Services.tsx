import { Building2, Home, Warehouse, Sofa, DoorOpen, Ruler } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: 'Corporate Office Solutions',
      description: 'Complete office furniture and interior woodwork for modern workspaces. Desks, conference tables, reception areas, and custom storage solutions.',
      image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Home,
      title: 'Residential Furniture',
      description: 'Custom-designed furniture for homes of all sizes. Wardrobes, kitchen cabinets, beds, dining sets, and living room furniture.',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Warehouse,
      title: 'Housing Society Projects',
      description: 'Large-scale carpentry work for housing societies. Clubhouse furniture, common area seating, and community space woodwork.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Sofa,
      title: 'Custom Furniture Design',
      description: 'Bespoke furniture pieces tailored to your specific requirements, style preferences, and space constraints.',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: DoorOpen,
      title: 'Doors & Partitions',
      description: 'Elegant wooden doors, sliding partitions, and room dividers crafted with precision and attention to detail.',
      image: 'https://images.pexels.com/photos/1571467/pexels-photo-1571467.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      icon: Ruler,
      title: 'Interior Carpentry',
      description: 'Complete interior carpentry solutions including false ceilings, wall paneling, shelving, and decorative woodwork.',
      image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Comprehensive carpentry and furniture solutions for every need
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-amber-600 text-white rounded-lg">
                      <Icon size={24} />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-stone-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
