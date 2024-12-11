import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
// either Static metadata
export const metadata: Metadata = {
  title: 'Home'
}

export default function Home() {
  // notFound()
  return (
    <div className="">
      Home
    </div>
  );
}
