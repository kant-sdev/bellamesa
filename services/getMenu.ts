import { entradas } from "@/data/entradas"
import { pizzas } from "@/data/pizzas"
import { sobremesas } from "@/data/sobremesas"
import { drinks } from "@/data/drinks"
import { pratosIniciais } from "@/data/primeirosPratos"
import { pratosPrincipais } from "@/data/pratosPrincipais"

const menuMap: Record<string, any[]> = {
    "Entradas": entradas,
    "Pratos Iniciais": pratosIniciais,
    "Pratos Principais": pratosPrincipais,
    "Sobremesas": sobremesas,
    "Pizzas": pizzas,
    "Drinks": drinks
}

export const Menu = (categoria: string) => menuMap[categoria] || []
