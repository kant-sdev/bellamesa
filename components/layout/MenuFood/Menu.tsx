
import { MenuGeneral } from '@/types/menu'
import React from 'react'
import MenuSimple from './MenuSimple'
import { Separator } from '@/components/ui/separator'

type Props = {
  menu: MenuGeneral[],
}
export default function Menu({ menu }: Props) {
  const isLogged = false 
  const categoryes = Object.keys(menu)

  return (
    <section className='w-full min-h-screen p-4 flex justify-center'>
      <div className="container relative mt-20  p-2 ">
        <h2 className="text-black font-playfair text-2xl md:text-3xl font-bold">
          Cardápio
        </h2>
        <Separator className='border-2 rounded-full my-2 border-black'/>
        <div className='py-2'>
          {
            isLogged ? (
            <p>aguarde</p>
          ) : (
            <MenuSimple category={categoryes} />
          )
          }
        </div>
      </div>
    </section>
  )
}
