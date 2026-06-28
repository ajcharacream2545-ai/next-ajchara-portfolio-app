export default function ProjectsPage() {
  const projectList = [
    {
      title: "Cake Shop Mobile Application",
      description: "แอปพลิเคชันร้านขายเค้ก มีระบบแสดงรายการเค้ก คัดแยกหมวดหมู่ ตะกร้าสินค้า และหน้าประวัติการสั่งซื้อสำหรับลูกค้า",
      tech: "Flutter, Dart, Provider (State Management), Git/GitHub",
      role: "Lead Developer (ออกแบบโครงสร้างไฟล์, หน้า UI, และระบบจัดการสถานะข้อมูล)",
      year: "2026",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&auto=format&fit=crop&q=60" // รูปเค้กสวยๆ
    },
    {
      title: "Personal Portfolio Website",
      description: "ระบบเว็บแอปพลิเคชันนำเสนอผลงานและประวัติส่วนตัว รองรับการทำงานแบบ Responsive ทุกหน้าจอ และโหลดรวดเร็วด้วยกลไก SSR",
      tech: "Next.js, React, Tailwind CSS",
      role: "Full Stack Developer",
      year: "2026",
      image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=500&auto=format&fit=crop&q=60" // รูปเว็บ Portfolio
    },
    {
      title: "E-Commerce Management Dashboard",
      description: "ระบบบริหารจัดการหลังบ้านของร้านค้าออนไลน์ จัดการสต็อกสินค้า ยอดคำสั่งซื้อ และสรุปรายงานข้อมูลอย่างมีประสิทธิภาพ",
      tech: "Next.js, Node.js, Supabase (PostgreSQL)",
      role: "Backend & Database Developer",
      year: "2026",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60" // รูปกราฟ Dashboard
    }
  ];

  return (
    <div className="max-w-4xl mx-auto font-prompt py-6">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Projects & Works</h2>
      <p className="text-slate-500 mb-8 font-sarabun">ผลงานและโครงการที่เคยพัฒนาอย่างน้อย 3 โครงการ</p>

      <div className="space-y-6">
        {projectList.map((project, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-48 h-32 relative rounded-xl overflow-hidden shrink-0 bg-slate-100">
              <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <div className="space-y-2 font-sarabun">
              <h3 className="text-xl font-bold font-prompt text-slate-900">{project.title} <span className="text-sm font-normal text-slate-400">({project.year})</span></h3>
              <p className="text-slate-600 text-sm leading-relaxed">{project.description}</p>
              <p className="text-sm"><strong>Technology:</strong> <span className="text-indigo-600">{project.tech}</span></p>
              <p className="text-sm"><strong>บทบาทหน้าที่:</strong> {project.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}