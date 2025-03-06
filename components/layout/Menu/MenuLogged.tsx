'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MenuItem } from "@/types/menu";
import Image from "next/image";
import React  from "react";

type Props = {
    data: MenuItem[];
    categoria: string;
};

export default function MenuLogged({ data, categoria }: Props) {
    return (
        <>
            <section className="">
                <div className="container">
                    <Accordion type="single" collapsible className="w-full" >
                        <AccordionItem value={categoria}>
                            <AccordionTrigger className="text-2xl font-bold p-4">{categoria}</AccordionTrigger>
                            <AccordionContent>
                                <div className="space-y-8 lg:grid lg:grid-cols-5 lg:gap-6">
                                    {data.map((item) => (
                                        <Card key={item.id} className="lg:h-[22rem]">
                                            <CardHeader>
                                                <Image
                                                    src={item.image}
                                                    alt="Chef do Bella Mesa preparando um prato"
                                                    width={400}
                                                    height={300}
                                                    className="object-cover rounded-md"
                                                />
                                            </CardHeader>
                                            <CardContent className="space-y-2">
                                                <CardTitle>{item.nome}</CardTitle>
                                                <CardDescription className="line-clamp-2">{item.descricao}</CardDescription>
                                                <div className="flex justify-between items-center">
                                                    <div className="text-2xl font-bold">
                                                        {item.preco.toLocaleString("pt-BR", { style: "currency", currency: "EUR" })}
                                                    </div>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </>
    );
}
