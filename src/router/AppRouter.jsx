import { Navigate, Route, Routes } from "react-router-dom"
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
        <Routes>
            <Route path="home" element={ <HomePage /> } />
            <Route path="pokedex" element={ <PokedexContent/> } />

            <Route path="pokedex/:pokemonId" element={ <PokemonPage /> } />

            <Route path="/" element={<Navigate to={"home"}/>} />
            <Route path="*" element={<NotFound />} />
            {/* <Route path="pokemon/" element={<NotFound />} /> */}
        </Routes>
        <Footer />
    </>
  )
}
