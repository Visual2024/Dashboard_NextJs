'use client'
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  return (
    <div>
      <p className="pb-2">
        {pathname.split("/").join(" / ").toLocaleUpperCase()}
      </p>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-2 text-sm text-gray-500">
        This is the dashboard page. You can manage your dashboard here.
      </p>
    </div>
  )
}