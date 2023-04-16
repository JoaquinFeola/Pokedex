import { Navigate,  Route,  Routes } from "react-router-dom"
import { Navbar } from "../ui/components/navbar/Navbar"
import { HomePage } from "../ui/pages/HomePage"
import { Footer } from "../ui/components/footer/Footer"
import { PokemonPage } from "../pokedex/pages/PokemonPage"
import { NotFound } from "../ui/components/404/NotFound";
import { SearchPage } from "../pokedex/pages/SearchPage";
import { Suspense, lazy } from "react"
const PokedexContent = lazy(() => import('../pokedex/pages/PokedexContent'));

export const AppRouter = () => {
  return (
    <>
        <Navbar />
          <Routes>
              <Route path="/" element={ <HomePage /> } />
              <Route path="/pokedex" element={ 
                <Suspense fallback={<h2 className="content-page-container">Loading...</h2>}>
                  <PokedexContent/> 
                </Suspense>
              } />
              <Route path="/pokedex/:pokemonId" element={ <PokemonPage /> } />
              <Route path="/search" element={ <SearchPage/> } />
              <Route path="/*" element={<NotFound />} />
          </Routes>
        <Footer />
    </>
  )
}
