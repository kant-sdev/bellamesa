import Footer from '@/components/layout/Footer/Footer'
import HeaderLogged from '@/components/layout/Header/HeaderLogged'
import Menu from '@/components/layout/Menu/Menu'
import React from 'react'

export default  function page() {
    
    return (
        <main className=''>
            <HeaderLogged/>
            <Menu/>
            <Footer/>
        </main>
    )
}