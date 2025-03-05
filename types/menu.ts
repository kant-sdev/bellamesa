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
    drinks: {
        alcohol: MenuItem[];
        no_alcohol: MenuItem[];
    };
    pizzas: {
        tradicionais: MenuItem[];
        especiais: MenuItem[];
        premium: MenuItem[];
    };
};

export type MenuGeneral = MenuCategory;
