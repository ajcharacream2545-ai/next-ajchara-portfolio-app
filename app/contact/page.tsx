export default function ContactPage() {
  return (
    <div className="max-w-md mx-auto font-prompt py-12 text-center">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact Me</h2>
      <p className="text-slate-500 mb-8 font-sarabun">ช่องทางการติดต่อและข้อมูลประกอบการสมัครงาน</p>

      <div className="bg-white p-8 rounded-2xl shadow-md space-y-6 text-left font-sarabun border border-slate-100">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">✉️</div>
          <div>
            <p className="text-xs text-slate-400 font-prompt">Email</p>
            <p className="text-slate-800 font-medium">ajcharacream2545@gmail.com</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">📞</div>
          <div>
            <p className="text-xs text-slate-400 font-prompt">เบอร์โทรศัพท์</p>
            <p className="text-slate-800 font-medium">099-251-4245</p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-indigo-50 rounded-full flex items-center justify-center text-indigo-600">🐙</div>
          <div>
            <p className="text-xs text-slate-400 font-prompt">GitHub Profile</p>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
              https://github.com/ajcharacream2545-ai
            </a>
          </div>
        </div>

        <hr className="border-slate-100" />

        <a 
          href="/resume.pdf" 
          download="resume.pdf"
          className="w-full bg-indigo-600 text-white text-center font-prompt font-semibold block py-3 rounded-xl hover:bg-indigo-700 shadow-md transition"
        >
          📥 Download Resume
        </a>
      </div>
    </div>
  );
}