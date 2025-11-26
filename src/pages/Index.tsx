import { Hero } from "@/components/Hero";
import { CourseContent } from "@/components/CourseContent";
import { CourseIncludes } from "@/components/CourseIncludes";
import { CourseDetails } from "@/components/CourseDetails";
import { RegistrationForm } from "@/components/RegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <Hero />
      <CourseContent />
      <CourseIncludes />
      <CourseDetails />
      <RegistrationForm />
    </div>
  );
};

export default Index;
