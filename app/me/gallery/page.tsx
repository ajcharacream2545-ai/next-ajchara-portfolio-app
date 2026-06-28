export default function GalleryPage() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&auto=format&fit=crop&q=60",
      caption: "บรรยากาศการเขียนโค้ดและพัฒนาซอฟต์แวร์"
    },
    {
      url: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=500&auto=format&fit=crop&q=60",
      caption: "ลุยแก้ไขบั๊กและพัฒนาฟีเจอร์ใหม่ ๆ"
    },
    {
      url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&auto=format&fit=crop&q=60",
      caption: "ออกแบบหน้าตา UI/UX ของแอปพลิเคชัน"
    },
    {
      url: "https://images.unsplash.com/photo-1605379399642-870262d3d051?w=500&auto=format&fit=crop&q=60",
      caption: "จัดระเบียบโครงสร้างไฟล์และโฟลเดอร์ในโปรเจ็กต์"
    },
    {
      url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60",
      caption: "ทดสอบการทำงานของระบบให้เสถียร"
    },
    {
      url: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=500&auto=format&fit=crop&q=60",
      caption: "วางแผนและออกแบบโปรเจ็กต์ถัดไป"
    }
  ];

  return (
    <div className="max-w-5xl mx-auto font-prompt py-6">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">Working Gallery</h2>
      <p className="text-slate-500 mb-8 font-sarabun">ภาพบรรยากาศและความมุ่งมั่นในการเรียนรู้และการเขียนโปรแกรม</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 group hover:shadow-md transition">
            <div className="h-48 bg-slate-100 overflow-hidden">
              <img 
                src={img.url} 
                alt={img.caption} 
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="p-4 font-sarabun text-sm text-slate-600 text-center">
              {img.caption}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}