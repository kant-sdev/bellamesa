import React from 'react'
import CardProduto from '../Cards/CardProduto';

type Props = {
    category: string[],
}

export default function MenuSimple({ category }: Props) {

    // Função para formatar os nomes das categorias
    const formatCategoryName = (name: string) => {
        return name
            .replace(/([A-Z])/g, ' $1') // Adiciona espaço antes de letras maiúsculas
            .trim() // Remove espaços extras no início ou fim
            .replace(/^./, (str) => str.toUpperCase()); // Capitaliza a primeira letra
    }

    return (
        <div className='space-y-4'>
            {
                category.map(item => (
                    <div key={item}>
                        <h3 className='text-2xl font-bold'>{formatCategoryName(item)}</h3>
                        <CardProduto category={formatCategoryName(item)}/>
                    </div>
                ))
            }
        </div>
    )
}
