import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Über Julia Weikinn – Freie Designerin in München',
  description: 'Julia Weikinn – freie Designerin in München. Über Werdegang, Arbeitsweise und was mir bei der Arbeit wichtig ist.',
  alternates: {
    canonical: 'https://weikinn.design/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
