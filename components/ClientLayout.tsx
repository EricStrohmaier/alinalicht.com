"use client";

import useMediaQuery from "@/hooks/useMediaQuery";

interface ClientLayoutProps {
  children: React.ReactNode;
  mobileContent: React.ReactNode;
}

export default function ClientLayout({
  children,
  mobileContent,
}: ClientLayoutProps) {
  const isDesktop = useMediaQuery({
    query: "(min-width: 1024px)",
  });

  return isDesktop ? children : mobileContent;
}
