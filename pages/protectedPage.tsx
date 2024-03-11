//create a protected page using taliwindcss
// Path: pages/protectedPage.tsx

import Link from "next/link";

export default function ProtectedPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <div className="text-2xl font-bold max-w-[1000px] text-center">
            Opps.....This is a protected page. You can only see this if you are logged in.
            </div>
           <Link href="/login" className="text-xl underline underline-offset-3 text-blue-500">Login</Link>
        </div>
    );
    }
