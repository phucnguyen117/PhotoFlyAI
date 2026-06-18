import { useState } from 'react';
import { 
  Upload, PlayCircle, Users, CheckCircle2, Zap, Image as ImageIcon, 
  Wand2, Crop, Palette, Download, Star, ChevronDown, Check, ArrowRight
} from 'lucide-react';
import beforeImg from "../assets/user.jpg";
import afterImg from "../assets/user2.jpg";

// --- DATA MẪU --- //
const stats = [
  { label: 'Ảnh đã tạo', value: '2.5M+', icon: ImageIcon },
  { label: 'Người dùng', value: '150K+', icon: Users },
  { label: 'Tỷ lệ hài lòng', value: '99.8%', icon: Star },
  { label: 'Tốc độ xử lý', value: '< 3s', icon: Zap },
];

const steps = [
  { title: 'Tải ảnh lên', desc: 'Chọn một bức ảnh chân dung hoặc selfie rõ nét của bạn.', icon: Upload },
  { title: 'AI Nhận diện', desc: 'Hệ thống tự động quét và phân tích khuôn mặt chuẩn xác.', icon: Wand2 },
  { title: 'Xử lý & Cắt nền', desc: 'Tự động xóa nền, căn chỉnh tỷ lệ chuẩn 3x4 hoặc 4x6.', icon: Crop },
  { title: 'Tải ảnh về', desc: 'Lưu ảnh chất lượng cao với phông nền xanh hoặc trắng.', icon: Download },
];

const features = [
  { title: 'Căn chỉnh khuôn mặt', desc: 'AI tự động nhận diện và đặt khuôn mặt vào đúng tỷ lệ chuẩn của ảnh thẻ.', icon: Users },
  { title: 'Xóa nền thông minh', desc: 'Bóc tách tóc và chi tiết phức tạp với độ chính xác tuyệt đối.', icon: Wand2 },
  { title: 'Thay nền tùy chọn', desc: 'Dễ dàng chuyển đổi giữa phông nền trắng hoặc xanh nước biển.', icon: Palette },
  { title: 'Xuất ảnh sắc nét', desc: 'Nâng cấp độ phân giải, đảm bảo ảnh in ra không bị vỡ hạt.', icon: ImageIcon },
  { title: 'Đa dạng kích thước', desc: 'Hỗ trợ chuẩn 3x4, 4x6, 2x2 inch phù hợp với mọi loại giấy tờ.', icon: Crop },
  { title: 'Tốc độ siêu tốc', desc: 'Hoàn thiện toàn bộ quy trình chỉ trong chưa tới 3 giây.', icon: Zap },
];

const pricing = [
  { name: 'Miễn phí', price: '0đ', desc: 'Trải nghiệm cơ bản cho người dùng mới', features: ['Tạo 3 ảnh/ngày', 'Có watermark', 'Tốc độ tiêu chuẩn', 'Hỗ trợ nền trắng'], isPopular: false },
  { name: 'Premium', price: '49.000đ', period: '/tháng', desc: 'Lựa chọn hoàn hảo cho cá nhân', features: ['Tạo ảnh không giới hạn', 'Không watermark', 'Tốc độ siêu tốc', 'Đầy đủ phông nền', 'Nâng cấp độ nét AI'], isPopular: true },
  { name: 'Doanh nghiệp', price: '199.000đ', period: '/tháng', desc: 'Dành cho studio & tiệm ảnh', features: ['Mọi tính năng Premium', 'API tích hợp', 'Xử lý hàng loạt (Batch)', 'Hỗ trợ kỹ thuật 24/7'], isPopular: false },
];

const faqs = [
  { q: 'Hệ thống AI xử lý ảnh như thế nào?', a: 'AI của chúng tôi được huấn luyện trên hàng triệu bức ảnh thẻ để tự động nhận diện khuôn mặt, tách nền và căn chỉnh tỷ lệ theo đúng tiêu chuẩn ICAO (Tổ chức Hàng không Dân dụng Quốc tế).' },
  { q: 'Ảnh tải lên có được bảo mật không?', a: 'Tuyệt đối an toàn. Chúng tôi tự động xóa ảnh gốc và ảnh đã xử lý khỏi máy chủ sau 24 giờ kể từ khi bạn hoàn tất.' },
  { q: 'Tôi có thể dùng ảnh selfie từ điện thoại không?', a: 'Hoàn toàn được. Chỉ cần bạn chụp trong điều kiện đủ sáng, nhìn thẳng và không đeo kính râm, AI sẽ làm phần việc còn lại.' },
  { q: 'Có hỗ trợ các kích thước khác ngoài 3x4 không?', a: 'Có, hệ thống hỗ trợ các chuẩn phổ biến như 4x6, 2x2 inch (chuẩn visa Mỹ) và nhiều kích thước tùy chỉnh khác.' },
  { q: 'Tôi có được hoàn tiền nếu không hài lòng?', a: 'Với gói Premium, chúng tôi cam kết hoàn tiền trong vòng 7 ngày nếu chất lượng ảnh không đáp ứng được yêu cầu của bạn.' },
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-sky-100 rounded-2xl mb-4 bg-white overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <button className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
        <span className="font-semibold text-slate-800 text-lg">{question}</span>
        <ChevronDown className={`w-5 h-5 text-sky-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-5 text-slate-600">{answer}</p>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <div className="font-sans text-slate-800 bg-slate-50 min-h-screen selection:bg-sky-200 selection:text-sky-900">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden bg-white">
        {/* Decorative Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-sky-200/40 blur-[120px]" />
          <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-100/50 blur-[100px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-50 text-sky-600 font-medium text-sm mb-6 border border-sky-100 shadow-sm">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
                </span>
                Công nghệ AI phiên bản 2.0 mới nhất
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                Tạo ảnh thẻ 3x4 chuẩn chỉ trong <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">vài giây</span> bằng AI
              </h1>
              <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Không cần ra studio, không cần biết Photoshop. Tải lên ảnh selfie của bạn và để AI của chúng tôi tự động xóa nền, căn chỉnh và xuất ảnh chuẩn quốc tế ngay lập tức.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-full transition-all shadow-lg shadow-sky-500/30 hover:shadow-sky-500/50 hover:-translate-y-1">
                  <Upload className="w-5 h-5" />
                  Tải ảnh lên ngay
                </button>
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-semibold py-4 px-8 rounded-full transition-all border border-slate-200 shadow-sm hover:shadow-md hover:-translate-y-1">
                  <PlayCircle className="w-5 h-5 text-sky-500" />
                  Xem Demo
                </button>
              </div>
            </div>

            {/* Right Mockup */}
            <div className="flex-1 w-full relative">
              <div className="relative w-full max-w-md mx-auto aspect-[4/5] bg-white rounded-3xl p-4 shadow-2xl shadow-sky-900/10 border border-slate-100">
                <div className="absolute inset-0 bg-gradient-to-tr from-sky-100 to-white rounded-3xl opacity-50"></div>
                <div className="relative h-full w-full rounded-2xl overflow-hidden group">
                  {/* Before (Mô phỏng bằng màu xám nhạt và icon) */}
                <img
                  src={beforeImg}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                  {/* After (Hover state) - Nền xanh ảnh thẻ */}
                <img
                  src={afterImg}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                />

                  {/* Quẹt ngang scan line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-white shadow-[0_0_15px_#fff] opacity-0 group-hover:opacity-100 group-hover:animate-[scan_2s_ease-in-out_infinite]"></div>
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl shadow-sky-900/10 border border-sky-50 flex items-center gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-800">Hoàn tất!</p>
                    <p className="text-xs text-slate-500">Xử lý trong 1.2s</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. STATS SECTION */}
      <section className="bg-sky-600 py-16 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-sky-500/50">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center px-4">
                <stat.icon className="w-8 h-8 mx-auto text-sky-200 mb-4" />
                <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                <div className="text-sky-100 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quy trình hoạt động</h2>
            <p className="text-slate-600">Sở hữu bức ảnh thẻ chuẩn mực chưa bao giờ đơn giản đến thế. Chỉ với 4 bước tự động hóa hoàn toàn.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-sky-100 transition-all duration-300 group">
                <div className="w-14 h-14 bg-sky-50 text-sky-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3 flex items-center gap-2">
                  <span className="text-sky-300 text-sm font-black">0{idx + 1}</span> {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">{step.desc}</p>
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-6 text-slate-300">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Tính năng nổi bật</h2>
            <p className="text-slate-600">Được trang bị các mô hình AI tiên tiến nhất để mang lại chất lượng ảnh hoàn hảo không thua kém studio chuyên nghiệp.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {features.map((feat, idx) => (
              <div key={idx} className="flex gap-5 group">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                  <feat.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{feat.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{feat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. DEMO RESULTS */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Kết quả thực tế</h2>
            <p className="text-slate-600">Di chuột vào ảnh để xem sự khác biệt trước và sau khi AI xử lý.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative aspect-[3/4] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl hover:shadow-sky-200 transition-all duration-500">
                {/* Lớp nền mô phỏng ảnh sau khi xử lý */}
                <img
                  src={afterImg}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-sky-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  Sau (3x4)
                </div>

                {/* Lớp phủ mô phỏng ảnh gốc (sẽ mờ đi khi hover) */}
                <div className="absolute inset-0 bg-slate-300 flex items-center justify-center transition-opacity duration-500 group-hover:opacity-0">
                <img
                  src={beforeImg}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />                  
                  <div className="absolute top-4 left-4 bg-slate-800/70 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Trước (Gốc)
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. PRICING */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Bảng giá linh hoạt</h2>
            <p className="text-slate-600">Chọn gói dịch vụ phù hợp với nhu cầu của bạn. Không phí ẩn, hủy bất cứ lúc nào.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            {pricing.map((plan, idx) => (
              <div key={idx} className={`relative bg-white rounded-3xl p-8 border ${plan.isPopular ? 'border-sky-500 shadow-2xl shadow-sky-200 scale-100 md:scale-105 z-10' : 'border-slate-200 shadow-sm'} transition-all duration-300`}>
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                    Phổ biến nhất
                  </div>
                )}
                <h3 className="text-xl font-bold text-slate-800 mb-2">{plan.name}</h3>
                <p className="text-slate-500 text-sm mb-6 min-h-[40px]">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-slate-900">{plan.price}</span>
                  {plan.period && <span className="text-slate-500 font-medium">{plan.period}</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-3 text-slate-600 text-sm">
                      <Check className={`w-5 h-5 ${plan.isPopular ? 'text-sky-500' : 'text-slate-400'}`} />
                      {feat}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 ${plan.isPopular ? 'bg-sky-500 hover:bg-sky-600 text-white shadow-md hover:shadow-lg' : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200'}`}>
                  Chọn gói {plan.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TESTIMONIALS */}
      <section className="py-24 bg-sky-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Khách hàng nói gì?</h2>
            <p className="text-slate-600">Hàng ngàn người đã trải nghiệm và hài lòng với chất lượng từ PhotoFlyAI.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Minh Nhật', role: 'Sinh viên', review: 'Cứu cánh thực sự! Mình cần ảnh gấp để nộp hồ sơ xin việc mà không có thời gian ra tiệm. Chỉ 2 phút là có ảnh nền xanh chuẩn xịn để in.' },
              { name: 'Hương Lan', role: 'Nhân viên HR', review: 'Chất lượng bóc nền tóc cực kỳ ấn tượng, không bị lẹm hay ảo. Màu sắc cân chỉnh tươi tắn, mình đã mua gói Premium để dùng cho cả phòng ban.' },
              { name: 'Thanh Tùng', role: 'Freelancer', review: 'Trải nghiệm mượt mà, thao tác đơn giản. Ảnh xuất ra cực nét, in ra giấy ảnh chuyên dụng nhìn y hệt chụp tại studio giá 100k.' }
            ].map((testi, idx) => (
              <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
                <div className="flex text-yellow-400 mb-6">
                  {[1, 2, 3, 4, 5].map(star => <Star key={star} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="text-slate-600 mb-8 italic line-clamp-4">"{testi.review}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-sky-200 rounded-full flex items-center justify-center text-sky-700 font-bold text-lg">
                    {testi.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-800">{testi.name}</h4>
                    <p className="text-sm text-slate-500">{testi.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Câu hỏi thường gặp</h2>
            <p className="text-slate-600">Những thắc mắc phổ biến nhất của người dùng về PhotoFlyAI.</p>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* 9. CTA CUỐI TRANG */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-600 to-blue-700"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-sky-400/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Sẵn sàng để tạo ảnh thẻ của bạn?</h2>
          <p className="text-sky-100 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Trải nghiệm sức mạnh của AI. Miễn phí cho người dùng mới. Không yêu cầu thẻ tín dụng.
          </p>
          <button className="bg-white text-sky-600 hover:bg-sky-50 font-bold text-lg py-4 px-10 rounded-full transition-all duration-300 shadow-xl shadow-sky-900/20 hover:-translate-y-1 hover:shadow-2xl">
            Tạo ảnh 3x4 ngay
          </button>
        </div>
      </section>
      
    </div>
  );
}