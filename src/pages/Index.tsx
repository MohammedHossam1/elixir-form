import { Hero } from "@/components/Hero";
import { CourseContent } from "@/components/CourseContent";
import { CourseIncludes } from "@/components/CourseIncludes";
import { CourseDetails } from "@/components/CourseDetails";
import { RegistrationForm } from "@/components/RegistrationForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Hero />
      <CourseContent />
      <CourseIncludes />
      <CourseDetails />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
