"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

type Categoria = {
    id: number
    nome: string
    quantidade: number
}

interface SidebarProps {
    categorias: Categoria[]
    categoriaSelecionadaId: number
    onSelecionarCategoria: (id: number) => void
}

export function Sidebar({ categorias, categoriaSelecionadaId, onSelecionarCategoria }: SidebarProps) {
    return (
        <Card className="w-full md:w-72 shrink-0 h-[26rem] py-2">
            <CardHeader>
                <CardTitle className="text-xl font-bold lg:text-2xl pt-2">Categorias</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
                <ul className="">
                    {categorias.map((categoria) => {
                        const isSelected = categoriaSelecionadaId === categoria.id
                        return (
                            <li
                                key={categoria.id}
                                onClick={() => onSelecionarCategoria(categoria.id)}
                                className={`flex justify-between items-center px-6 py-4 cursor-pointer hover:bg-muted/50 transition-colors rounded-md ${
                                    isSelected ? "bg-primary/10 font-medium" : ""
                                }`}
                            >
                                <span>{categoria.nome}</span>
                                <span
                                    className={`px-2 py-1 rounded-full text-xs ${
                                        isSelected ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                                    }`}
                                >
                                    {categoria.quantidade}
                                </span>
                            </li>
                        )
                    })}
                </ul>
            </CardContent>
        </Card>
    )
}
