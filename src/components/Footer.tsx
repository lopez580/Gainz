export default function Footer() {
  return (
    <footer className="bg-black dark:bg-[#000000] py-24 border-t border-white/5 mt-24">
      <div className="flex flex-col w-full px-8 md:px-24 max-w-screen-2xl mx-auto space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-6">
            <div className="text-6xl md:text-8xl font-black italic tracking-tighter text-white leading-none mb-6">
              GAINZ
            </div>
            <p className="font-body text-slate-500 max-w-md text-lg">
              Uncompromising precision in performance nutrition and elite
              fitness tracking systems.
            </p>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h5 className="font-['Space_Grotesk'] font-black tracking-[0.2em] uppercase text-white text-sm">
              Platform
            </h5>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-500 hover:text-blue-400 hover:translate-x-1 duration-300 transition-transform block"
                  href="#"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-500 hover:text-blue-400 hover:translate-x-1 duration-300 transition-transform block"
                  href="#"
                >
                  Workouts
                </a>
              </li>
              <li>
                <a
                  className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-500 hover:text-blue-400 hover:translate-x-1 duration-300 transition-transform block"
                  href="#"
                >
                  Nutrition
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h5 className="font-['Space_Grotesk'] font-black tracking-[0.2em] uppercase text-white text-sm">
              Company
            </h5>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-500 hover:text-blue-400 hover:translate-x-1 duration-300 transition-transform block"
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-500 hover:text-blue-400 hover:translate-x-1 duration-300 transition-transform block"
                  href="#"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-500 hover:text-blue-400 hover:translate-x-1 duration-300 transition-transform block"
                  href="#"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-2 space-y-6">
            <h5 className="font-['Space_Grotesk'] font-black tracking-[0.2em] uppercase text-white text-sm">
              Resources
            </h5>
            <ul className="flex flex-col space-y-4">
              <li>
                <a
                  className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-500 hover:text-blue-400 hover:translate-x-1 duration-300 transition-transform block"
                  href="#"
                >
                  Community
                </a>
              </li>
              <li>
                <a
                  className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-500 hover:text-blue-400 hover:translate-x-1 duration-300 transition-transform block"
                  href="#"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  className="font-['Manrope'] text-xs tracking-widest uppercase text-slate-500 hover:text-blue-400 hover:translate-x-1 duration-300 transition-transform block"
                  href="#"
                >
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-['Manrope'] text-[10px] tracking-widest uppercase text-slate-500">
            © 2024 GAINZ PERFORMANCE SYSTEMS. UNCOMPROMISING PRECISION.
          </div>
          <div className="flex gap-8">
            <a
              className="font-['Manrope'] text-[10px] tracking-widest uppercase text-slate-500 hover:text-white transition-all duration-500"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="font-['Manrope'] text-[10px] tracking-widest uppercase text-slate-500 hover:text-white transition-all duration-500"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
