import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Sharma',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Wood Buddy transformed our home with beautiful custom wardrobes and a stunning dining set. The craftsmanship is exceptional, and they completed everything on time. Highly recommended!',
      rating: 5
    },
    {
      name: 'Priya Desai',
      role: 'Interior Designer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'I have worked with Wood Buddy on multiple client projects. Their attention to detail and ability to execute complex designs flawlessly makes them my go-to partner for all woodwork requirements.',
      rating: 5
    },
    {
      name: 'Amit Patel',
      role: 'Corporate Office Manager',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'We contracted Wood Buddy for our entire office setup. They delivered premium quality workstations, conference tables, and storage solutions. Professional service from start to finish.',
      rating: 5
    },
    {
      name: 'Sneha Kapoor',
      role: 'Society Managing Committee',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'Wood Buddy completed the woodwork for our society clubhouse and reading room. The quality exceeded our expectations and they managed the large-scale project with great efficiency.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Restaurant Owner',
      image: 'https://images.pexels.com/photos/1024311/pexels-photo-1024311.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'The custom furniture and wooden interiors created by Wood Buddy gave our restaurant a warm, inviting ambiance. Their craftsmanship reflects true artistry in wood.',
      rating: 5
    },
    {
      name: 'Meera Joshi',
      role: 'Homeowner',
      image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=200',
      text: 'From consultation to installation, the team was professional and courteous. Our modular kitchen is both beautiful and functional. Worth every penny!',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-900 mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say about us.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 relative"
            >
              <Quote className="absolute top-6 right-6 text-amber-200" size={48} />

              <div className="flex items-center mb-6 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4 ring-4 ring-amber-100"
                />
                <div>
                  <h4 className="font-bold text-stone-900">{testimonial.name}</h4>
                  <p className="text-sm text-stone-600">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="text-amber-500 fill-amber-500" />
                ))}
              </div>

              <p className="text-stone-600 leading-relaxed">
                {testimonial.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
