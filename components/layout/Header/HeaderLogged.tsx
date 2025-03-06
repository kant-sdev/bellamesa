import { Button } from '@/components/ui/button'
import { LogOutIcon } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function HeaderLogged() {

    const name = 'jãozin'
    const isLogged = false

    return (
        <header className='w-full fixed z-10 transition-all duration-300 bg-black backdrop-blur-sm py-3'>
            <div className="container mx-auto px-4 flex justify-between items-center py-3">
                {
                    isLogged ? (
                        <h2 className="text-white font-playfair text-2xl md:text-3xl font-bold">
                            <span className="text-primary">Bella</span> Mesa
                        </h2>
                    ) : (
                        <Link href={'/'} className="text-white font-playfair text-2xl md:text-3xl font-bold">
                            <span className="text-primary">Bella</span> Mesa
                        </Link>
                    )
                }



                {
                    isLogged ? (
                        <div className='flex items-center  gap-6'>
                            <p className='text-primary font-semibold text-lg'>Bem vindo {name}</p>
                            <Button className='btn-primary text-lg  font-bold'><LogOutIcon />Sair</Button>
                        </div>
                    ) : (
                        <div className='flex items-center  gap-6'>
                            <Button className='btn-primary text-lg  font-bold'>Login</Button>
                        </div>
                    )
                }
            </div>
        </header>
    )
}