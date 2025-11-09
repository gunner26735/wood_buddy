import { useState } from 'react';
import { Building2, Home, Users } from 'lucide-react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects', icon: null },
    { id: 'corporate', label: 'Corporate', icon: Building2 },
    { id: 'residential', label: 'Residential', icon: Home },
    { id: 'society', label: 'Housing Society', icon: Users }
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Office Workspace',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Complete office furniture setup for 50+ employees'
    },
    {
      id: 2,
      title: 'Luxury Home Interior',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom bedroom and living room furniture'
    },
    {
      id: 3,
      title: 'Society Clubhouse',
      category: 'society',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Community hall and recreation area woodwork'
    },
    {
      id: 4,
      title: 'Executive Conference Room',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Premium boardroom table and custom cabinetry'
    },
    {
      id: 5,
      title: 'Contemporary Kitchen',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1599791/pexels-photo-1599791.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Modular kitchen with custom wooden cabinets'
    },
    {
      id: 6,
      title: 'Society Common Areas',
      category: 'society',
      image: 'https://images.pexels.com/photos/1909791/pexels-photo-1909791.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Seating and decorative woodwork installation'
    },
    {
      id: 7,
      title: 'Startup Office Design',
      category: 'corporate',
      image: 'https://images.pexels.com/photos/380768/pexels-photo-380768.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Open workspace with custom desks and storage'
    },
    {
      id: 8,
      title: 'Master Bedroom Suite',
      category: 'residential',
      image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Walk-in wardrobe and bed with side tables'
    },
    {
      id: 9,
      title: 'Community Library',
      category: 'society',
      image: 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Custom bookshelves and reading area furniture'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Explore our completed projects across various sectors
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-lg transform scale-105'
                    : 'bg-stone-100 text-stone-700 hover:bg-stone-200'
                }`}
              >
                {Icon && <Icon size={18} />}
                {category.label}
              </button>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-white/90">{project.description}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 px-3 py-1 bg-amber-600 text-white text-sm font-semibold rounded-full">
                {categories.find(c => c.id === project.category)?.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
