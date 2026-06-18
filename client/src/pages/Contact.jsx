import { useState } from 'react';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  Send, 
  MessageSquare, 
  ChevronDown, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const Contact = () => {
  // State cho Accordion FAQ
  const [openFaq, setOpenFaq] = useState(null);

  // State cho Form
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn! Yêu cầu đã được gửi đi.');
    console.log(formData);
  };

  const faqs = [
    {
      q: "AI tạo ảnh 3x4 mất bao lâu?",
      a: "Hệ thống AI của chúng tôi xử lý cực nhanh, chỉ mất từ 3-5 giây để nhận diện khuôn mặt, tách nền và căn chỉnh chuẩn tỷ lệ 3x4."
    },
    {
      q: "Ảnh có đúng tiêu chuẩn hồ sơ không?",
      a: "Hoàn toàn đúng. AI được huấn luyện theo tiêu chuẩn ảnh thẻ quốc tế và Việt Nam, đảm bảo độ phân giải cao và vị trí khuôn mặt chính xác."
    },
    {
      q: "Tôi có thể tải ảnh chất lượng cao không?",
      a: "Có, bạn sẽ nhận được định dạng ảnh JPG/PNG chất lượng cao nhất (300 DPI), sẵn sàng để in ấn hoặc nộp hồ sơ trực tuyến."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-blue-100 selection:text-blue-600">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-blue-50/80 to-transparent -z-10" />
        <div className="absolute top-20 right-10 w-64 h-64 bg-blue-200/20 blur-[100px] rounded-full -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-blue-100 shadow-sm mb-6 animate-fade-in">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-slate-600">Hỗ trợ khách hàng 24/7</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight">
            Liên hệ với <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-500">chúng tôi</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
            Chúng tôi luôn sẵn sàng hỗ trợ bạn trong quá trình sử dụng AI tạo ảnh thẻ 3x4. Đội ngũ kỹ thuật sẽ phản hồi bạn trong vòng 2 giờ làm việc.
          </p>
        </div>
      </section>

      {/* 2. CONTACT INFO CARDS */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <Mail className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Email hỗ trợ</h3>
              <p className="text-blue-600 font-medium">support@photoai.vn</p>
            </div>

            <div className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <PhoneCall className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Hotline</h3>
              <p className="text-blue-600 font-medium">0123 456 789</p>
            </div>

            <div className="group bg-white p-8 rounded-[2rem] border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-2 text-center">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                <MapPin className="w-6 h-6 text-blue-600 group-hover:text-white" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Văn phòng</h3>
              <p className="text-slate-500">123 Nguyễn Văn Linh, Đà Nẵng</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FORM & FAQ SECTION */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            
            {/* FAQ Area */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-blue-600 rounded-full" />
                <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Giải đáp thắc mắc</span>
              </div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-8">Những câu hỏi thường gặp</h2>
              
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                    <button 
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-slate-50 transition-colors"
                    >
                      <span className="font-bold text-slate-800">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <p className="text-slate-500 leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 p-6 rounded-3xl bg-blue-600 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-20">
                  <MessageSquare className="w-20 h-20" />
                </div>
                <h4 className="text-xl font-bold mb-2 relative z-10">Bạn cần tư vấn riêng?</h4>
                <p className="text-blue-100 mb-0 relative z-10">Đừng ngần ngại gửi tin nhắn, chúng tôi sẽ hỗ trợ giải quyết vấn đề của bạn ngay lập tức.</p>
              </div>
            </div>

            {/* Form Area */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl shadow-blue-900/5 border border-slate-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Họ và tên</label>
                    <input 
                      type="text" 
                      required
                      placeholder="Nguyễn Văn A"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none ring-2 ring-transparent focus:ring-blue-500 focus:bg-white transition-all outline-none"
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-700 ml-1">Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="vidu@email.com"
                      className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none ring-2 ring-transparent focus:ring-blue-500 focus:bg-white transition-all outline-none"
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Chủ đề</label>
                  <input 
                    type="text" 
                    required
                    placeholder="Tôi cần hỗ trợ về..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none ring-2 ring-transparent focus:ring-blue-500 focus:bg-white transition-all outline-none"
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700 ml-1">Nội dung tin nhắn</label>
                  <textarea 
                    rows="4" 
                    required
                    placeholder="Nhập nội dung bạn muốn gửi cho chúng tôi..."
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border-none ring-2 ring-transparent focus:ring-blue-500 focus:bg-white transition-all outline-none resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-600/20 transition-all transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 group"
                >
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  Gửi liên hệ ngay
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CTA SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="bg-gradient-to-r from-blue-600 to-sky-500 rounded-[3rem] p-12 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-500/20">
          {/* Decorative shapes */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-400/20 blur-3xl translate-x-1/4 translate-y-1/4" />

          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 relative z-10">Tạo ảnh thẻ 3x4 chuyên nghiệp chỉ trong vài giây</h2>
          <p className="text-blue-100 mb-10 text-lg max-w-xl mx-auto relative z-10">Hãy bắt đầu ngay hôm nay để trải nghiệm sức mạnh của AI trong việc tạo ra những bức ảnh thẻ hoàn hảo.</p>
          
          <button className="bg-white text-blue-600 font-extrabold py-4 px-10 rounded-full shadow-xl hover:shadow-2xl hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center gap-2 mx-auto relative z-10 group">
            Tạo ảnh ngay
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
};

export default Contact;