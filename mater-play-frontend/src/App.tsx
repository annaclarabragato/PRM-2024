import { useEffect, useState } from 'react'
import Footer from './app/components/Footer'
import Header from './app/components/Header'
import HighLightSection from './app/components/HighlightSection'
import Section from './app/components/Section'
import { CategoryService } from './app/services/category-service'
import { ICategory } from './app/@libs/types'

function App() {

  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(()=>{
    CategoryService.getAll()
      .then(result => {
        console.log('=>', result)
        setCategories(result.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, []);

  return (
    
    <div className="wrapper">
        <Header />
        <main style ={{marginTop: '8rem'}}>
            <HighLightSection/>
            {
              categories.map(item => (
                <Section key={item.id} category ={item}/>
              ))
            }

        </main>
        <Footer></Footer>
    </div>

  )
}

export default App