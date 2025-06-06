import React from 'react';
import { PenTool, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-blue-200/10 to-cyan-200/10 rounded-full blur-2xl" />
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-cyan-200/10 to-blue-200/10 rounded-full blur-2xl" />
      </div>

      <div className="relative container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Logo/Brand Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-2xl flex items-center justify-center shadow-lg">
                <PenTool className="h-5 w-5 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
              </div>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              My Blog
            </span>
          </div>

          {/* Made with love section */}
          <div className="flex items-center justify-center gap-2 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full border border-blue-200/50 shadow-lg">
            <span className="text-sm font-medium text-slate-600">Made with</span>
            <Heart 
              className="w-4 h-4 text-red-500 animate-pulse" 
              fill="currentColor"
            />
            <span className="text-sm font-medium text-slate-600">by</span>
            <span className="text-sm font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 bg-clip-text text-transparent">
              Hemlo
            </span>
          </div>

          {/* Links and Copyright */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <div className="flex space-x-6 text-sm">
              <a 
                href="#" 
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium hover:underline decoration-blue-600"
              >
                Privacy
              </a>
              <a 
                href="#" 
                className="text-slate-600 hover:text-cyan-600 transition-colors duration-300 font-medium hover:underline decoration-cyan-600"
              >
                Terms
              </a>
              <a 
                href="#" 
                className="text-slate-600 hover:text-blue-600 transition-colors duration-300 font-medium hover:underline decoration-blue-600"
              >
                Contact
              </a>
            </div>
            
            <div className="w-px h-4 bg-gradient-to-b from-blue-200 to-cyan-200 hidden md:block" />
            
            <p className="text-sm text-slate-500 font-medium">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Decorative bottom border */}
          <div className="w-full max-w-xs mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
          </div>
        </div>
      </div>
    </footer>
  );
}