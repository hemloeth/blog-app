import React from 'react';
import { PenTool } from 'lucide-react';

// Mock Button component since we don't have access to shadcn/ui
const Button = ({ children, size = "default", className = "", ...props }) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-2.5 text-base",
    lg: "px-8 py-3 text-lg"
  };

  return (
    <button 
      className={`inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Mock Link component
const Link = ({ href, children, className = "", ...props }) => {
  return (
    <a 
      href={href} 
      className={`transition-colors duration-300 ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default function Navbar() {
  return (
    <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          
          {/* Enhanced Logo Section */}
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <PenTool className="h-4 w-4 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full animate-pulse" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent">
              My Blog
            </span>
          </div>

          {/* Enhanced Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#about" 
              className="group relative text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-300"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            
            <Link 
              href="#blogs" 
              className="group relative text-sm font-semibold text-slate-700 hover:text-cyan-600 transition-colors duration-300"
            >
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>
            
            <Link 
              href="#contact" 
              className="group relative text-sm font-semibold text-slate-700 hover:text-blue-600 transition-colors duration-300"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600 transition-all duration-300 group-hover:w-full rounded-full"></span>
            </Link>

            {/* Enhanced Create Post Button */}
            <Link href="/create-post">
              <Button 
                size="sm" 
                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-0.5 border-0"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center gap-2">
                  <span>Create Post</span>
                  <div className="w-1.5 h-1.5 bg-cyan-300 rounded-full animate-pulse" />
                </div>
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button (for responsive design) */}
          <div className="md:hidden">
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg border-0"
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}