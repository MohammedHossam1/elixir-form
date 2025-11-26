import { Sparkles, Beaker, ClipboardList, Briefcase } from "lucide-react";

const contentSections = [
  {
    icon: Sparkles,
    title: "أساسيات الجلد",
    items: [
      "شرح طبقات الجلد الثلاث",
      "فهم الـ Epidermis وكيفية تفعيل تجدد البشرة",
      "التعرف على أنواع البشرة وتشخيص صحيح",
    ],
  },
  {
    icon: Beaker,
    title: "الأحماض والمكوّنات",
    items: [
      "AHA / BHA / PHA",
      "ملاءمة كل حمض لنوع البشرة",
      "الرتينول، النياسيناميد، والإكسوزومات وكيف ندمجهم بالعلاجات",
      "ممنوعات كل نوع بشرة",
    ],
  },
  {
    icon: ClipboardList,
    title: "تطبيق عملي + بروتوكولات جاهزة",
    items: [
      "بروتوكولات للتجاعيد",
      "بروتوكولات للتصبغات",
      "بروتوكولات لحبّ الشباب",
      "دمج علاجات متقدّمة على حسب نوع البشرة",
    ],
  },
  {
    icon: Briefcase,
    title: "إدارة + نجاح مهني",
    items: [
      "تنظيم العيادة",
      "ترتيب الخدمات",
      "كيفية التسعير",
      "أساسيات التسويق والربح",
    ],
  },
];

export const CourseContent = () => {
  return (
    <section className="py-16 px-8 bg-muted/30" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-3">
            محتوى الدورة
          </h2>
          <p className="text-muted-foreground">
            كل ما تحتاجين معرفته لتصبحي محترفة
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contentSections.map((section, index) => {
            const Icon = section.icon;
            return (
              <div
                key={index}
                className="group p-6 rounded-3xl bg-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 rounded-2xl bg-gradient-accent text-white group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {section.title}
                    </h3>
                    <ul className="space-y-1.5">
                      {section.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-2 text-sm text-muted-foreground"
                        >
                          <span className="text-primary mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
