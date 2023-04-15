import { Navigate,  Route,  Routes } from "react-router-dom"
import { Navbar } from "../ui/components/navbar/Navbar"
import { PokedexContent } from "../pokedex/pages/PokedexContent"
import { HomePage } from "../ui/pages/HomePage"
import { Footer } from "../ui/components/footer/Footer"
import { PokemonPage } from "../pokedex/pages/PokemonPage"
import { NotFound } from "../ui/components/404/NotFound"

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        {/* <Router> */}
          <Routes>
              <Route path="/" element={ <HomePage /> } />
              <Route path="/pokedex" element={ <PokedexContent/> } />
              <Route path="/pokedex/:pokemonId" element={ <PokemonPage /> } />

              <Route path="/*" element={<NotFound />} />
          </Routes>
        {/* </Router> */}
        <Footer />
    </>
  )
}
