import React from 'react';
import { 
  Cpu, 
  Target, 
  Zap, 
  ShieldCheck, 
  CheckCircle, 
  ArrowRight,
  Quote
} from 'lucide-react';

const About = () => {
  const team = [
    {
      name: "Phúc Nguyên",
      quote: "Công nghệ không chỉ giải quyết vấn đề mà còn tạo ra những trải nghiệm tốt hơn.",
      avatar: "PN"
    },
    {
      name: "Văn Hậu",
      quote: "Mỗi dòng code là một bước tiến để biến ý tưởng thành hiện thực.",
      avatar: "VH"
    },
    {
      name: "Quang Bảo",
      quote: "Một giao diện đẹp sẽ giúp người dùng cảm thấy thoải mái và dễ sử dụng hơn.",
      avatar: "QB"
    }
  ];

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-blue-100 selection:text-blue-600">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-20 overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-200/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-sky-200/20 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-6">
            <Cpu className="w-4 h-4" />
            <span>Thế hệ AI mới</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Về Chúng <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">Tôi</span>
          </h1>
          <p className="max-w-3xl mx-auto text-xl text-slate-500 leading-relaxed">
            Website AI 3x4 được phát triển nhằm giúp người dùng tạo ảnh thẻ nhanh chóng, tiện lợi và tiết kiệm thời gian chỉ với vài thao tác đơn giản.
          </p>
        </div>
      </section>

      {/* 2. PROJECT PURPOSE CARD */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[3rem] p-10 md:p-16 border border-slate-100 shadow-2xl shadow-blue-500/5 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Target className="w-40 h-40 text-blue-600" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-200">
                  <Target className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Mục đích của dự án</h2>
              </div>
              <p className="text-lg text-slate-600 leading-loose">
                Chúng tôi xây dựng website này với mục tiêu ứng dụng công nghệ trí tuệ nhân tạo vào việc tạo ảnh thẻ 3x4 tự động. 
                Người dùng chỉ cần tải ảnh lên, hệ thống sẽ hỗ trợ xử lý và tạo ra ảnh phù hợp cho học tập, hồ sơ xin việc 
                và các nhu cầu cá nhân khác mà không cần kiến thức về đồ họa chuyên sâu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEVELOPMENT TEAM */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-16">Nhóm phát triển</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div key={index} className="group bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden">
                {/* Decorative element */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-700" />
                
                <div className="relative z-10 text-center">
                  <div className="w-24 h-24 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-3xl mx-auto mb-6 flex items-center justify-center text-white text-3xl font-black shadow-xl shadow-blue-200 group-hover:rotate-6 transition-transform">
                    {member.avatar}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  
                  <div className="relative pt-6 border-t border-slate-50">
                    <Quote className="w-5 h-5 text-blue-100 absolute top-2 left-1/2 -translate-x-1/2" />
                    <p className="text-slate-500 italic leading-relaxed px-4">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. COMMITMENT CARDS */}
      <section className="py-20 bg-blue-600 relative overflow-hidden">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-colors">
              <Zap className="w-10 h-10 text-sky-300 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Xử lý nhanh</h4>
              <p className="text-blue-100 text-sm">Công nghệ AI tối ưu giúp hoàn thiện ảnh thẻ chỉ trong tích tắc.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-colors">
              <ShieldCheck className="w-10 h-10 text-sky-300 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Bảo mật hình ảnh</h4>
              <p className="text-blue-100 text-sm">Chúng tôi cam kết bảo vệ dữ liệu và hình ảnh cá nhân của bạn.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-3xl hover:bg-white/15 transition-colors">
              <CheckCircle className="w-10 h-10 text-sky-300 mb-4" />
              <h4 className="text-xl font-bold text-white mb-2">Chất lượng cao</h4>
              <p className="text-blue-100 text-sm">Đảm bảo ảnh thẻ sắc nét, đúng chuẩn tỷ lệ cho mọi hồ sơ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-slate-900 mb-6">Sẵn sàng tạo ảnh thẻ 3x4?</h2>
          <p className="text-lg text-slate-500 mb-10 leading-relaxed">
            Trải nghiệm công nghệ AI giúp tạo ảnh thẻ chuyên nghiệp chỉ trong vài giây. 
            Nhanh chóng, chính xác và hoàn toàn miễn phí.
          </p>
          <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-extrabold py-4 px-10 rounded-full shadow-xl shadow-blue-200 transition-all transform hover:scale-105 group active:scale-95">
            Bắt đầu ngay
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default About;