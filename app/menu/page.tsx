import Footer from '@/components/layout/Footer/Footer'
import HeaderLogged from '@/components/layout/Header/HeaderLogged'
import Menu from '@/components/layout/MenuFood/Menu'
import { getMenu } from '@/services/menu'
import React from 'react'

export default async function page() {
    
    const menu = await getMenu()

    return (
        <main className='min-h-screen'>
            <HeaderLogged/>
            <Menu menu={menu}/>
            <Footer/>
        </main>
    )
}
