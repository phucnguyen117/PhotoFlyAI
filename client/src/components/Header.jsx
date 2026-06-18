import { useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-sky-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 w-full">
          
          {/* GÓC TRÁI: Logo Website */}
          <div className="flex-1 flex justify-start">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-sky-100 p-2 rounded-lg group-hover:bg-sky-200 transition-colors duration-300">
                {/* Biểu tượng AI / Sparkles */}
                <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-slate-800">
                PhotoFly<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">AI</span>
              </span>
            </Link>
          </div>

          {/* Ở GIỮA: Navigation Links (Desktop) */}
          <nav className="hidden md:flex flex-1 justify-center space-x-10">
            <Link to="/" className="text-slate-600 hover:text-sky-500 font-medium transition duration-300 relative group">
              Trang chủ
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link to="/about" className="text-slate-600 hover:text-sky-500 font-medium transition duration-300 relative group">
              Giới thiệu
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link to="/contact" className="text-slate-600 hover:text-sky-500 font-medium transition duration-300 relative group">
              Liên hệ
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-sky-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </nav>

          {/* GÓC PHẢI: Nút Đăng nhập & Hamburger Menu (Mobile) */}
          <div className="flex-1 flex justify-end items-center gap-4">
            {/* Nút Đăng nhập (ẩn trên màn hình quá nhỏ) */}
            <button className="hidden sm:block bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-md shadow-sky-200 hover:shadow-lg hover:-translate-y-0.5">
              Dùng Miễn Phí
            </button>

            {/* Nút Hamburger cho Mobile */}
            <button 
              className="md:hidden text-slate-600 hover:text-sky-600 focus:outline-none bg-sky-50 p-2 rounded-md"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-72 opacity-100 border-t border-sky-50' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white shadow-inner">
          <Link to="/" className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors">Trang chủ</Link>
          <Link to="/about" className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors">Giới thiệu</Link>
          <Link to="/contact" className="block px-3 py-2.5 rounded-md text-base font-medium text-slate-700 hover:text-sky-600 hover:bg-sky-50 transition-colors">Liên hệ</Link>
          <div className="pt-4 pb-2 sm:hidden">
            <button className="w-full bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white font-semibold py-2.5 px-6 rounded-full transition-colors duration-300 shadow-md">
              Dùng Miễn Phí
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;