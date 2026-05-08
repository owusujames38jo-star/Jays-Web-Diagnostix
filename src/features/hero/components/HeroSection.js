"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
import React from 'react';
import { 
  Star, 
  Zap, 
  BarChart3, 
  Shield, 
  CheckCircle2, 
  ArrowRight,
  Mail,
  MessageSquare,
  MapPin,
  Phone,
  Send,
  TrendingUp,
  Users,
  Clock
} from 'lucide-react';

export default function HeroSection() {
  return (
    <>
{/* Hero Section */}
      <section id="hero" className="pt-20 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden h-[auto]">
        {/* Background image with overlay */}
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/backroung.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }} />
        
        {/* Sea blue gradient overlay for blending */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/100 via-cyan-500/600 to-blue-100/10" />
        
        {/* Content container */}
        <div className="relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-center items-center min-h-[80vh] overflow-hidden w-full max-w-full">
            <div className=" bg-transparent !important" style={{ backgroundColor: 'transparent !important' }}>
              {/* Orbital ring wrapper with sea blue glass effect */}
              <div className="relative mx-auto max-w-4xl py-12 sm:py-16 lg:py-20 md:translate-y-[-40px] lg:translate-y-[-40px] translate-y-20 sm:translate-y-0 lg:translate-y-0">
                
                {/* Outer orbital ring - sea blue glass */}
                <div className="absolute inset-0 flex items-center justify-center translate-y-[-40px] md:translate-y-[-40px] lg:translate-y-[-40px]" style={{ zIndex: '5' }}>
                  <div 
                    className="w-full h-32 sm:h-40 lg:h-48 rounded-[50%] border-2"
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

                {/* Inner orbital ring - deeper sea blue glass */}
                <div className="absolute lg:w-[100%] w-[90%] inset-0 flex items-center justify-center" style={{ zIndex: '2' }}>
                  <div 
                    className="w-[85%] h-24 sm:h-28 lg:h-36 rounded-[50%] border"
                    style={{ 
                      borderColor: 'rgba(59, 130, 246, 0.25)',
                      boxShadow: '0 0 30px rgba(59, 130, 246, 0.15), inset 0 0 15px rgba(59, 130, 246, 0.08)',
                      transform: 'rotateX(40deg) translateY(-4px)',
                      background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.04) 0%, rgba(59, 130, 246, 0.01) 50%, transparent 100%)',
                      backdropFilter: 'blur(6px)',
                      WebkitBackdropFilter: 'blur(6px)'
                    }} 
                  />
                </div>

                {/* Headline text */}
                <h1 className="translate-y-[-20px] md:translate-y-5 relative z-10 lg:w-[105%] w-[90%] text-center text-3xl md:text-6xl xl:font-bold xl:text-5xl sm:text-3xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4 md:mb-6 break-words" style={{ zIndex: '20' }}>
                  Equipping Businesses with <span className="text-gray-800">Custom software systems</span>
                  <br className="hidden sm:block" />
                </h1>

              </div>
              
              <div className="max-w-3xl mx-auto mb-60 md:translate-y-[-90px] translate-y-0 lg:-translate-y-20">
                <p className="text-center text-sm sm:text-lg text-black mb-8 sm:mb-12">
                  Diagnose the exact friction points in your business or beyond, provides efficient and automation tools such as Inventory systems, dashboards, , internal platforms, 
                  <span className="font-semibold text-black"> and custom business software tailored to your operations.</span>
                </p>
              </div>
              <div className="translate-y-[-30px] md:translate-y-[-80px] justify-center flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="#how-it-works" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition"
                >
                  See How It Works
                </a>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                >
                  Connect With Us
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                
              </div>
              <div className="justify-center mt-8 flex items-center gap-4 md:translate-y-[-90px]">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                  ))}
                </div>
                <p className="text-gray-800 md:tran">
                  <span className="font-bold text-gray-800">47+ store owners</span> already joined the waitlist
                </p>
              </div>
            </div>
            <div className="relative">
            
            </div>
            </div>
          </div>
        </div>
        
        {/* Wavy border below hero section */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-20" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            style={{ fill: 'rgba(34, 211, 238, 0.15)' }}
          >
            <path d="M0,60 C50,140 100,20 150,60 C200,140 250,20 300,60 C350,140 400,20 450,60 C500,140 550,20 600,60 C650,140 700,20 750,60 C800,140 850,20 900,60 C950,140 1000,20 1050,60 C1100,140 1150,20 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Problem Statement */}
      <section id="problem-statement" className="pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ 
        background: 'var(--sea-blue-gradient-transparent) !important',
        backgroundColor: 'transparent !important',
        backgroundImage: 'var(--sea-blue-gradient-transparent) !important',
        borderBottom: 'none !important'
      }}>
        {/* Wavy top outline */}
        <div className="absolute top-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-20" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            style={{ fill: 'rgba(34, 211, 238, 0.15)' }}
          >
            <path d="M0,60 C50,140 100,20 150,60 C200,140 250,20 300,60 C350,140 400,20 450,60 C500,140 550,20 600,60 C650,140 700,20 750,60 C800,140 850,20 900,60 C950,140 1000,20 1050,60 C1100,140 1150,20 1200,60 L1200,0 L0,0 Z"></path>
          </svg>
        </div>
        
      

      {/* Features Grid */}
      <div id="features" className="pt-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ 
        backgroundColor: 'transparent !important',
        backgroundImage: 'var(--sea-blue-gradient-transparent) !important',
        borderTop: '1px solid rgba(34, 211, 238, 0.1) !important',
        borderBottom: 'none !important'
      }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Every inefficient workflow reveals an opportunity for better systems. 
            </h2>
            <p className="text-xl text-gray-600">
              This is why Diagnostix is here to make your workflow more efficient, From friction analytics to automated diagnostics, we help you optimize every touchpoint.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { icon: <BarChart3 className="w-8 h-8 text-blue-600" />, title: "Operational Diagnosis", desc: "Identify where workflows break down, where teams lose time, and where systems create unnecessary friction." },
              { icon: <TrendingUp className="w-8 h-8 text-blue-600" />, title: "Workflow Mapping", desc: "Understand how information, tasks, and decisions move through your business operations." },
              { icon: <Users className="w-8 h-8 text-blue-600" />, title: "System Architecture Planning", desc: "Design scalable software structures tailored to operational needs, automation opportunities, and future growth." },
              { icon: <Clock className="w-8 h-8 text-blue-600" />, title: "Solution Implementation", desc: "From dashboards to internal tools and automation systems, we build and refine software around your workflow." }
            ].map((feature, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition">
                <div className="bg-blue-50 w-14 h-14 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
        
        {/* Wavy bottom outline */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg 
            className="relative block w-full h-20" 
            viewBox="0 0 1200 120" 
            preserveAspectRatio="none"
            style={{ fill: 'rgba(34, 211, 238, 0.15)' }}
          >
            <path d="M0,60 C50,20 100,140 150,60 C200,20 250,140 300,60 C350,20 400,140 450,60 C500,20 550,140 600,60 C650,20 700,140 750,60 C800,20 850,140 900,60 C950,20 1000,140 1050,60 C1100,20 1150,140 1200,60 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Analyze. Diagnose. <span className="text-blue-600">Optimize.</span>
            </h2>
            <p className="text-xl text-gray-600">
              A smarter way to improve user experience—one diagnosed friction point at a time.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { step: "01", title: "Customer Rates Experience", desc: "1-click star rating captures immediate sentiment." },
              { step: "02", title: "Troubleshot and Pinpoint Friction", desc: "Customer taps where friction occurred—checkout, shipping, support, or 'all awesome'." },
              { step: "03", title: "Automated Diagnosis Arrives", desc: "Weekly reports land in your inbox automatically. No manual analysis needed." },
              { step: "04", title: "Fix & Optimize", desc: "Implement changes and watch ratings improve." }
            ].map((item, idx) => (
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
              Diagnostic Tools for Smarter E‑Commerce Decisions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We build the tools that tell you where to focus next. Beyond just reviews—complete operational clarity.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Review Widget Card */}
            {/* <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Review Diagnostic Widget</h3>
                <p className="text-blue-100">The 2-click review widget that tells you which part of your store is broken.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Know if it's checkout, shipping, or support—instantly",
                    "Higher response rates with minimal friction",
                    "Fully automated—set up once, runs forever",
                    "Weekly diagnostic reports delivered to your inbox",
                    "Seamless integration with Shopify, WooCommerce & more"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-6">
                  <a href="#contact" className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700">
                    Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div> */}
            {/* Future Tool Placeholder */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden opacity-75 hover:opacity-100 transition">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Conversion Funnel Auditor</h3>
                <p className="text-purple-100">Coming Q3 2026 • Identify exactly where users drop off in your funnel.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Visual funnel mapping with friction detection",
                    "Session replay integration",
                    "Automated improvement suggestions",
                    "A/B test recommendations"
                  ].map((item, i) => (
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
            {[
              { quote: "Finally, we know *why* customers leave 4 stars instead of 5. This tool changed how we prioritize fixes.", author: "Sarah Chen", role: "Founder, LuxeHome" },
              { quote: "The diagnostic layer is genius. We fixed our checkout friction and saw a 23% lift in conversions.", author: "Marcus Webb", role: "E-commerce Director" },
              { quote: "Simple to install, zero maintenance, and the weekly reports are gold. Highly recommend.", author: "Priya Sharma", role: "Operations Lead" }
            ].map((t, i) => (
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
                  <span className="text-gray-700">owusujames38.jo@gmail.com</span>
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
}