"use client";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import React from 'react';
import { 
  Star,  
  BarChart3, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  MessageSquare,
  MapPin,
  Send,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';

// TypeScript interfaces for component props and data structures
interface Feature {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

interface StepItem {
  step: string;
  title: string;
  desc: string;
}

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

type SolutionItem = string;

// Type for the main component props (currently empty but can be extended)
interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  // Typed data arrays
  const features: Feature[] = [
    { 
      icon: <BarChart3 className="w-8 h-8 text-blue-600" />, 
      title: "Operational Diagnosis", 
      desc: "Identify where workflows break down, where teams lose time, and where systems create unnecessary friction." 
    },
    { 
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />, 
      title: "Workflow Mapping", 
      desc: "Understand how information, tasks, and decisions move through your business operations." 
    },
    { 
      icon: <Users className="w-8 h-8 text-blue-600" />, 
      title: "System Architecture Planning", 
      desc: "Design scalable software structures tailored to operational needs, automation opportunities, and future growth." 
    },
    { 
      icon: <Clock className="w-8 h-8 text-blue-600" />, 
      title: "Solution Implementation", 
      desc: "From dashboards to internal tools and automation systems, we build and refine software around your workflow." 
    }
  ];

  const steps: StepItem[] = [
    { 
      step: "01", 
      title: "Operational Discovery", 
      desc: "We analyze how your business currently operates, where delays happen, and where workflows begin to break down." 
    },
    { 
      step: "02", 
      title: "Workflow & System Diagnosis", 
      desc: "We identify operational bottlenecks, disconnected systems, repetitive manual work, and opportunities for automation." 
    },
    { 
      step: "03", 
      title: "Solution Architecture", 
      desc: "We design scalable software structures tailored to your workflow, operational goals, and future growth requirements." 
    },
    { 
      step: "04", 
      title: "Implementation & Optimization", 
      desc: "We build, refine, and continuously improve the software system to ensure operational efficiency and long-term scalability." 
    }
  ];

  const solutionItems: SolutionItem[] = [
    "Centralize workflows, analytics, reporting, and operational visibility into one system.",
    "Reduce repetitive manual processes through tailored automation systems.",
    "Track operations, inventory movement, fulfillment, and internal workflows in real time.",
    "A/B test recommendations"
  ];

  const testimonials: Testimonial[] = [
    { 
      quote: "Finally, we know *why* customers leave 4 stars instead of 5. This tool changed how we prioritize fixes.", 
      author: "Sarah Chen", 
      role: "Founder, LuxeHome" 
    },
    { 
      quote: "The diagnostic layer is genius. We fixed our checkout friction and saw a 23% lift in conversions.", 
      author: "Marcus Webb", 
      role: "E-commerce Director" 
    },
    { 
      quote: "Simple to install, zero maintenance, and the weekly reports are gold. Highly recommend.", 
      author: "Priya Sharma", 
      role: "Operations Lead" 
    }
  ];

  return (
    <>
{/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background image with overlay - fixed to extend through all sections */}
        <div className="fixed inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/backroung.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', zIndex: '-2' }} />
        
        {/* Sea blue gradient overlay for blending - fixed to extend through all sections */}
        <div className="fixed inset-0 bg-gradient-to-br from-white/100 via-cyan-500/600 to-blue-100/10" style={{ zIndex: '-1' }} />
        
        {/* Content container - perfectly centered */}
        <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center min-h-screen max-w-full pt-20 md:pt-50">
            <div className="text-center">
              {/* Orbital ring wrapper - single decorative ring around text */}
              <div className="relative mx-auto max-w-4xl py-4 sm:py-12 lg:py-16 md:mt-10">
                
                {/* Single orbital ring around headline - purely decorative */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none -mt-28 sm:-mt-12 md:-mt-8 lg:-mt-34" style={{ zIndex: '-1' }}>
                  <div 
                    className="w-[120%] h-40 sm:h-48 lg:h-56 rounded-[50%] border-2"
                    style={{ 
                      borderColor: 'rgba(21, 85, 158, 0.3)',
                      boxShadow: '0 0 40px rgba(10, 119, 161, 0.2), inset 0 0 20px rgba(34, 211, 238, 0.1)',
                      transform: 'rotateX(45deg)',
                      background: 'radial-gradient(ellipse at center, rgba(6, 112, 161, 0.05) 0%, rgba(13, 93, 197, 0.02) 50%, transparent 100%)',
                      backdropFilter: 'blur(5px)',
                      WebkitBackdropFilter: 'blur(5px)'
                    }} 
                  />
                </div>

                {/* Headline text - perfectly centered */}
                <h1 className="relative z-10 w-full max-w-5xl mx-auto text-center text-3xl md:text-6xl xl:text-7xl sm:text-3xl lg:text-6xl font-bold text-gray-800 leading-tight mb-2 md:mb-4 lg:mb-2">
                  Operational software for modern businesses.
                </h1>
                <p className="text-center text-sm sm:text-lg text-black mb-6 sm:mb-8">
                  We analyze workflows, identify operational bottlenecks, and engineer scalable software solutions tailored to how your business actually works.
                </p>
              </div>
              <div className="justify-center mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                  ))}
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        
        {/* Connect With Us button - bottom right corner */}
        <a 
          href="#contact" 
          className="absolute bottom-8 right-8 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200 z-20"
        >
          Connect With Us
          <ArrowRight className="ml-2 w-3 h-3" />
        </a>
        
       
      </section>

      {/* Problem Statement & features & How It Works */}
      <section id="problem-statement" className="mt-28 sm:mt-36 lg:mt-44 pb-20 sm:pb-28 lg:pb-36 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Every inefficient workflow reveals an opportunity for systems optimization.
            </h2>
            <p className="text-xl text-gray-600">
              From workflow analysis to implementation, every step is designed to uncover bottlenecks and engineer scalable business solutions.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {steps.map((item, idx) => (
              <div key={idx} className="relative">
                {idx < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-blue-200 -z-10" />
                )}
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions / Services Section */}
      <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Software Systems Built Around Operational Clarity
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From internal dashboards to workflow automation and operational platforms, every system is designed around how your business actually functions.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Future Tool Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden opacity-75 hover:opacity-100 transition">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Example Solutions</h3>
                <p className="text-purple-100">Coming Q3 2026 • Identify exactly where users drop off in your funnel.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {solutionItems.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <span className="inline-flex items-center text-gray-400 font-semibold">
                    Notify Me When Ready <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Trusted by Forward-Thinking Store Owners
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-xl border border-gray-100">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic mb-4">"{t.quote}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{t.author}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section with Form */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Let's Diagnose Your Platform Together
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Interested in our diagnostic tools? Leave your details and we'll reach out with early access opportunities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-blue-600 mr-3" />
                  <a 
                    href="mailto:owusujames38.jo@gmail.com?subject=Let's%20diagnose%20my%20workflow&body=Hi%20James,%0D%0A%0D%0AI'd%20like%20to%20discuss%20a%20software%20solution%20for%20my%20business."
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    owusujames38.jo@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-6 h-6 text-blue-600 mr-3" />
                  <a href="https://m.me/owusujames38.jo" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-blue-600 transition">
                    @owusujames38.jo on Messenger
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">Remote • Worldwide</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <form 
                action="https://formspree.io/f/xeevjvbp" 
                method="POST"
                className="space-y-4"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Tell us about your platform and what you'd like to diagnose..."
                    required
                  />
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center"
                >
                  Send Message
                  <Send className="ml-2 w-4 h-4" />
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                  We'll get back to you within 24 hours. No spam.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

        </>
  );
};

export default HeroSection;
