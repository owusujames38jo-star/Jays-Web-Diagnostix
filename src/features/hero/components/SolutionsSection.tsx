import { ArrowRight, CheckCircle2, Package } from 'lucide-react';

export default function SolutionsSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background gradient to separate from the previous dark section */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-3">
            Ready‑Made Solutions
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Tools already solving real problems
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These aren’t templates — they’re production‑grade systems built with the same diagnostic approach I use for every client.
          </p>
        </div>

        {/* Single featured tool card – add more in the future by duplicating this div */}
        <div className="max-w-4xl mx-auto">
          <div className="group relative bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-md overflow-hidden hover:border-blue-500/40 transition-all duration-500 shadow-2xl hover:shadow-blue-500/10">
            
            {/* Subtle top highlight line */}
            <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

            <div className="grid md:grid-cols-5 gap-0">
              {/* Left: Icon / visual */}
              <div className="md:col-span-2 flex items-center justify-center p-8 bg-gradient-to-br from-blue-600/10 to-indigo-600/10">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-500">
                  <Package className="w-12 h-12 text-white" />
                </div>
              </div>

              {/* Right: Content */}
              <div className="md:col-span-3 p-8 md:p-10">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">Jays IMS</h3>
                  <span className="px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 rounded-full border border-blue-400/20">
                    Live Product
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  A complete inventory management system for businesses that need to track stock, 
                  manage orders, and monitor products in real time. Built with the same rigorous 
                  diagnosis‑first approach I bring to every client engagement.
                </p>

                <ul className="space-y-2 mb-8">
                  {[
                    'Real‑time inventory & order tracking',
                    'Multi‑product dashboard with analytics',
                    'Role‑based access for teams',
                    'Full activity log & audit trail',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center text-gray-400">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://ims.jayssystems.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 group/btn"
                >
                  Try Jays IMS
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Future tool placeholder */}
          <p className="text-center text-sm text-gray-400 mt-8">
            More tools launching soon — each one is a direct reflection of the custom systems I build for clients.
          </p>
        </div>
      </div>
    </section>
  );
}