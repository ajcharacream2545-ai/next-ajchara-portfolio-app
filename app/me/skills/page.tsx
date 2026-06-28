function SkillCard({ title = '', skills = [] }: { title: string; skills: string[] }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <h3 className="font-bold text-lg text-indigo-600 mb-4">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg text-sm font-sarabun">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsPage() {
  const skillData = [
    { title: "Frontend", skills: ["HTML", "CSS", "JavaScript", "React", "Next.js", "Flutter / Dart"] },
    { title: "Backend", skills: ["Node.js", "Express", "PHP"] },
    { title: "Database", skills: ["MySQL", "PostgreSQL", "Supabase", "Firebase"] },
    { title: "Tools & Deploy", skills: ["Git", "GitHub", "VS Code", "Docker"] }
  ];

  return (
    <div className="max-w-4xl mx-auto font-prompt py-6">
      <h2 className="text-3xl font-bold text-slate-900 mb-2">My Skills</h2>
      <p className="text-slate-500 mb-8 font-sarabun">ทักษะความสามารถและเครื่องมือทางเทคนิคที่เชี่ยวชาญ</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {skillData.map((item, idx) => (
          <SkillCard key={idx} title={item.title} skills={item.skills} />
        ))}
      </div>
    </div>
  );
}