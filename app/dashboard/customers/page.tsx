'use client';
import { usePathname } from "next/navigation";

export default function page() {
    let pathname = usePathname();

    return (
        <div>
            <p className="pb-2">
                {pathname.split("/").join(" / ").toLocaleUpperCase()}
            </p>
            <h1 className="text-3xl font-bold">Customers</h1>
            <p className="mt-2 text-sm text-gray-500">
                This is the customers page. You can manage your customers here.
            </p>
        </div>
    )
}