import React from 'react'
import { Separator } from '@/components/ui/separator'
import { getDrinks, getEntradas, getPizzas, getPratosIniciais, getPratosPrincipais, getSobremesas } from '@/services/getMenu'
import MenuLogged from './MenuLogged'


export default function Menu() {
    const entradas = getEntradas()
    const pratosIniciais = getPratosIniciais()
    const pratosPrincipais= getPratosPrincipais()
    const sobremesas = getSobremesas()
    const drinks = getDrinks()
    const pizzas = getPizzas()

    return (
        <section className='w-full lg:min-h-screen p-4 flex justify-center'>
            <div className="container relative mt-20  p-2 ">
                <h2 className="text-black font-playfair text-2xl md:text-3xl font-bold">
                    Cardápio
                </h2>
                <Separator className='border-2 rounded-full my-2 border-black' />
                <div className='py-2'>
                    <MenuLogged data={entradas} categoria='Entradas'/>
                    <MenuLogged data={pratosIniciais} categoria='Pratos Iniciais' />
                    <MenuLogged data={pratosPrincipais} categoria='Pratos Principais'/>
                    <MenuLogged data={pizzas} categoria='Pizzas' />
                    <MenuLogged data={drinks} categoria='Bebidas' />
                    <MenuLogged data={sobremesas} categoria='Sobremesas'/>
                </div>
            </div>
        </section>
    )
}