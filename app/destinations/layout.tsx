import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vista Safari | Destinations',
};

export default function DestinationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
