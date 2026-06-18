import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-sky-100 text-slate-600 font-sans">
      {/* LỚP TRÊN: Nội dung chính của Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Cột 1: Giới thiệu ngắn & Mạng xã hội */}
          <div className="space-y-5">
            <a href="/" className="flex items-center gap-2 group w-max">
              <div className="bg-sky-100 p-2 rounded-lg group-hover:bg-sky-200 transition-colors duration-300">
                <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-800">
                PhotoFly<span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">AI</span>
              </span>
            </a>
            <p className="text-sm leading-relaxed text-slate-500">
              Nền tảng công nghệ tối ưu và nâng cao chất lượng hình ảnh toàn diện bằng trí tuệ nhân tạo, mang lại trải nghiệm sáng tạo không giới hạn.
            </p>
            {/* Các nút mạng xã hội */}
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="w-9 w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-sky-50 hover:text-sky-500 transition-all duration-300 transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
              <a href="#" className="w-9 w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-sky-50 hover:text-sky-500 transition-all duration-300 transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.315 2c2.43 0 2.784.01 3.71.054 1.14.051 1.918.23 2.38.411a4.935 4.935 0 011.815 1.18 4.935 4.935 0 011.18 1.815c.18.463.36 1.24.411 2.381.044.925.054 1.28.054 3.71s-.01 2.784-.054 3.71c-.051 1.14-.23 1.918-.411 2.38a4.833 4.833 0 01-2.995 2.995c-.463.18-1.24.36-2.381.411-.925.044-1.28.054-3.71.054s-2.784-.01-3.71-.054c-1.14-.051-1.918-.23-2.38-.411a4.935 4.935 0 01-1.815-1.18 4.914 4.914 0 01-1.18-1.815c-.18-.463-.36-1.24-.411-2.381C2.01 14.82 2 14.465 2 12s.01-2.784.054-3.71c.051-1.14.23-1.918.411-2.38A4.839 4.839 0 015.46 3.005c.463-.18 1.24-.36 2.381-.411.925-.044 1.28-.054 3.71-.054zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="w-9 w-9 h-9 flex items-center justify-center rounded-full bg-slate-50 text-slate-500 hover:bg-sky-50 hover:text-sky-500 transition-all duration-300 transform hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
            </div>
          </div>

          {/* Cột 2: Đường dẫn nhanh */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 tracking-wider uppercase mb-5">Khám phá</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="/" className="hover:text-sky-500 transition-colors duration-200 block">Trang chủ</a>
              </li>
              <li>
                <a href="/gioi-thieu" className="hover:text-sky-500 transition-colors duration-200 block">Giới thiệu</a>
              </li>
              <li>
                <a href="/tinh-nang" className="hover:text-sky-500 transition-colors duration-200 block">Tính năng nổi bật</a>
              </li>
              <li>
                <a href="/lien-he" className="hover:text-sky-500 transition-colors duration-200 block">Liên hệ</a>
              </li>
            </ul>
          </div>

          {/* Cột 3: Tính năng công nghệ */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 tracking-wider uppercase mb-5">Dịch vụ AI</h3>
            <ul className="space-y-3.5 text-sm">
              <li><a href="#" className="hover:text-sky-500 transition-colors duration-200 block">Nâng cấp độ phân giải</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors duration-200 block">Xóa phông nền tự động</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors duration-200 block">Phục chế ảnh cũ chuyên sâu</a></li>
              <li><a href="#" className="hover:text-sky-500 transition-colors duration-200 block">Bộ lọc màu điện ảnh</a></li>
            </ul>
          </div>

          {/* Cột 4: Thông tin liên hệ cơ bản */}
          <div>
            <h3 className="text-sm font-bold text-slate-800 tracking-wider uppercase mb-5">Thông tin liên hệ</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sky-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                <span>Thành phố Huế, Thừa Thiên Huế, Việt Nam</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <a href="mailto:support@photoflyai.com" className="hover:text-sky-500 transition-colors">support@photoflyai.com</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+84 (0) 234 567 890</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* LỚP DƯỚI: Bản quyền và dòng chữ thiết kế */}
      <div className="border-t border-sky-50 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} PhotoFlyAI. Tất cả các quyền được bảo lưu.
          </div>
          <div className="flex items-center gap-1 bg-white px-3 py-1.5 rounded-full border border-sky-100/60 shadow-sm text-slate-500">
            <span>Thiết kế & Lập trình bởi</span>
            <span className="font-semibold text-sky-600 hover:text-blue-600 transition-colors duration-200 cursor-pointer">Nguyên</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;