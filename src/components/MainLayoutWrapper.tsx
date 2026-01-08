"use client";

import { useSession } from "@/lib/auth-client";
import { LeftSidebar } from "@/components/LeftSidebar";
import { usePathname } from "next/navigation";

export function MainLayoutWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();
  const isAuthenticated = !!session?.user;

  // Pages où on ne veut pas afficher la sidebar
  const noSidebarPages = ["/auth", "/signUp", "/signIn"];
  const shouldShowSidebar = isAuthenticated && !noSidebarPages.some(page => pathname.startsWith(page));

  if (!shouldShowSidebar) {
    return <>{children}</>;
  }

  return (
    <div className="flex">
      {/* Sidebar masquée sur mobile (< md) */}
      <div className="hidden md:block">
        <LeftSidebar userId={session!.user.id} />
      </div>
      <main className="flex-1">
        {children}
      </main>
    </div>
  );
}
