export default function Footer() {
  return (
    <footer className="py-16 px-6 md:px-16 lg:px-24 bg-charcoal-100 border-t border-charcoal-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 md:items-start text-center md:text-start">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold text-foreground mb-1">الفخامة</h2>
          <span className="font-inter text-[10px] text-sand-300 tracking-[0.2em] uppercase mb-4 opacity-70">
            Al-Fakhama Studio
          </span>
          <p className="text-sand-300 font-light text-sm max-w-xs">
            تصميم يتحدث لغتك، وأداء يتجاوز توقعاتك.
          </p>
        </div>

        <div className="flex gap-8 text-sand-200 font-light text-sm mt-4 md:mt-0">
          <a href="#" aria-label="تويتر - Twitter profile" className="hover:text-gold transition-colors flex flex-col items-center md:items-start gap-1">
            <span>تويتر</span>
            <span className="font-inter text-[9px] uppercase tracking-widest opacity-50">Twitter</span>
          </a>
          <a href="#" aria-label="انستغرام - Instagram profile" className="hover:text-gold transition-colors flex flex-col items-center md:items-start gap-1">
            <span>انستغرام</span>
            <span className="font-inter text-[9px] uppercase tracking-widest opacity-50">Instagram</span>
          </a>
          <a href="#" aria-label="لينكدإن - LinkedIn profile" className="hover:text-gold transition-colors flex flex-col items-center md:items-start gap-1">
            <span>لينكدإن</span>
            <span className="font-inter text-[9px] uppercase tracking-widest opacity-50">LinkedIn</span>
          </a>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-charcoal-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-charcoal-300 font-light text-center md:text-start">
        <div className="flex flex-col gap-1 items-center md:items-start">
          <p>&copy; {new Date().getFullYear()} الفخامة. جميع الحقوق محفوظة.</p>
          <p className="font-inter text-[10px] uppercase tracking-wider opacity-50">&copy; {new Date().getFullYear()} Al-Fakhama. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
