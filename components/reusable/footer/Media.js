import {
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaPinterestSquare,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export default function Media() {
  return (
    <div className=" flex flex-col items-start justify-center space-y-8">
      <div className="flex items-center justify-center gap-4">
        <a className="flex items-center justify-center gap-2  border border-black px-2 py-1 cursor-pointer">
          <FaApple size="1.5rem" />
          <div className="flex flex-col items-start justify-center">
            <span className=" text-[0.5rem] text-slate-800">
              Download on the
            </span>
            <span className="text-sm font-bold">App Store</span>
          </div>
        </a>
        <a className="flex items-center justify-center gap-2 border border-black px-2 py-1 cursor-pointer">
          <FaGooglePlay size="1.5rem" />
          <div className="flex flex-col items-start justify-center">
            <span className="text-[0.5rem] text-slate-800">Get in on</span>
            <span className="text-sm font-bold">Google Play</span>
          </div>
        </a>
      </div>
      <a className=" text-sm cursor-pointer uppercase hover:underline border-b-2 border-black font-semibold ">
        Sign Up For Mobile Alerts
      </a>
      <a className=" text-sm cursor-pointer uppercase hover:underline border-b-2 border-black font-semibold ">
        Sign up for email
      </a>
      <div className="flex items-center justify-center gap-5">
        <a className=" cursor-pointer">
          <FaInstagram size="1.5rem" />
        </a>
        <a className=" cursor-pointer">
          <FaFacebook size="1.5rem" />
        </a>
        <a className=" cursor-pointer">
          <FaTiktok size="1.5rem" />
        </a>
        <a className=" cursor-pointer">
          <FaYoutube size="1.5rem" />
        </a>
        <a className=" cursor-pointer">
          <FaLinkedin size="1.5rem" />
        </a>
        <a className=" cursor-pointer">
          <FaPinterestSquare size="1.5rem" />
        </a>
      </div>
    </div>
  );
}
