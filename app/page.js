"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';
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


export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Jays Web Diagnostix
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#solutions" className="text-gray-600 hover:text-gray-900">Solutions</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-gray-900">How it Works</a>
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                The Diagnostic Layer Your Platform Is Missing
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Ratings Tell You <span className="text-blue-600">What Happened.</span>
                <br />
                We Tell You <span className="text-blue-600">Where and How to Fix It.</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Pinpoint exactly where your store is losing customers—checkout, shipping, support, or beyond. 
                Stop guessing. Start knowing exactly where to focus your team's attention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                >
                  Get Early Access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a 
                  href="#how-it-works" 
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-gray-400 transition"
                >
                  See How It Works
                </a>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white" />
                  ))}
                </div>
                <p className="text-gray-600">
                  <span className="font-bold text-gray-900">47+ store owners</span> already joined the waitlist
                </p>
              </div>
            </div>
            <div className="relative">
              <Swiper
              modules={[Autoplay, EffectFade]}
              effect="fade"
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              loop={true}
              speed={600}
              className="bg-white rounded-2xl shadow-2xl border border-gray-100"
            >
                {/* Slide 1: Static Review Card */}
                <SwiperSlide data-swiper-autoplay="6000">
                  <div className="p-6">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <div className="flex items-center justify-center mb-6">
                        <div className="flex gap-1">
                          {[1,2,3,4,5].map((star) => (
                            <Star key={star} className="w-8 h-20 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <p className="font-medium text-gray-900 mb-2">What part of your experience could we improve?</p>
                          <div className="space-y-2">
                            {['Checkout process', 'Shipping & delivery', 'Customer support', 'Website navigation', 'All of it was awesome ✨'].map((item) => (
                              <label key={item} className="flex items-center p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100">
                                <input type="radio" name="issue" className="mr-3" />
                                <span>{item}</span>
                              </label>
                            ))}
                          </div>
                        </div>
                        <div className="bg-white p-4 rounded-lg border border-gray-200">
                          <textarea 
                            placeholder="Any details you'd like to add? (Optional)" 
                            className="w-full p-3 border border-gray-200 rounded-lg resize-none"
                            rows={2}
                          />
                        </div>
                        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                          Submit Feedback
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>

                {/* Slide 2: Animated GIF Demo */}
                <SwiperSlide data-swiper-autoplay="25000">

                  <div className="p-6">
                    <div className="bg-gray-50 rounded-xl p-6 flex items-center justify-center">
                      <img 
                        src="/demo.gif" 
                        alt="Diagnostix widget demo showing 3-star rating and friction point selection"
                        className="w-full h-165 rounded-lg"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
              
              {/* Keep the waitlist link below the swiper */}
              <div className="mt-6">
                <a 
                  href="https://tally.so/r/Zjzek5" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700"
                >
                  Join Waitlist <ArrowRight className="ml-2 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Stop Guessing. <span className="text-blue-600">Start Knowing.</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional review platforms tell you *what* rating you got. We analyze the *why* behind every interaction, 
            diagnosing friction points across your entire user journey.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Every Friction Point Leaves a Signal. <span className="text-blue-600">We Help You Read It.</span>
            </h2>
            <p className="text-xl text-gray-600">
              Diagnostic tools that transform vague feedback into actionable operational clarity.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <BarChart3 className="w-8 h-8 text-blue-600" />, title: "Friction Analytics", desc: "Know if it's checkout, shipping, or support—instantly." },
              { icon: <TrendingUp className="w-8 h-8 text-blue-600" />, title: "Higher Response Rates", desc: "2-click interface means customers actually complete the feedback." },
              { icon: <Users className="w-8 h-8 text-blue-600" />, title: "Micro-Decision Insights", desc: "See exactly where users hesitate or drop off." },
              { icon: <Clock className="w-8 h-8 text-blue-600" />, title: "Weekly Diagnosis", desc: "Automated reports pinpoint what to fix first." }
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
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Customer Rates Experience", desc: "1-click star rating captures immediate sentiment." },
              { step: "02", title: "Pinpoint Friction", desc: "Customer taps where friction occurred—checkout, shipping, support, or 'all awesome'." },
              { step: "03", title: "Receive Weekly Diagnosis", desc: "You get a report of exactly where to focus improvements." },
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
          <div className="grid md:grid-cols-2 gap-8">
            {/* Review Widget Card */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Review Diagnostic Widget</h3>
                <p className="text-blue-100">The 2-click review widget that tells you which part of your store is broken.</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {[
                    "Know if it's checkout, shipping, or support—instantly",
                    "Higher response rates with minimal friction",
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
            </div>
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
          <div className="grid md:grid-cols-3 gap-8">
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
          <div className="grid lg:grid-cols-2 gap-12 items-start">
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

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Diagnostix
              </span>
              <p className="text-gray-500 text-sm mt-1">© 2026 All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-gray-900">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}