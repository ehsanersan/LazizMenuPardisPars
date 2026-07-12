import { motion } from "framer-motion";
import { aboutImage } from "../data/menuData";

export default function AboutSection() {
  return (
    <section className="py-16 sm:py-24" aria-label="درباره مجموعه لذیذ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          {/* Text */}
          <div className="order-2 md:order-1">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-amber-400 text-xs font-medium">درباره ما</span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-6 leading-tight">
              لذیذ؛
              <br />
              <span className="bg-gradient-to-l from-amber-300 to-amber-500 bg-clip-text text-transparent">
                طعمی شایسته یک پذیرایی حرفه‌ای
              </span>
            </h2>

            <p className="text-white/50 text-base md:text-lg leading-relaxed mb-8">
              مجموعه غذایی لذیذ با تمرکز بر کیفیت مواد اولیه، طبخ روزانه و ارائه منظم، تجربه‌ای مطمئن و خوش‌طعم برای پذیرایی سازمانی فراهم می‌کند. این منو با هدف ایجاد تنوع در سه وعده صبحانه، ناهار و شام برای شرکت قیر پردیس پارس تهیه شده است.
            </p>

            <div className="grid grid-cols-3 gap-4">
              {[
                { number: "۱۴", label: "روز برنامه غذایی" },
                { number: "۳", label: "وعده روزانه" },
                { number: "۴۲", label: "آیتم منو" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <span className="block text-amber-400 font-black text-2xl md:text-3xl mb-1">
                    {stat.number}
                  </span>
                  <span className="text-white/40 text-xs">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="order-1 md:order-2">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                src={aboutImage}
                alt="آشپزخانه حرفه‌ای مجموعه لذیذ"
                loading="lazy"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 border border-white/10 rounded-3xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
