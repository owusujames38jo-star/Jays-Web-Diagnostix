"use client";

interface FooterProps {}

export default function Footer({}: FooterProps) {
  return (
    <>
{/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-6 sm:py-8 px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4 lg:gap-0">
            <div className="mb-4 lg:mb-0 text-center lg:text-left">
              <span className="text-lg sm:text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Jays Systems
              </span>
              <p className="text-gray-500 text-xs sm:text-sm mt-1">© 2026 All rights reserved.</p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end gap-3 sm:gap-4 md:gap-6">
              <a href="#" className="text-gray-500 hover:text-gray-900 text-xs sm:text-sm transition-colors">Twitter</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-xs sm:text-sm transition-colors">LinkedIn</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-xs sm:text-sm transition-colors">Privacy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-xs sm:text-sm transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>

      </>
       );
}
