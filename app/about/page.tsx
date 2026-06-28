export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto font-prompt py-6">
      <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b-2 border-indigo-600 pb-2">About Me (ข้อมูลเกี่ยวกับตนเอง)</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sarabun text-slate-700">
        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
          <h3 className="text-lg font-bold font-prompt text-indigo-600">💡 ประวัติส่วนตัว & จุดแข็ง</h3>
          <p><strong>ชื่อ-นามสกุล:</strong> อัจฉรา พิเดช</p>
          <p><strong>วันเกิด:</strong> 11 พฤศจิกายน พ.ศ. 2545</p>
          <p><strong>จุดแข็ง:</strong> เป็นคนเรียนรู้สิ่งใหม่ๆ ได้รวดเร็ว มีวินัยในการฝึกฝนทักษะการเขียนโค้ด มีทักษะการสื่อสารและทำงานร่วมกับผู้อื่นได้เป็นอย่างดี</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-3">
          <h3 className="text-lg font-bold font-prompt text-indigo-600">🎓 ประวัติการศึกษา</h3>
          <p><strong>ระดับมหาวิทยาลัย:</strong> กำลังศึกษาที่มหาวิทยาลัยเอเชียอาคเนย์ สาขาเทคโนโลยีดิจิทัลเเละนวัตกรรม  </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm col-span-1 md:col-span-2 space-y-3">
          <h3 className="text-lg font-bold font-prompt text-indigo-600">🎯 Career Objective (เป้าหมายในการทำงาน)</h3>
          <p className="leading-relaxed">
            มุ่งมั่นที่จะก้าวสู่การเป็นนักพัฒนามืออาชีพ โดยนำทักษะด้านการออกแบบสถาปัตยกรรมซอฟต์แวร์ การจัดการฐานข้อมูล 
            และการเขียนโปรแกรมทั้งฝั่งหน้าบ้านและหลังบ้าน มาช่วยขับเคลื่อนองค์กรให้เติบโต 
            พร้อมขยายขีดความสามารถของตนเองร่วมกับผู้เชี่ยวชาญในสายงาน Martech และ Tech Stack ยุคใหม่
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-2">
          <h3 className="text-lg font-bold font-prompt text-indigo-600">❤️ ความสนใจ</h3>
          <p>Mobile App Development (Flutter), Modern Web Technology (Next.js, Tailwind), Customer Data Platform (CDP) และเทคโนโลยี AI บอท</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm space-y-2">
          <h3 className="text-lg font-bold font-prompt text-indigo-600">🎨 งานอดิเรก</h3>
          <p>เขียนโค้ดทำไซด์โปรเจ็กต์, ศึกษาเครื่องมือ Martech ใหม่ๆ, ทำอาหารทานเอง, ดูแลบำรุงรักษารถจักรยานยนต์คู่ใจ</p>
        </div>
      </div>
    </div>
  );
}