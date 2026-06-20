import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  Image as ImageIcon, 
  X, 
  CheckCircle2, 
  Wand2, 
  Download, 
  RefreshCw, 
  Share2, 
  Camera, 
  Sun, 
  UserCheck, 
  ShieldX, 
  ChevronDown,
  FileImage,
  Loader2
} from 'lucide-react';

// --- DATA MẪU ---
const guidelines = [
  { icon: UserCheck, text: "Khuôn mặt rõ ràng", desc: "Nhìn thẳng, không rủ tóc" },
  { icon: Sun, text: "Ánh sáng đầy đủ", desc: "Không bị đổ bóng trên mặt" },
  { icon: Camera, text: "Góc chụp thẳng", desc: "Để máy ngang tầm mắt" },
  { icon: ShieldX, text: "Không che mặt", desc: "Tháo kính râm, khẩu trang" }
];

const faqs = [
  { q: "AI tạo ảnh mất bao lâu?", a: "Hệ thống AI của chúng tôi xử lý cực nhanh, thường chỉ mất từ 2 đến 5 giây để xóa nền, tự động căn chỉnh tỷ lệ và trả về kết quả cuối cùng." },
  { q: "Ảnh có đạt tiêu chuẩn hồ sơ không?", a: "Có. AI được huấn luyện để xuất ra ảnh chuẩn ICAO, đảm bảo kích thước khuôn mặt chiếm 70-80% khung hình, phù hợp làm CV, Passport, Visa." },
  { q: "Tôi có thể tải ảnh HD không?", a: "Tất nhiên. Ở gói miễn phí bạn có thể tải độ phân giải tiêu chuẩn, và với gói Premium, ảnh sẽ được nội suy độ phân giải (upscale) sắc nét để mang đi in ấn." }
];

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="group border border-slate-100 rounded-2xl bg-white overflow-hidden transition-all duration-300 hover:shadow-md mb-4">
      <button 
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-slate-800">{question}</span>
        <ChevronDown className={`w-5 h-5 text-sky-500 transition-transform duration-500 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="px-6 pb-6 text-slate-500 text-sm leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default function UploadPage() {
  // States cho luồng xử lý
  const [step, setStep] = useState('upload'); // 'upload' | 'processing' | 'result'
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [progress, setProgress] = useState(0);
  
  // States cho cấu hình
  const [bgType, setBgType] = useState('blue'); // 'blue', 'white', 'red'
  const [sizeType, setSizeType] = useState('3x4'); // '3x4', '4x6'
  const [clothesType, setClothesType] = useState('keep'); // 'keep', 'shirt', 'suit'

  const fileInputRef = useRef(null);

  // Xử lý kéo thả và chọn file
  const handleFileSelect = (e) => {
    const file = e.target.files[0];
    if (file && (file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/jpg')) {
      if (file.size > 10 * 1024 * 1024) {
        alert("Vui lòng chọn file dưới 10MB");
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  // Giả lập AI xử lý
  const handleGenerate = () => {
    if (!selectedFile) return;
    setStep('processing');
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setStep('result'), 400); // Đợi bar đầy rồi chuyển trang
          return 100;
        }
        return prev + 2; // Tăng dần progress
      });
    }, 50);
  };

  const handleReset = () => {
    setStep('upload');
    handleRemoveFile();
    setProgress(0);
  };

  // Màu nền thực tế cho thẻ cấu hình và kết quả
  const bgColors = {
    'blue': 'bg-[#0EA5E9]',
    'white': 'bg-white border-slate-200',
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-sky-200 text-slate-800 pb-24">
      
      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-12 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-700 text-sm font-bold mb-6">
            <Wand2 className="w-4 h-4" />
            Trải nghiệm sức mạnh PhotoFlyAI
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 mb-6">
            Tạo ảnh thẻ 3x4 bằng AI chỉ trong <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">vài giây</span>
          </h1>
          <p className="text-lg text-slate-500">
            Tải ảnh chân dung của bạn lên và để AI tự động xóa nền, căn chỉnh khuôn mặt và xuất thành ảnh thẻ chuyên nghiệp.
          </p>
        </div>
      </section>

      {/* KHU VỰC CHÍNH */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* VIEW: UPLOAD & THIẾT LẬP */}
        {step === 'upload' && (
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-xl shadow-sky-900/5 border border-slate-100 mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
              
              {/* Cột trái: Dropzone */}
              <div className="lg:col-span-3">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <span className="bg-sky-100 text-sky-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">1</span> 
                  Tải ảnh chân dung lên
                </h2>
                
                <input 
                  type="file" 
                  ref={fileInputRef} 
                  className="hidden" 
                  accept=".jpg, .jpeg, .png" 
                  onChange={handleFileSelect}
                />

                {!selectedFile ? (
                  <div 
                    onClick={() => fileInputRef.current.click()}
                    className="border-2 border-dashed border-slate-300 rounded-[2rem] bg-slate-50 hover:bg-sky-50 hover:border-sky-400 transition-all duration-300 h-80 flex flex-col items-center justify-center cursor-pointer group"
                  >
                    <div className="w-20 h-20 bg-white rounded-full shadow-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <UploadCloud className="w-10 h-10 text-sky-500" />
                    </div>
                    <p className="font-bold text-slate-700 text-lg">Kéo thả ảnh vào đây</p>
                    <p className="text-slate-400 text-sm mt-2">hoặc <span className="text-sky-500 font-semibold">bấm để chọn ảnh</span> từ thiết bị</p>
                    <div className="flex gap-4 mt-6 text-xs text-slate-400 font-medium">
                      <span className="bg-white px-3 py-1 rounded-full border border-slate-200">JPG, PNG</span>
                      <span className="bg-white px-3 py-1 rounded-full border border-slate-200">Max 10MB</span>
                    </div>
                  </div>
                ) : (
                  <div className="border border-slate-200 rounded-[2rem] p-4 bg-slate-50 h-80 flex flex-col relative">
                    <button 
                      onClick={handleRemoveFile}
                      className="absolute top-6 right-6 bg-white/80 backdrop-blur-sm p-2 rounded-full text-slate-600 hover:text-red-500 hover:bg-red-50 shadow-sm transition-colors z-10"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <div className="w-full flex-grow rounded-2xl overflow-hidden bg-slate-200 mb-4 relative">
                      <img src={previewUrl} alt="Preview" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex items-center gap-3 px-2">
                      <div className="p-2 bg-sky-100 text-sky-600 rounded-lg"><FileImage className="w-5 h-5"/></div>
                      <div className="flex-1 overflow-hidden">
                        <p className="font-semibold text-slate-700 truncate text-sm">{selectedFile.name}</p>
                        <p className="text-xs text-slate-400">{(selectedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                      </div>
                      <CheckCircle2 className="w-6 h-6 text-green-500" />
                    </div>
                  </div>
                )}
              </div>

              {/* Cột phải: Cấu hình */}
              <div className="lg:col-span-2">
                <h2 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <span className="bg-sky-100 text-sky-600 w-8 h-8 rounded-full flex items-center justify-center text-sm">2</span> 
                  Thiết lập thông số
                </h2>
                
                <div className="space-y-6">
                  {/* Phông nền */}
                  <div>
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wide block mb-3">Phông nền</label>
                    <div className="flex gap-3">
                      {['blue', 'white'].map(bg => (
                        <button 
                          key={bg}
                          onClick={() => setBgType(bg)}
                          className={`w-14 h-14 rounded-2xl transition-all duration-200 flex items-center justify-center ${bgColors[bg]} ${bgType === bg ? 'ring-4 ring-sky-200 scale-110 shadow-md' : 'opacity-70 hover:opacity-100'} ${bg === 'white' && 'border'}`}
                        >
                          {bgType === bg && <CheckCircle2 className={`w-6 h-6 ${bg === 'white' ? 'text-sky-500' : 'text-white'}`} />}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Kích thước */}
                  <div>
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wide block mb-3">Kích thước chuẩn</label>
                    <div className="grid grid-cols-2 gap-3">
                      {['3x4', '4x6'].map(size => (
                        <button 
                          key={size}
                          onClick={() => setSizeType(size)}
                          className={`py-3 rounded-xl font-bold transition-all duration-200 border ${sizeType === size ? 'bg-sky-50 border-sky-300 text-sky-600 shadow-sm' : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50'}`}
                        >
                          {size} cm
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Trang phục */}
                  <div>
                    <label className="text-sm font-bold text-slate-500 uppercase tracking-wide block mb-3">
                      Trang phục AI
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { id: 'keep', label: 'Giữ gốc' },
                        { id: 'white_shirt', label: 'Sơ mi trắng' },
                        { id: 'black_shirt', label: 'Sơ mi đen' },
                        { id: 'suit', label: 'Áo Vest' }
                      ].map(cloth => (
                        <button 
                          key={cloth.id}
                          onClick={() => setClothesType(cloth.id)}
                          className={`py-3 px-2 rounded-xl font-bold transition-all duration-200 border ${
                            clothesType === cloth.id 
                              ? 'bg-sky-50 border-sky-400 text-sky-600 shadow-sm scale-[1.02]' 
                              : 'bg-white border-slate-200 text-slate-500 hover:bg-slate-50 hover:border-slate-300'
                          }`}
                        >
                          {cloth.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Button Generate */}
                  <div className="pt-4">
                    <button 
                      onClick={handleGenerate}
                      disabled={!selectedFile}
                      className={`w-full flex items-center justify-center gap-2 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${selectedFile ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-lg shadow-sky-500/30 hover:-translate-y-1' : 'bg-slate-200 text-slate-400 cursor-not-allowed'}`}
                    >
                      <Wand2 className="w-6 h-6" />
                      Tạo ảnh bằng AI ngay
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* VIEW: PROCESSING */}
        {step === 'processing' && (
          <div className="bg-white rounded-[2.5rem] p-12 md:p-24 shadow-xl shadow-sky-900/5 border border-slate-100 mb-16 text-center max-w-3xl mx-auto">
            <div className="relative w-24 h-24 mx-auto mb-8">
              <div className="absolute inset-0 bg-sky-100 rounded-full animate-ping"></div>
              <div className="relative bg-white rounded-full w-full h-full flex items-center justify-center shadow-lg border border-sky-50">
                <Loader2 className="w-10 h-10 text-sky-500 animate-spin" />
              </div>
            </div>
            <h2 className="text-2xl font-extrabold text-slate-800 mb-4">AI đang xử lý ảnh của bạn...</h2>
            <p className="text-slate-500 mb-8">Đang bóc tách nền và tự động căn chỉnh khuôn mặt chuẩn ICAO.</p>
            
            <div className="w-full bg-slate-100 rounded-full h-4 mb-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-sky-400 to-blue-500 h-4 rounded-full transition-all duration-[50ms] ease-linear"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-sm font-bold text-sky-600">{progress}% hoàn tất</p>
          </div>
        )}

        {/* VIEW: RESULT */}
        {step === 'result' && (
          <div className="bg-white rounded-[2.5rem] p-6 md:p-10 shadow-2xl shadow-sky-900/10 border border-slate-100 mb-16">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-500 rounded-full mb-4">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h2 className="text-3xl font-extrabold text-slate-800">Hoàn tất xuất sắc!</h2>
              <p className="text-slate-500 mt-2">Ảnh của bạn đã sẵn sàng để tải xuống và sử dụng.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 max-w-4xl mx-auto">
              
              {/* Ảnh gốc */}
              <div className="flex flex-col items-center">
                <div className="relative w-full aspect-[3/4] max-w-[280px] bg-slate-100 rounded-3xl overflow-hidden mb-4 border border-slate-200">
                  <img src={previewUrl} alt="Original" className="w-full h-full object-contain filter grayscale-[30%] opacity-80" />
                  <div className="absolute top-4 left-4 bg-slate-800/70 backdrop-blur text-white text-xs font-bold px-3 py-1.5 rounded-full">
                    Ảnh Gốc
                  </div>
                </div>
              </div>

              {/* Ảnh AI */}
              <div className="flex flex-col items-center">
                <div className={`relative w-full aspect-[3/4] max-w-[280px] rounded-3xl overflow-hidden mb-4 shadow-2xl transition-all duration-500 hover:scale-[1.02] ${bgColors[bgType]} ${bgType === 'white' ? 'border-2 border-slate-200' : ''}`}>
                  {/* Mô phỏng ảnh đã được zoom chuẩn thẻ 3x4 */}
                  <img src={previewUrl} alt="AI Result" className="w-full h-full object-cover object-top scale-110" />
                  <div className="absolute top-4 right-4 bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    Ảnh AI ({sizeType})
                  </div>
                  {/* Quét sáng mô phỏng độ bóng bẩy */}
                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-50"></div>
                </div>
              </div>

            </div>

            {/* Actions */}
            <div className="flex flex-wrap justify-center gap-4 mt-12 border-t border-slate-100 pt-10">
              <button className="flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-sky-500/30 hover:-translate-y-1 transition-all">
                <Download className="w-5 h-5" />
                Tải ảnh HD về máy
              </button>
              <button 
                onClick={handleReset}
                className="flex items-center gap-2 bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 hover:text-sky-600 font-bold py-3.5 px-8 rounded-full shadow-sm hover:-translate-y-1 transition-all"
              >
                <RefreshCw className="w-5 h-5" />
                Tạo ảnh khác
              </button>
              <button className="flex items-center gap-2 bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold p-3.5 rounded-full shadow-sm transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>
        )}

        {/* 6. HƯỚNG DẪN CHỤP ẢNH */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Để AI làm việc tốt nhất</h3>
            <p className="text-slate-500">Mẹo nhỏ để có bức ảnh thẻ đẹp chuẩn studio</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guidelines.map((guide, idx) => (
              <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow text-center">
                <div className="w-12 h-12 mx-auto bg-sky-50 text-sky-500 rounded-2xl flex items-center justify-center mb-4">
                  <guide.icon className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-slate-800 mb-1">{guide.text}</h4>
                <p className="text-sm text-slate-500">{guide.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. FAQ MỞ RỘNG */}
        <section className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-slate-800 mb-2">Câu hỏi thường gặp</h3>
          </div>
          <div className="space-y-2">
            {faqs.map((faq, idx) => (
              <FaqItem key={idx} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}