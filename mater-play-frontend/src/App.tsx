import Footer from './app/components/Footer'
import Header from './app/components/Header'
import HighlightSection from './app/components/HighlightSection'
import Section from './app/components/Section'

function App() {

  return (
    
    <div className="wrapper">
        <Header />
        <main
        style = {{
          marginTop: '8rem'
        }}>
          <HighlightSection />
          <Section title = "Recomendados para você"/>
          <Section title = "Para Toda Família" />
        </main>
        <Footer></Footer>
    </div>

  )
}

export default App