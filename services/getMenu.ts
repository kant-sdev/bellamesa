import { drinks } from "@/data/drinks";
import { entradas } from "@/data/entradas";
import { pizzas } from "@/data/pizzas";
import { pratosPrincipais } from "@/data/pratos-principais";
import { primeirosPratos } from "@/data/primeiros-pratos";
import { sobremesas } from "@/data/sobremesas";


export const getEntradas = () => {
    return entradas
}
export const getPratosIniciais = () => {
    return primeirosPratos
}
export const getPratosPrincipais = () => {
    return pratosPrincipais
}
export const getSobremesas = () => { 
    return sobremesas
}
export const getDrinks = () => {
    return drinks
}
export const getPizzas = () => {
    return pizzas
}

