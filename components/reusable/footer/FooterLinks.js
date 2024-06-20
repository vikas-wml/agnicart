import React from "react";

export default function FooterLinks() {
  return (
    <div>
      <div className="hidden lg:block">
        <div className=" flex items-center justify-center gap-2 lg:absolute right-0 bottom-20">
          <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
            Terms & Conditions
          </a>
          <span className="text-slate-900">|</span>
          <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
            Accessibility
          </a>
          <span className="text-slate-900">|</span>
          <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
            About Ads
          </a>
          <span className="text-slate-900">|</span>
          <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
            Privacy Policy
          </a>
          <span className="text-slate-900">|</span>
          <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
            Do Not Sell Or Share My Personal Information
          </a>
          <span className="text-slate-900">|</span>
          <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
            Site Map
          </a>
          <span className="text-slate-900">|</span>
          <a className="text-xs text-slate-900">
            © 2024 Express. All rights reserved.
          </a>
        </div>
      </div>
      <div className="hidden md:block lg:hidden">
        <div className="flex flex-col items-center justify-center gap-2 lg:absolute right-0 bottom-20">
          <div className="flex items-center justify-center gap-2  ">
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Terms & Conditions
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Accessibility
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              About Ads
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Privacy Policy
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Do Not Sell Or Share My Personal Information
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Site Map
            </a>
          </div>
          <div className="flex items-center justify-center gap-2  ">
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-900">
              © 2024 Express. All rights reserved.
            </a>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <div className=" flex flex-col items-center justify-center gap-2 lg:absolute right-0 bottom-20">
          <div className="flex items-center justify-center gap-2  ">
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Terms & Conditions
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Accessibility
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              About Ads
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Privacy Policy
            </a>
          </div>
          <div className="flex items-center justify-center gap-2  ">
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Do Not Sell Or Share My Personal Information
            </a>
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-600 hover:text-slate-900 hover:underline cursor-pointer">
              Site Map
            </a>
          </div>
          <div className="flex items-center justify-center gap-2  ">
            <span className="text-slate-900">|</span>
            <a className="text-xs text-slate-900">
              © 2024 Express. All rights reserved.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
