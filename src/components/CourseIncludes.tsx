import { Award, HeartHandshake, BookOpen, Package, Users } from "lucide-react";

const includes = [
  {
    icon: Award,
    title: "شهادة دولية",
    description: "معترف بها في المجال المهني",
  },
  {
    icon: HeartHandshake,
    title: "دعم ومرافقة",
    description: "لمدة 3 أشهر بعد انتهاء الدورة",
  },
  {
    icon: BookOpen,
    title: "كُرّاس تعليمي شامل",
    description: "أكثر من 20 صفحة",
  },
  {
    icon: Package,
    title: "رزمة منتجات",
    description: "من شركة ألكسير",
  },
  {
    icon: Users,
    title: "مجموعات صغيرة",
    description: "لضمان أعلى جودة تعليم",
  },
];

export const CourseIncludes = () => {
  return (
    <section className="py-16 px-8 bg-gradient-hero" dir="rtl">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
            على شو بتحصلي ؟          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {includes.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-5 rounded-3xl bg-card/80 backdrop-blur-sm border border-border/30 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-2xl bg-gradient-accent text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-foreground mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
