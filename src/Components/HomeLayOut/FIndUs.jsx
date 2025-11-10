import React from "react";
import fbLogo from "../../assets/fb.png";
import xLogo from "../../assets/twitter.png"; // make sure you have an X/Twitter logo
import instaLogo from "../../assets/instagram.png";

const FindUs = () => {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-center mb-3">Find Us On</h2>
      <div className="flex flex-col">
        {/* Facebook */}
        <a
          className="flex items-center gap-2 border border-[#1877F2] hover:bg-[#1877F2] hover:text-white transition-colors p-2 rounded mb-2 justify-center"
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={fbLogo} alt="Facebook Logo" className="w-5 h-5 rounded-full" />
          Facebook
        </a>

        {/* Twitter (X) */}
        <a
          className="flex items-center gap-2 border border-black hover:bg-black hover:text-white transition-colors p-2 rounded mb-2 justify-center"
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={xLogo} alt="X Logo" className="w-5 h-5 rounded-full" />
          X (Twitter)
        </a>

        {/* Instagram */}
        <a
          className="flex items-center gap-2 border border-[#E4405F] hover:bg-[#E4405F] hover:text-white transition-colors p-2 rounded justify-center"
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instaLogo} alt="Instagram Logo" className="w-5 h-5 rounded-full" />
          Instagram
        </a>
      </div>
    </div>
  );
};

export default FindUs;
