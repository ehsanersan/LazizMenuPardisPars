/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * پیکربندی تصاویر مجموعه غذایی لذیذ
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 
 * برای استفاده از تصاویر محلی:
 * 1. تصاویر را در پوشه public/images قرار دهید
 * 2. USE_LOCAL_IMAGES را به true تغییر دهید
 * 
 * ساختار پوشه‌ها:
 * public/images/
 * ├── general/
 * │   ├── hero.jpg
 * │   └── logo.png
 * ├── breakfast/
 * │   ├── khame-asal.jpg
 * │   ├── panir-gooje.jpg
 * │   ├── tokhm-morgh.jpg
 * │   ├── krem-konjed.jpg
 * │   └── halva-shokri.jpg
 * ├── lunch/
 * │   ├── ghorme-sabzi.jpg
 * │   ├── zereshk-polo.jpg
 * │   ├── loobia-polo.jpg
 * │   ├── chelo-kabab.jpg
 * │   ├── chelo-mahi.jpg
 * │   ├── khoresh-gheymeh.jpg
 * │   ├── polo-bandari.jpg
 * │   ├── khoresh-masma.jpg
 * │   ├── adas-polo.jpg
 * │   ├── jooje-kabab.jpg
 * │   └── chelo-migo.jpg
 * ├── dinner/
 * │   ├── lazania.jpg
 * │   ├── stik-morgh.jpg
 * │   ├── makaroni.jpg
 * │   ├── khorak-koobideh.jpg
 * │   ├── pirashki.jpg
 * │   ├── kotlet.jpg
 * │   ├── khorak-joojeh.jpg
 * │   └── khorak-morgh-sabzi.jpg
 * └── packaging/
 *     ├── container-1.jpg
 *     ├── container-2.jpg
 *     ├── container-3.jpg
 *     └── cutlery.jpg
 */

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// تنظیم این مقدار به true برای استفاده از تصاویر محلی
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export const USE_LOCAL_IMAGES = false;

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// مسیرهای تصاویر محلی
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const LOCAL_IMAGES = {
  // تصاویر عمومی
  general: {
    hero: "/images/general/hero.jpg",
    logo: "/images/general/logo.png",
  },
  
  // تصاویر صبحانه
  breakfast: {
    khameAsal: "/images/breakfast/khame-asal.jpg",
    panirGooje: "/images/breakfast/panir-gooje.jpg",
    tokhmMorgh: "/images/breakfast/tokhm-morgh.jpg",
    kremKonjed: "/images/breakfast/krem-konjed.jpg",
    halvaShokri: "/images/breakfast/halva-shokri.jpg",
  },
  
  // تصاویر ناهار
  lunch: {
    ghormeSabzi: "/images/lunch/ghorme-sabzi.jpg",
    zereshkPolo: "/images/lunch/zereshk-polo.jpg",
    loobiaPolo: "/images/lunch/loobia-polo.jpg",
    chelokabab: "/images/lunch/chelo-kabab.jpg",
    cheloMahi: "/images/lunch/chelo-mahi.jpg",
    khoreshGheymeh: "/images/lunch/khoresh-gheymeh.jpg",
    poloBandari: "/images/lunch/polo-bandari.jpg",
    khoreshMasma: "/images/lunch/khoresh-masma.jpg",
    adasPolo: "/images/lunch/adas-polo.jpg",
    joojekabab: "/images/lunch/jooje-kabab.jpg",
    cheloMigo: "/images/lunch/chelo-migo.jpg",
  },
  
  // تصاویر شام
  dinner: {
    lazania: "/images/dinner/lazania.jpg",
    stikMorgh: "/images/dinner/stik-morgh.jpg",
    makaroni: "/images/dinner/makaroni.jpg",
    khorakKoobideh: "/images/dinner/khorak-koobideh.jpg",
    pirashki: "/images/dinner/pirashki.jpg",
    kotlet: "/images/dinner/kotlet.jpg",
    khorakJoojeh: "/images/dinner/khorak-joojeh.jpg",
    khorakMorghSabzijat: "/images/dinner/khorak-morgh-sabzi.jpg",
  },
  
  // تصاویر بسته‌بندی
  packaging: [
    "/images/packaging/container-1.jpg",
    "/images/packaging/container-2.jpg",
    "/images/packaging/container-3.jpg",
    "/images/packaging/cutlery.jpg",
  ],
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// مسیرهای تصاویر آنلاین (پیش‌فرض)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const ONLINE_IMAGES = {
  general: {
    hero: "https://images.pexels.com/photos/17294719/pexels-photo-17294719.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=900&w=1600",
    logo: "/images/laziz-logo.png", // فعلاً از لوگوی موجود استفاده می‌شود
  },
  
  breakfast: {
    khameAsal: "https://images.pexels.com/photos/35382037/pexels-photo-35382037.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    panirGooje: "https://images.pexels.com/photos/6446792/pexels-photo-6446792.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tokhmMorgh: "https://images.pexels.com/photos/5836619/pexels-photo-5836619.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    kremKonjed: "https://images.pexels.com/photos/6252680/pexels-photo-6252680.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    halvaShokri: "https://images.pexels.com/photos/8441020/pexels-photo-8441020.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  
  lunch: {
    ghormeSabzi: "https://images.pexels.com/photos/16133045/pexels-photo-16133045.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    zereshkPolo: "https://images.pexels.com/photos/33683221/pexels-photo-33683221.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    loobiaPolo: "https://images.pexels.com/photos/38343256/pexels-photo-38343256.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    chelokabab: "https://images.pexels.com/photos/14731641/pexels-photo-14731641.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    cheloMahi: "https://images.pexels.com/photos/5041493/pexels-photo-5041493.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    khoreshGheymeh: "https://images.pexels.com/photos/28792830/pexels-photo-28792830.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    poloBandari: "https://images.pexels.com/photos/31710628/pexels-photo-31710628.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    khoreshMasma: "https://images.pexels.com/photos/2116092/pexels-photo-2116092.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    adasPolo: "https://images.pexels.com/photos/6363498/pexels-photo-6363498.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    joojekabab: "https://images.pexels.com/photos/3996159/pexels-photo-3996159.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    cheloMigo: "https://images.pexels.com/photos/31710626/pexels-photo-31710626.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  
  dinner: {
    lazania: "https://images.pexels.com/photos/6046493/pexels-photo-6046493.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    stikMorgh: "https://images.pexels.com/photos/28321266/pexels-photo-28321266.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    makaroni: "https://images.pexels.com/photos/546945/pexels-photo-546945.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    khorakKoobideh: "https://images.pexels.com/photos/17871871/pexels-photo-17871871.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    pirashki: "https://images.pexels.com/photos/37049987/pexels-photo-37049987.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    kotlet: "https://images.pexels.com/photos/5708088/pexels-photo-5708088.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    khorakJoojeh: "https://images.pexels.com/photos/6916860/pexels-photo-6916860.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    khorakMorghSabzijat: "https://images.pexels.com/photos/4611425/pexels-photo-4611425.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  
  packaging: [
    "https://images.pexels.com/photos/37851490/pexels-photo-37851490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/4393660/pexels-photo-4393660.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/30635719/pexels-photo-30635719.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    "https://images.pexels.com/photos/3718490/pexels-photo-3718490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  ],
};

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// صادر کردن تصاویر بر اساس تنظیمات
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const IMAGES = USE_LOCAL_IMAGES ? LOCAL_IMAGES : ONLINE_IMAGES;

export const GENERAL_IMAGES = IMAGES.general;
export const BREAKFAST_IMAGES = IMAGES.breakfast;
export const LUNCH_IMAGES = IMAGES.lunch;
export const DINNER_IMAGES = IMAGES.dinner;
export const PACKAGING_IMAGES = IMAGES.packaging;

// تصاویر پرکاربرد
export const heroImage = IMAGES.general.hero;
export const logoImage = IMAGES.general.logo;
