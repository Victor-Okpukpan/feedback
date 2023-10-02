export default function Header() {
  return (
    <header className="py-6 px-[100px]">
      <div className="hidden md:flex items-center justify-between mx-auto max-w-screen-lg">
        <div className="flex items-center space-x-2">
          <img
            src="/assets/logo.svg"
            alt="logo"
            className="h-[28px] w-[28px] object-contain overflow-hidden"
          />
          <p className="text-base font-bold">HelpMeOut</p>
        </div>

        <div className="py-[10px] px-[20px] font-medium font-work-sans">
            <ul className="flex items-center justify-center gap-[40px]">
                <li>Features</li>
                <li>How It Works</li>
            </ul>
        </div>

        <div className="">
            <button className="flex items-start py-4 px-10 rounded-lg text-[#120B48] font-semibold font-sora">
                Get Started
            </button>
        </div>
      </div>
    </header>
  );
}
