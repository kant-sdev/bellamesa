import React from 'react'
import { Separator } from '@/components/ui/separator'
import MenuCategorias from './MenuCategoria'

export default function Menu() {

    return (
        <section className='w-full lg:min-h-screen p-4 flex justify-center'>
            <div className="container relative mt-20  p-2 ">
                <div className="mx-auto  flex flex-col justify-start items-start relative z-10 py-4">
                    <h1 className="text-2xl md:text-4xl font-bold mb-4 text-start">Nosso Cardápio</h1>
                </div>
                <div className='py-2'>
                    <MenuCategorias/>
                </div>
            </div>
        </section>
    )
}