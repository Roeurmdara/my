import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center p-6">
      <div className="border-[3px] border-[#090909] bg-white p-8 sm:p-12 max-w-md w-full shadow-[8px_8px_0px_#090909]">
        <span className="font-mono text-5xl font-black text-[#090909] block mb-2">404</span>
        <h2 className="font-sans text-xl font-black uppercase text-[#090909] mb-2">
          PAGE NOT FOUND
        </h2>
        <p className="font-mono text-xs text-[#555555] mb-6 uppercase">
          The requested route does not exist or has been relocated.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 border-2 border-[#090909] bg-[#C5F451] px-5 py-2.5 font-mono text-xs font-black uppercase text-[#090909] shadow-[3px_3px_0px_#090909] hover:bg-[#FF789D] hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[5px_5px_0px_#090909] transition-all"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>RETURN HOME</span>
        </Link>
      </div>
    </div>
  );
}
