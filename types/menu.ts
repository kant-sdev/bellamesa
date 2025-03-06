export type MenuItem = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    categoria: string;
    image: string;
};

export type MenuCategory = {
    entradas: MenuItem[];
    primeiroPrato: MenuItem[];
    pratoPrincipal: MenuItem[];
    sobremesas: MenuItem[];
    drinks: MenuItem[],
    pizzas: MenuItem[]
};

export type MenuGeneral = MenuCategory;