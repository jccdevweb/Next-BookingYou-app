'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();
  return (
    <div className="flex items-center"><Image alt="Logo" className="hidden md:block cursor-pointer" height="25" width="25" src="/images/logo-white.png"  
    />
    <p className="hidden md:block">ook<span className="text-red-700">You</span></p>
    </div>
  )
}

export default Logo