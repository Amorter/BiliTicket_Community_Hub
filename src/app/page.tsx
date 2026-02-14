import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { AppShowcase } from '@/components/AppShowcase'
import { CommunityInfo } from '@/components/CommunityInfo'
import { RegisterPrompt } from '@/components/RegisterPrompt'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AppShowcase />
        <CommunityInfo />
        <RegisterPrompt />
      </main>
      <Footer />
    </>
  )
}
