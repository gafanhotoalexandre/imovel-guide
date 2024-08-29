import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { RuleOfThreeCalculator } from './components/RuleOfThreeCalculator'
import { PeopleCard } from './components/PeopleCard'
import { SendMessageCard } from './components/SendMessageCard'
import { HouseCard } from './components/HouseCard'

export default function App() {
  return (
    <div>
      <Header />

      <main>
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <section className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <PeopleCard />
            <SendMessageCard />
            <RuleOfThreeCalculator />
            <HouseCard />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  )
}
