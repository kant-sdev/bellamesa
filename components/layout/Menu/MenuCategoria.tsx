"use client"

import { useState } from "react"
import { Sidebar } from "../Cards/Sidebar"
import { ConteudoCategoria } from "./Conteudo"
import { useMenu } from "@/services/getMenu"

type Categoria = {
    id: number
    nome: string
}

const categorias: Categoria[] = [
    { id: 1, nome: "Entradas" },
    { id: 2, nome: "Pratos Iniciais" },
    { id: 3, nome: "Pratos Principais" },
    { id: 4, nome: "Sobremesas" },
    { id: 5, nome: "Pizzas" },
    { id: 6, nome: "Drinks" },
]

export default function MenuCategorias() {
    const [categoriaSelecionadaId, setCategoriaSelecionadaId] = useState<number>(categorias[0].id)
    const categoriaSelecionada = categorias.find((c) => c.id === categoriaSelecionadaId)!
    const produtos = useMenu(categoriaSelecionada.nome)

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <Sidebar
                categorias={categorias.map((categoria) => ({
                    ...categoria,
                    quantidade: useMenu(categoria.nome).length, 
                }))}
                categoriaSelecionadaId={categoriaSelecionadaId}
                onSelecionarCategoria={setCategoriaSelecionadaId}
            />
            <ConteudoCategoria categoria={categoriaSelecionada} produtos={produtos} />
        </div>
    )
}
