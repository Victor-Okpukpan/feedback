export default function Footer() {
  return (
    <footer className="py-[98px] px-[130px] bg-[#120B48] text-white">
      <div className="flex items-start gap-[243px] w-max mx-auto">
        <div className="flex items-center space-x-2">
          <img
            src="/assets/logof.svg"
            alt="logo"
            className="h-[28px] w-[28px] object-contain overflow-hidden"
          />
          <p className="text-base font-bold">HelpMeOut</p>
        </div>

        <div className="flex items-start gap-32">
          <div className="">
            <h2 className="font-semibold mb-6 font-sora">Menu</h2>
            <ul className="flex flex-col space-y-6 font-work-sans">
              <li>Home</li>
              <li>Converter</li>
              <li>How it works</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-semibold mb-6 font-sora">About Us</h2>
            <ul className="flex flex-col space-y-6 font-work-sans">
              <li>About</li>
              <li>Contact Us</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

          <div className="">
            <h2 className="font-semibold mb-6 font-sora">Screen Record</h2>
            <ul className="flex flex-col space-y-6 font-work-sans">
              <li>Browser Window</li>
              <li>Desktop</li>
              <li>Application</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
