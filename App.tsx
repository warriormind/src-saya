import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { Sprout, Users, Globe, ArrowRight } from 'lucide-react';
import { Button } from './components/ui/button';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgb(34 197 94) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
          {/* Logo/Icon */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-green-500 opacity-20 blur-3xl rounded-full" />
              <div className="relative bg-white p-6 rounded-full shadow-xl">
                <Sprout className="w-16 h-16 text-green-600" strokeWidth={2.5} />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="mb-6">
            <h1 className="text-emerald-600 tracking-wider mb-4 uppercase">
              Sustainable Agriculture Youth Alliance
            </h1>
            <div className="flex items-center justify-center gap-3 mb-2">
              <div className="h-px w-12 bg-green-500" />
              <span className="text-green-700 tracking-[0.3em]">SAYA</span>
              <div className="h-px w-12 bg-green-500" />
            </div>
          </div>

          {/* Tagline */}
          <p className="text-gray-700 max-w-3xl mx-auto mb-12">
            Empowering the next generation of agricultural leaders to cultivate sustainable solutions 
            for a thriving planet and prosperous communities
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all">
              Get Involved
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button variant="outline" className="border-2 border-green-600 text-green-700 hover:bg-green-50 px-8 py-6 rounded-full">
              Learn More
            </Button>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-green-100">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-green-800 mb-3">Youth-Led</h3>
              <p className="text-gray-600">
                Driven by passionate young leaders committed to transforming agriculture
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-green-100">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sprout className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-green-800 mb-3">Sustainable</h3>
              <p className="text-gray-600">
                Promoting eco-friendly practices that protect our environment
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-green-100">
              <div className="bg-green-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-green-800 mb-3">Global Impact</h3>
              <p className="text-gray-600">
                Building a worldwide network for sustainable food systems
              </p>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-green-400 rounded-full opacity-20 blur-2xl" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-emerald-400 rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-1/2 right-20 w-16 h-16 bg-teal-400 rounded-full opacity-20 blur-2xl" />
      </div>
    </div>
  );
}
