import { Calendar, Clock, DollarSign, CreditCard } from "lucide-react";

const details = [
  {
    icon: Calendar,
    label: "مدة الدورة",
    value: "3 لقاءات",
  },
  {
    icon: Clock,
    label: "كل لقاء",
    value: "4 ساعات",
  },
  {
    icon: DollarSign,
    label: "السعر",
    value: "2990 +מעם",
  },
];

const paymentMethods = [
  "فيزا (حتى 5 دفعات)",
  "كاش",
  "تحويل بنكي",
];

export const CourseDetails = () => {
  return (
    <section id="details" className="py-16 px-8 bg-muted/20" dir="rtl">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-2">
            التفاصيل
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {details.map((detail, index) => {
            const Icon = detail.icon;
            return (
              <div
                key={index}
                className="p-6 rounded-3xl bg-card border border-border/50 text-center group hover:border-primary/30 hover:shadow-lg transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex p-3 rounded-2xl bg-gradient-accent text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <p className="text-xs text-muted-foreground mb-1">
                  {detail.label}
                </p>
                <p className="text-xl font-bold text-foreground">
                  {detail.value}
                </p>
              </div>
            );
          })}
        </div>

        <div className="p-6 rounded-3xl bg-card border border-border/50 animate-fade-in mb-6" style={{ animationDelay: "0.3s" }}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2.5 rounded-2xl bg-gradient-accent text-white">
              <CreditCard className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              طرق الدفع
            </h3>
          </div>
          <div className="grid sm:grid-cols-3 gap-3">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="p-3 rounded-2xl bg-muted/50 text-center"
              >
                <p className="text-foreground text-sm font-medium">{method}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-8 rounded-3xl bg-gradient-accent text-white text-center animate-fade-in shadow-elegant" style={{ animationDelay: "0.4s" }}>
          <p className="text-sm font-medium mb-1 text-white/80">تعليم علمي + عملي</p>
          <p className="text-xl lg:text-2xl font-bold">
            استثمري بمستقبلك المهني
          </p>
        </div>
      </div>
    </section>
  );
};
