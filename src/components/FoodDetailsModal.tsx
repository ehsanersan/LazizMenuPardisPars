import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight } from "lucide-react";
import type { MenuItem } from "../data/menuData";
import { formatPrice, mealLabels } from "../data/menuData";

interface FoodDetailsModalProps {
  item: MenuItem | null;
  onClose: () => void;
  iranianRice: boolean;
  includeVAT: boolean;
}

export default function FoodDetailsModal({
  item,
  onClose,
  iranianRice,
  includeVAT,
}: FoodDetailsModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!item) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    // Focus trap
    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !modalRef.current) return;
      const focusable = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const first = focusable[0] as HTMLElement;
      const last = focusable[focusable.length - 1] as HTMLElement;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleEsc);
    document.addEventListener("keydown", handleTab);
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.removeEventListener("keydown", handleTab);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  const calculatePrice = () => {
    if (!item) return { base: 0, rice: 0, vat: 0, total: 0 };
    const base = item.price;
    const rice = item.hasRice && iranianRice ? 500000 : 0;
    const subtotal = base + rice;
    const vat = includeVAT ? Math.round(subtotal * 0.1) : 0;
    const total = subtotal + vat;
    return { base, rice, vat, total };
  };

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end md:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal */}
          <motion.div
            ref={modalRef}
            role="dialog"
            aria-modal="true"
            aria-label={`جزئیات ${item.name}`}
            className="relative z-10 w-full md:max-w-2xl md:mx-4 max-h-[90vh] overflow-y-auto rounded-t-3xl md:rounded-3xl bg-[#12162a]/95 backdrop-blur-2xl border border-white/10 shadow-2xl"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 35 }}
          >
            {/* Top handle for mobile */}
            <div className="md:hidden flex justify-center pt-3">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            {/* Close button */}
            <button
              ref={closeButtonRef}
              onClick={onClose}
              className="absolute top-4 left-4 z-20 p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/10 text-white/60 hover:text-white hover:bg-white/20 transition-all"
              aria-label="بستن"
            >
              <X size={20} />
            </button>

            {/* Image */}
            <div className="relative aspect-[16/10] md:aspect-[16/9] overflow-hidden md:rounded-t-3xl">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#12162a] via-transparent to-transparent" />
              {/* Day badge */}
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white font-medium text-sm">
                  روز {item.day}
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 pt-2 md:p-8 md:pt-4">
              {/* Meal badge */}
              <div className="mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                  item.meal === "breakfast"
                    ? "bg-amber-500/20 text-amber-400 border border-amber-500/20"
                    : item.meal === "lunch"
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/20"
                    : "bg-indigo-500/20 text-indigo-400 border border-indigo-500/20"
                }`}>
                  {mealLabels[item.meal]}
                </span>
                {item.hasRice && (
                  <span className="inline-block mr-2 px-3 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/15">
                    همراه برنج
                  </span>
                )}
              </div>

              {/* Name */}
              <h2 className="text-2xl md:text-3xl font-black text-white mb-3">{item.name}</h2>

              {/* Description */}
              <p className="text-white/60 text-base leading-relaxed mb-6">
                {item.fullDescription}
              </p>

              {/* Ingredients */}
              <div className="mb-6">
                <h3 className="text-white/80 text-sm font-bold mb-3">مواد و ترکیبات</h3>
                <div className="flex flex-wrap gap-2">
                  {item.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/[0.08] text-white/50 text-sm"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price breakdown */}
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                <h3 className="text-white/80 text-sm font-bold mb-4">جزئیات قیمت</h3>
                {(() => {
                  const { base, rice, vat, total } = calculatePrice();
                  return (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-white/50 text-sm">قیمت پایه</span>
                        <span className="text-white/80 text-sm price-number">
                          {formatPrice(base)} ریال
                        </span>
                      </div>
                      {item.hasRice && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/50 text-sm">
                            تفاوت برنج ایرانی
                            {!iranianRice && " (غیرفعال)"}
                          </span>
                          <span className={`text-sm price-number ${rice > 0 ? "text-amber-400" : "text-white/30"}`}>
                            {rice > 0 ? `+${formatPrice(rice)} ریال` : "—"}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between items-center">
                        <span className="text-white/50 text-sm">
                          ۱۰٪ ارزش افزوده
                          {!includeVAT && " (غیرفعال)"}
                        </span>
                        <span className={`text-sm price-number ${vat > 0 ? "text-amber-400" : "text-white/30"}`}>
                          {vat > 0 ? `+${formatPrice(vat)} ریال` : "—"}
                        </span>
                      </div>
                      <div className="border-t border-white/10 pt-3 flex justify-between items-center">
                        <span className="text-white font-bold text-sm">قیمت نهایی</span>
                        <motion.span
                          key={total}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="text-amber-400 font-black text-xl price-number"
                        >
                          {formatPrice(total)} ریال
                        </motion.span>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Rice note */}
              {item.hasRice && (
                <p className="mt-4 text-white/30 text-xs leading-relaxed">
                  قیمت پایه با برنج هندی محاسبه شده است. در صورت درخواست برنج ایرانی، مبلغ ۵۰۰,۰۰۰ ریال به قیمت اضافه می‌شود.
                </p>
              )}

              {/* Back button */}
              <button
                onClick={onClose}
                className="mt-6 w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-white/5 border border-white/10 text-white/60 hover:text-white hover:bg-white/10 transition-all font-medium"
                aria-label="بازگشت به منو"
              >
                <ArrowRight size={18} />
                بازگشت به منو
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
