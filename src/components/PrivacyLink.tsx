"use client";

import Link from "next/link";

export function PrivacyLink() {
  return (
    <Link
      href="/privacy"
      className="fixed bottom-4 right-4 text-xs font-mono text-muted-foreground/50 hover:text-muted-foreground transition-colors hidden md:block z-40"
    >
      Politique de confidentialité
    </Link>
  );
}
