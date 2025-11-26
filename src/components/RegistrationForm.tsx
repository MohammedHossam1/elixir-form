import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send, Loader2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "service_p6fnfbm";
const TEMPLATE_ID = "template_gmjhdri";
const PUBLIC_KEY = "Fha3tU_AJIREk45gn";

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "الاسم يجب أن يكون على الأقل حرفين" })
    .max(100, { message: "الاسم طويل جداً" }),
  email: z
    .string()
    .min(1, { message: "البريد الإلكتروني مطلوب" })
    .email({ message: "البريد الإلكتروني غير صحيح" }),
  phone: z
    .string()
    .min(1, { message: "رقم الهاتف مطلوب" })
    .regex(/^05\d{8,9}$/, { message: "رقم الهاتف يجب أن يبدأ بـ 05 ويحتوي على 10-11 رقم" }),
  message: z
    .string()
    .max(500, { message: "الرسالة طويلة جداً (حد أقصى 500 حرف)" })
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

export const RegistrationForm = () => {
  const { toast } = useToast();
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const onSubmit = async (data: FormValues) => {
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message || "لا توجد رسالة إضافية",
        },
        {
          publicKey: PUBLIC_KEY,
        }
      );

      toast({
        title: "تم إرسال طلبك بنجاح!",
        description: "سنتواصل معكِ قريباً",
      });

      form.reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "حدث خطأ أثناء الإرسال",
        description: "يرجى المحاولة مرة أخرى لاحقاً",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="registration" className="py-20 px-3 lg:px-8 bg-gradient-hero" dir="rtl">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            سجّلي للدورة
          </h2>
          <p className="text-lg text-muted-foreground">
            املئي النموذج وسنتواصل معكِ لإكمال التسجيل
          </p>
          <div className="w-24 h-1 bg-gradient-accent mx-auto rounded-full mt-4" />
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="p-4 lg:p-8 rounded-2xl bg-card border border-border shadow-elegant animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      الاسم الكامل *
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="أدخلي اسمك الكامل"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      البريد الإلكتروني *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="example@email.com"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      رقم الهاتف *
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="tel"
                        placeholder="05X-XXXXXXX"
                        className="text-right"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-foreground">
                      رسالة إضافية (اختياري)
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="أي أسئلة أو ملاحظات..."
                        className="text-right min-h-[100px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={form.formState.isSubmitting}
                className="w-full bg-gradient-accent text-white hover:shadow-elegant transition-all duration-300 hover:scale-[1.02] text-lg py-6 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {form.formState.isSubmitting ? (
                  <>
                    <Loader2 className="ml-2 h-5 w-5 animate-spin" />
                    جاري الإرسال...
                  </>
                ) : (
                  <>
                    <Send className="ml-2 h-5 w-5" />
                    إرسال الطلب
                  </>
                )}
              </Button>
            </div>

            <p className="text-sm text-muted-foreground text-center mt-6">
              * جميع الحقول مطلوبة
            </p>
          </form>
        </Form>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground">
            للاستفسارات: يمكنكِ التواصل معنا مباشرة
          </p>
        </div>
      </div>
    </section>
  );
};
