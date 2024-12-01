"use client"
import { useState, useEffect } from "react";
import MobileFooter from "./MobileFooter";
import DesktopFooter from "./desktopfooter";

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile ? <MobileFooter /> : <DesktopFooter />;
}
