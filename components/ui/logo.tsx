"use client";

import { useTheme } from "next-themes";
import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div className={`relative ${className}`}>
      <Image
        src={isDark ? "/logo-dark.png" : "/logo-light.png"}
        alt="Eunoia Solutions Logo"
        width={55}
        height={40}
        className="object-contain"
        priority
      />
    </div>
  );
}