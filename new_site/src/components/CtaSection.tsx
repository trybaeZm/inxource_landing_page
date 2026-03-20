"use client";

export default function CtaSection() {
  return (
    <section className="bg-zinc-950 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative gradient match to Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container max-w-5xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight leading-tight">
          Join our community to be the first to test new features<br className="hidden md:block" />
          and share your ideas directly with our team.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button 
            type="button" 
            className="red-button bg-red-600 hover:bg-red-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all active:scale-95 shadow-xl shadow-red-900/20"
            onClick={() => window.open('https://chat.whatsapp.com/J81X10Y1W1V1V1V1V1V1V', '_blank')}
          >
            Join WhatsApp Group
          </button>
        </div>
        <p className="mt-8 text-zinc-500 text-sm font-medium uppercase tracking-widest">
            Direct access to the founders & exclusive updates
        </p>
      </div>
    </section>
  );
}
