import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vista Safari | Destination Details',
};

export default function DestinationDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
