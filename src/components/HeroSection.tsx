import { motion } from "framer-motion";
import { heroImage } from "../data/menuData";
import { Sparkles, ChefHat, Building2 } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-label="بخش معرفی">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="میز غذای ایرانی مدرن"
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-[#0a0e1a]" />
        {/* Warm color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-amber-900/30 via-transparent to-purple-900/20" />
        {/* Top gradient for header blend */}
        <div className="absolute top-0 right-0 left-0 h-32 bg-gradient-to-b from-black/50 to-transparent" />
      </div>

      {/* Subtle ambient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span className="text-white/80 text-sm">مجموعه غذایی لذیذ</span>
          </motion.div>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            منوی اختصاصی
            <br />
            <span className="bg-gradient-to-l from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              شرکت قیر پردیس پارس
            </span>
          </h1>

          {/* Description */}
          <motion.p
            className="max-w-2xl mx-auto text-base md:text-lg text-white/50 mb-10 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            سه تجربه متفاوت برای آغاز روز، میانه روز و پایان یک روز کاری؛ با مواد اولیه باکیفیت، طبخ حرفه‌ای و طعمی ماندگار.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <button
              onClick={() => scrollTo("#menu")}
              className="group px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold text-lg rounded-2xl hover:from-amber-400 hover:to-amber-500 transition-all shadow-xl shadow-amber-500/25 hover:shadow-amber-500/40 hover:-translate-y-0.5"
              aria-label="مشاهده منو"
            >
              مشاهده منو
            </button>
            <button
              onClick={() => scrollTo("#pricing")}
              className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-medium text-lg rounded-2xl hover:bg-white/15 transition-all hover:-translate-y-0.5"
              aria-label="شرایط قیمت‌گذاری"
            >
              شرایط قیمت‌گذاری
            </button>
          </motion.div>
        </motion.div>

        {/* Feature Badges */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { icon: Sparkles, text: "مواد اولیه باکیفیت" },
            { icon: ChefHat, text: "طبخ روزانه" },
            { icon: Building2, text: "ارسال رایگان و تحویل در محل" },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
            >
              <item.icon size={20} className="text-amber-400" />
              <span className="text-white/70 text-sm font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 right-0 left-0 h-40 bg-gradient-to-t from-[#0a0e1a] to-transparent" />
    </section>
  );
}
