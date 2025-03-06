import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MenuItem } from "@/types/menu"
import Image from "next/image";

interface ConteudoCategoriaProps {
    categoria: { id: number; nome: string }
    produtos: MenuItem[]
}

export function ConteudoCategoria({ categoria, produtos }: ConteudoCategoriaProps) {
    return (
        <div className="flex-1">
            <div className="w-full h-full">
                <div>
                    <h2 className="text-2xl lg:text-3xl px-4 font-extrabold">{categoria.nome}</h2>
                </div>
                <div className="p-4">
                    {produtos.length > 0 ? (
                        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {produtos.map((produto) => (
                                <Card key={produto.id} className="">
                                    <CardHeader>
                                        <div className="w-full ">
                                            <Image
                                                src={produto.image}
                                                alt={produto.nome}
                                                width={400}
                                                height={0}
                                                className="object-cover rounded-md w-full"
                                            />
                                        </div>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <CardTitle className="text-lg lg:text-xl font-bold">{produto.nome}</CardTitle>
                                        <CardDescription className="lg:text-md">{produto.descricao}</CardDescription>
                                    </CardContent>
                                    <CardFooter className="">
                                        <p className="text-xl font-bold ">{produto.preco.toLocaleString("pt-BR", {style: "currency",currency: "EUR",})}</p>
                                    </CardFooter>
                                </Card>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-center text-muted-foreground">Nenhum item disponível.</p>
                    )}
                </div>
            </div>
        </div>
    )
}
