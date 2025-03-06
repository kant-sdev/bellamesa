import { entradas } from "@/data/entradas"
import { pizzas } from "@/data/pizzas"
import { pratosPrincipais } from "@/data/pratos-principais"
import { pratosIniciais } from "@/data/primeiros-pratos"
import { sobremesas } from "@/data/sobremesas"
import { drinks } from "@/data/drinks"

const menuMap: Record<string, any[]> = {
    "Entradas": entradas,
    "Pratos Iniciais": pratosIniciais,
    "Pratos Principais": pratosPrincipais,
    "Sobremesas": sobremesas,
    "Pizzas": pizzas,
    "Drinks": drinks
}

export const useMenu = (categoria: string) => menuMap[categoria] || []
