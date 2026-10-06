import { CookingProgress } from '@/components/bitehack/cooking-progress'
import { ForkCursor } from '@/components/bitehack/fork-cursor'
import { IntroCloche } from '@/components/bitehack/intro-cloche'
import { Navbar } from '@/components/bitehack/navbar'
import { ScrollBackground } from '@/components/bitehack/scroll-background'
import { SmoothScroll } from '@/components/bitehack/smooth-scroll'
import { Bakery } from '@/components/sections/bakery'
import { Fire } from '@/components/sections/fire'
import { Footer } from '@/components/sections/footer'
import { Harvest } from '@/components/sections/harvest'
import { Hero } from '@/components/sections/hero'
import { HowItWorks } from '@/components/sections/how-it-works'
import { Ingredients } from '@/components/sections/ingredients'
import { Judges } from '@/components/sections/judges'
import { Prizes } from '@/components/sections/prizes'
import { Protein } from '@/components/sections/protein'
import { Register } from '@/components/sections/register'
import { Schedule } from '@/components/sections/schedule'
import { Sweet } from '@/components/sections/sweet'

export default function Page() {
  return (
    <SmoothScroll>
      <IntroCloche />
      <ScrollBackground />
      <CookingProgress />
      <ForkCursor />
      <Navbar />
      <main>
        <Hero />
        <Ingredients />
        <Fire />
        <Harvest />
        <Bakery />
        <Protein />
        <Sweet />
        <HowItWorks />
        <Judges />
        <Prizes />
        <Schedule />
        <Register />
      </main>
      <Footer />
    </SmoothScroll>
  )
}
