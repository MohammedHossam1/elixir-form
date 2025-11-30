import professionalPortrait from "@/assets/professional-portrait.jpg";

export const Hero = () => {
  return (
    <section className="min-h-screen grid lg:grid-cols-2" dir="ltr">
      {/* Right Side - Image */}
      <div className="relative order-1 lg:order-2  min-h-[50vh] lg:min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10" />
        <img
          src={professionalPortrait}
          alt="Professional Beauty Expert"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute bottom-0 right-0  text-end p-8 bg-gradient-to-t from-black/95 to-transparent">
          <p className="text-sm text-primary mb-2">أحلام مصالحة
          </p>
          <h3 className="text-2xl font-bold text-primary">مدربة تجميل معتمدة دولياً
          </h3>
        </div>
      </div>

      {/* Left Side - Content */}
      <div className="order-2 lg:order-1 flex items-start justify-center p-8 lg:p-16 bg-gradient-hero">
        <div className="max-w-xl w-full animate-fade-in" dir="rtl">
          <div className="mb-10">
            <span className="inline-block px-5 py-2 rounded-full bg-primary/15 text-primary text-sm font-medium mb-6 animate-slide-in backdrop-blur-sm">
              التسجيل مفتوح الآن
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-5  tracking-tight">
              الدورة المكثّفة <span className="block mt-4" >في الكوسمتيكا</span>
            </h1>
            <p className="text-xl mt-4 lg:mt-14 text-muted-foreground leading-relaxed">
              ارفعي مستوى شغلك واصبحي أخصائية أقوى بأساس علمي وتطبيقي احترافي
            </p>
          </div>

          <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#registration"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-accent text-white font-semibold hover:shadow-elegant transition-all duration-300 hover:scale-105"
            >
              سجّلي الآن
            </a>
            <a
              href="#details"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full border-2 border-primary/20 bg-card text-foreground font-medium hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              تفاصيل الدورة
            </a>
          </div>

          <div className="flex gap-4 flex-cold">
            <div className="space-y-1  flex gap-2 rounded-full  bg-primary/15 animate-slide-in backdrop-blur-sm text-primary py-2 px-5   items-center w-fit">
              <p className="text-xl font-bold bg-gradient-accent bg-clip-text text-primary">3</p>
              <p className="text-xs text-primary uppercase tracking-wide">لقاءات</p>
            </div>
            <div className="space-y-1  flex gap-2 rounded-full  bg-primary/15 animate-slide-in backdrop-blur-sm text-primary py-2 px-5   items-center w-fit">
              <p className="text-xl font-bold bg-gradient-accent bg-clip-text text-primary">4</p>
              <p className="text-xs text-primary uppercase tracking-wide">ساعات</p>
            </div>
            <div className="space-y-1  flex gap-2 rounded-full  bg-primary/15 animate-slide-in backdrop-blur-sm text-primary py-2 px-5   items-center w-fit">
              <p className="text-xl font-bold bg-gradient-accent bg-clip-text text-primary">20+</p>
              <p className="text-xs text-primary uppercase tracking-wide">صفحة</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
