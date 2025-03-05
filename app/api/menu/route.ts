import { MenuCategory, MenuGeneral } from "@/types/menu"
import { NextResponse } from "next/server"

const menu: MenuGeneral = {
    "entradas": [
        {
            "id": 1,
            "nome": "Bruschetta Tradizionale",
            "descricao": "Pão italiano tostado com tomate, manjericão e azeite de oliva.",
            "preco": 15.00,
            "categoria": "Entradas",
            image: '/entrada/entrada.jpg'
        },
        {
            "id": 2,
            "nome": "Carpaccio di Manzo",
            "descricao": "Fatias finas de filé-mignon com rúcula, parmesão e molho de mostarda.",
            "preco": 20.00,
            "categoria": "Entradas",
            "image": '/entrada/entrada.jpg'
        },
        {
            "id": 3,
            "nome": "Arancini di Riso",
            "descricao": "Bolinhos de risoto recheados com queijo e fritos até ficarem dourados.",
            "preco": 18.00,
            "categoria": "Entradas",
            "image": '/entrada/entrada.jpg'
        },
        {
            "id": 4,
            "nome": "Focaccia al Rosmarino",
            "descricao": "Pão italiano macio com alecrim, sal grosso e azeite de oliva.",
            "preco": 12.00,
            "categoria": "Entradas",
            "image": '/entrada/entrada.jpg'
        },
        {
            "id": 5,
            "nome": "Insalata Caprese",
            "descricao": "Tomates frescos, mussarela de búfala, manjericão e azeite balsâmico.",
            "preco": 18.00,
            "categoria": "Entradas",
            "image": '/entrada/entrada.jpg'
        },
        {
            "id": 6,
            "nome": "Prosciutto e Melone",
            "descricao": "Fatias de presunto Parma com melão fresco.",
            "preco": 22.00,
            "categoria": "Entradas",
            "image": '/entrada/entrada.jpg'
        },
        {
            "id": 7,
            "nome": "Zuppa di Pomodoro",
            "descricao": "Sopa cremosa de tomate com toque de manjericão.",
            "preco": 14.00,
            "categoria": "Entradas",
            "image": '/entrada/entrada.jpg'
        },
        {
            "id": 8,
            "nome": "Olive all’Ascolana",
            "descricao": "Azeitonas recheadas com carne moída e empanadas.",
            "preco": 16.00,
            "categoria": "Entradas",
            "image": '/entrada/entrada.jpg'
        },
        {
            "id": 9,
            "nome": "Funghi Trifolati",
            "descricao": "Cogumelos salteados com alho, vinho branco e salsinha.",
            "preco": 17.00,
            "categoria": "Entradas",
            "image": '/entrada/entrada.jpg'
        },
        {
            "id": 10,
            "nome": "Tagliere di Formaggi e Salumi",
            "descricao": "Tábua com queijos e embutidos italianos.",
            "preco": 25.00,
            "categoria": "Entradas",
            "image": '/entrada/entrada.jpg'
        }
    ],
    "primeiroPrato": [
        {
            "id": 1,
            "nome": "Spaghetti alla Carbonara",
            "descricao": "Massa com molho cremoso de ovos, pancetta e parmesão.",
            "preco": 28.00,
            "categoria": "Massas",
            "image": '/primeiros/primeiro-prato.jpg'
        },
        {
            "id": 2,
            "nome": "Fettuccine Alfredo",
            "descricao": "Massa fresca com molho cremoso de parmesão e manteiga.",
            "preco": 26.00,
            "categoria": "Massas",
            "image": '/primeiros/primeiro-prato.jpg'
        },
        {
            "id": 3,
            "nome": "Ravioli di Ricotta e Spinaci",
            "descricao": "Massa recheada com ricota e espinafre ao molho de manteiga e sálvia.",
            "preco": 30.00,
            "categoria": "Massas",
            "image": '/primeiros/primeiro-prato.jpg'
        },
        {
            "id": 4,
            "nome": "Lasagna alla Bolognese",
            "descricao": "Camadas de massa intercaladas com ragu de carne e bechamel.",
            "preco": 32.00,
            "categoria": "Massas",
            "image": '/primeiros/primeiro-prato.jpg'
        },
        {
            "id": 5,
            "nome": "Risotto ai Funghi Porcini",
            "descricao": "Risoto cremoso com cogumelos porcini e parmesão.",
            "preco": 34.00,
            "categoria": "Risotos",
            "image": '/primeiros/primeiro-prato.jpg'
        },
        {
            "id": 6,
            "nome": "Gnocchi al Pesto",
            "descricao": "Nhoque de batata com molho pesto de manjericão e nozes.",
            "preco": 26.00,
            "categoria": "Massas",
            "image": '/primeiros/primeiro-prato.jpg'
        },
        {
            "id": 7,
            "nome": "Tortellini in Brodo",
            "descricao": "Massa recheada cozida em caldo aromático de carne.",
            "preco": 28.00,
            "categoria": "Massas",
            "image": '/primeiros/primeiro-prato.jpg'
        },
        {
            "id": 8,
            "nome": "Tagliatelle al Ragu di Cinghiale",
            "descricao": "Massa com molho de javali cozido lentamente.",
            "preco": 36.00,
            "categoria": "Massas",
            "image": '/primeiros/primeiro-prato.jpg'
        },
        {
            "id": 9,
            "nome": "Linguine ai Frutti di Mare",
            "descricao": "Massa com frutos do mar e molho de tomate.",
            "preco": 38.00,
            "categoria": "Massas",
            "image": '/primeiros/primeiro-prato.jpg'
        },
        {
            "id": 10,
            "nome": "Penne all’Arrabbiata",
            "descricao": "Massa com molho de tomate picante e alho.",
            "preco": 24.00,
            "categoria": "Massas",
            "image": '/primeiros/primeiro-prato.jpg'
        }
    ],
    "pratoPrincipal": [
        {
            "id": 1,
            "nome": "Osso Buco alla Milanese",
            "descricao": "Carne de vitela cozida lentamente com molho de vinho branco.",
            "preco": 42.00,
            "categoria": "Carnes",
            "image": '/principal/prato-principal.jpg'
        },
        {
            "id": 2,
            "nome": "Cotoletta alla Milanese",
            "descricao": "Filé de vitela empanado e frito até ficar crocante.",
            "preco": 38.00,
            "categoria": "Carnes",
            "image": '/principal/prato-principal.jpg'
        },
        {
            "id": 3,
            "nome": "Bistecca alla Fiorentina",
            "descricao": "Corte alto de carne grelhado ao ponto.",
            "preco": 48.00,
            "categoria": "Carnes",
            "image": '/principal/prato-principal.jpg'
        },
        {
            "id": 4,
            "nome": "Saltimbocca alla Romana",
            "descricao": "Filé de vitela com presunto Parma e sálvia ao vinho branco.",
            "preco": 40.00,
            "categoria": "Carnes",
            "image": '/principal/prato-principal.jpg'
        },
        {
            "id": 5,
            "nome": "Pollo alla Cacciatora",
            "descricao": "Frango cozido com tomate, vinho e ervas aromáticas.",
            "preco": 32.00,
            "categoria": "Carnes",
            "image": '/principal/prato-principal.jpg'
        },
        {
            "id": 6,
            "nome": "Agnello al Forno",
            "descricao": "Cordeiro assado com batatas e alecrim.",
            "preco": 55.00,
            "categoria": "Carnes",
            "image": '/principal/prato-principal.jpg'
        },
        {
            "id": 7,
            "nome": "Pesce alla Griglia",
            "descricao": "Peixe grelhado com ervas frescas e limão siciliano.",
            "preco": 38.00,
            "categoria": "Peixes",
            "image": '/principal/prato-principal.jpg'
        },
        {
            "id": 8,
            "nome": "Scaloppine al Limone",
            "descricao": "Filé de carne com molho de limão e vinho branco.",
            "preco": 36.00,
            "categoria": "Carnes",
            "image": '/principal/prato-principal.jpg'
        },
        {
            "id": 9,
            "nome": "Calamari Ripieni",
            "descricao": "Lulas recheadas com pão, alho e ervas.",
            "preco": 40.00,
            "categoria": "Peixes",
            "image": '/principal/prato-principal.jpg'
        },
        {
            "id": 10,
            "nome": "Brasato al Barolo",
            "descricao": "Carne cozida lentamente no vinho Barolo.",
            "preco": 50.00,
            "categoria": "Carnes",
            "image": '/principal/prato-principal.jpg'
        }
    ],
    "sobremesas": [
        {
            "id": 1,
            "nome": "Tiramisù",
            "descricao": "Camadas de biscoito embebido em café, creme de mascarpone e cacau.",
            "preco": 12.00,
            "categoria": "Sobremesas",
            "image": '/sobremesas/sobremesas.jpg'
        },
        {
            "id": 2,
            "nome": "Panna Cotta",
            "descricao": "Sobremesa cremosa de baunilha com calda de frutas vermelhas.",
            "preco": 14.00,
            "categoria": "Sobremesas",
            "image": '/sobremesas/sobremesas.jpg'
        },
        {
            "id": 3,
            "nome": "Cannoli Siciliani",
            "descricao": "Massa crocante recheada com creme de ricota e chocolate.",
            "preco": 16.00,
            "categoria": "Sobremesas",
            "image": '/sobremesas/sobremesas.jpg'
        },
        {
            "id": 4,
            "nome": "Torta della Nonna",
            "descricao": "Torta recheada com creme de confeiteiro e amêndoas.",
            "preco": 18.00,
            "categoria": "Sobremesas",
            "image": '/sobremesas/sobremesas.jpg'
        },
        {
            "id": 5,
            "nome": "Zabaione",
            "descricao": "Creme de gemas, açúcar e vinho Marsala.",
            "preco": 15.00,
            "categoria": "Sobremesas",
            "image": '/sobremesas/sobremesas.jpg'
        },
        {
            "id": 6,
            "nome": "Affogato al Caffè",
            "descricao": "Sorvete de baunilha mergulhado em café expresso.",
            "preco": 14.00,
            "categoria": "Sobremesas",
            "image": '/sobremesas/sobremesas.jpg'
        },
        {
            "id": 7,
            "nome": "Cassata Siciliana",
            "descricao": "Bolo gelado com ricota, frutas cristalizadas e chocolate.",
            "preco": 20.00,
            "categoria": "Sobremesas",
            "image": '/sobremesas/sobremesas.jpg'
        },
        {
            "id": 8,
            "nome": "Gelato Artigianale",
            "descricao": "Sorvete artesanal com sabores variados.",
            "preco": 10.00,
            "categoria": "Sobremesas",
            "image": '/sobremesas/sobremesas.jpg'
        },
        {
            "id": 9,
            "nome": "Sfogliatella",
            "descricao": "Massa folhada recheada com creme de ricota e laranja.",
            "preco": 16.00,
            "categoria": "Sobremesas",
            "image": '/sobremesas/sobremesas.jpg'
        },
        {
            "id": 10,
            "nome": "Torta Caprese",
            "descricao": "Bolo de chocolate e amêndoas, típico de Capri.",
            "preco": 22.00,
            "categoria": "Sobremesas",
            "image": '/sobremesas/sobremesas.jpg'
        }
    ],
    "drinks": {
        "alcohol": [
            {
                "id": 1,
                "nome": "Vinho Tinto Chianti",
                "descricao": "Vinho tinto italiano da região da Toscana.",
                "preco": 45.00,
                "categoria": "Bebidas Alcoólicas",
                "image": '/bebidas/bebidas-alcool.jpg'
            },
            {
                "id": 2,
                "nome": "Vinho Branco Pinot Grigio",
                "descricao": "Vinho branco italiano da região do Friuli.",
                "preco": 50.00,
                "categoria": "Bebidas Alcoólicas",
                "image": '/bebidas/bebidas-alcool.jpg'
            },
            {
                "id": 3,
                "nome": "Vinho Rosé Toscano",
                "descricao": "Vinho rosé da região da Toscana, leve e frutado.",
                "preco": 42.00,
                "categoria": "Bebidas Alcoólicas",
                "image": '/bebidas/bebidas-alcool.jpg'
            },
            {
                "id": 4,
                "nome": "Vinho Tinto Barolo",
                "descricao": "Vinho tinto encorpado da região do Piemonte, feito com a uva Nebbiolo.",
                "preco": 120.00,
                "categoria": "Bebidas Alcoólicas",
                "image": '/bebidas/bebidas-alcool.jpg'
            },
            {
                "id": 5,
                "nome": "Vinho Tinto Brunello di Montalcino",
                "descricao": "Produzido com a uva Sangiovese na região da Toscana, ideal para carnes.",
                "preco": 150.00,
                "categoria": "Bebidas Alcoólicas",
                "image": '/bebidas/bebidas-alcool.jpg'
            },
            {
                "id": 6,
                "nome": "Vinho Branco Vermentino",
                "descricao": "Vinho branco aromático da Sardenha, refrescante e cítrico.",
                "preco": 55.00,
                "categoria": "Bebidas Alcoólicas",
                "image": '/bebidas/bebidas-alcool.jpg'
            },
            {
                "id": 7,
                "nome": "Vinho Tinto Amarone della Valpolicella",
                "descricao": "Vinho tinto intenso e complexo, produzido com uvas passificadas.",
                "preco": 180.00,
                "categoria": "Bebidas Alcoólicas",
                "image": '/bebidas/bebidas-alcool.jpg'
            },
            {
                "id": 8,
                "nome": "Vinho Branco Gavi di Gavi",
                "descricao": "Vinho branco elegante do Piemonte, feito com a uva Cortese.",
                "preco": 60.00,
                "categoria": "Bebidas Alcoólicas",
                "image": '/bebidas/bebidas-alcool.jpg'
            },
            {
                "id": 9,
                "nome": "Vinho Tinto Montepulciano d'Abruzzo",
                "descricao": "Vinho tinto frutado e acessível, típico da região de Abruzzo.",
                "preco": 38.00,
                "categoria": "Bebidas Alcoólicas",
                "image": '/bebidas/bebidas-alcool.jpg'
            },
            {
                "id": 10,
                "nome": "Vinho Branco Soave Classico",
                "descricao": "Vinho branco seco e floral da região do Vêneto, ótimo para frutos do mar.",
                "preco": 48.00,
                "categoria": "Bebidas Alcoólicas",
                "image": '/bebidas/bebidas-alcool.jpg'
            }
        ],
        "no_alcohol": [
            {
                "id": 1,
                "nome": "Suco de Laranja",
                "descricao": "Suco fresco de laranja natural.",
                "preco": 8.00,
                "categoria": "Bebidas Não Alcoólicas",
                "image": '/bebidas/bebidas-sucos.jpg'
            },
            {
                "id": 2,
                "nome": "Suco de Limão Siciliano",
                "descricao": "Suco de limão siciliano natural e refrescante.",
                "preco": 8.00,
                "categoria": "Bebidas Não Alcoólicas",
                "image": '/bebidas/bebidas-sucos.jpg'
            },
            {
                "id": 3,
                "nome": "Suco de Uva",
                "descricao": "Suco natural de uva sem adição de açúcar.",
                "preco": 10.00,
                "categoria": "Bebidas Não Alcoólicas",
                "image": '/bebidas/bebidas-sucos.jpg'
            },
            {
                "id": 4,
                "nome": "Suco de Abacaxi com Hortelã",
                "descricao": "Suco refrescante de abacaxi com um toque de hortelã.",
                "preco": 10.00,
                "categoria": "Bebidas Não Alcoólicas",
                "image": '/bebidas/bebidas-sucos.jpg'
            },
            {
                "id": 5,
                "nome": "Suco de Manga",
                "descricao": "Suco natural de manga fresco e doce.",
                "preco": 10.00,
                "categoria": "Bebidas Não Alcoólicas",
                "image": '/bebidas/bebidas-sucos.jpg'
            },
            {
                "id": 6,
                "nome": "Suco de Morango",
                "descricao": "Suco de morango fresco e suave.",
                "preco": 12.00,
                "categoria": "Bebidas Não Alcoólicas",
                "image": '/bebidas/bebidas-sucos.jpg'
            }, {
                "id": 7,
                "nome": "Suco de Melancia",
                "descricao": "Suco natural de melancia, leve e hidratante.",
                "preco": 9.00,
                "categoria": "Bebidas Não Alcoólicas",
                "image": '/bebidas/bebidas-sucos.jpg'
            },
            {
                "id": 8,
                "nome": "Suco de Maracujá",
                "descricao": "Suco natural de maracujá, refrescante e levemente ácido.",
                "preco": 10.00,
                "categoria": "Bebidas Não Alcoólicas",
                "image": '/bebidas/bebidas-sucos.jpg'
            },
            {
                "id": 9,
                "nome": "Suco de Caju",
                "descricao": "Suco de caju natural, adocicado e aromático.",
                "preco": 11.00,
                "categoria": "Bebidas Não Alcoólicas",
                "image": '/bebidas/bebidas-sucos.jpg'
            },
            {
                "id": 10,
                "nome": "Suco de Goiaba",
                "descricao": "Suco cremoso de goiaba, rico em sabor e nutrientes.",
                "preco": 10.00,
                "categoria": "Bebidas Não Alcoólicas",
                "image": '/bebidas/bebidas-sucos.jpg'
            }
        ]
    },
    "pizzas": {
        "tradicionais": [
            {
                "id": 1,
                "nome": "Margherita",
                "descricao": "Molho de tomate San Marzano, mozzarella de búfala, manjericão e azeite extra virgem.",
                "preco": 28.00,
                "categoria": "Pizzas Tradicionais",
                "image": '/pizzas/pizza-tradicional.jpg'
            },
            {
                "id": 2,
                "nome": "Calabresa",
                "descricao": "Fatias finas de calabresa, cebola roxa e queijo mozzarella.",
                "preco": 30.00,
                "categoria": "Pizzas Tradicionais",
                "image": '/pizzas/pizza-tradicional.jpg'
            },
            {
                "id": 3,
                "nome": "Quattro Formaggi",
                "descricao": "Mozzarella, gorgonzola, parmesão e provolone.",
                "preco": 32.00,
                "categoria": "Pizzas Tradicionais",
                "image": '/pizzas/pizza-tradicional.jpg'
            },
            {
                "id": 4,
                "nome": "Napolitana",
                "descricao": "Molho de tomate, alho, orégano, mozzarella e aliche.",
                "preco": 30.00,
                "categoria": "Pizzas Tradicionais",
                "image": '/pizzas/pizza-tradicional.jpg'
            },
            {
                "id": 5,
                "nome": "Capricciosa",
                "descricao": "Presunto, alcachofra, cogumelos e azeitonas pretas.",
                "preco": 32.00,
                "categoria": "Pizzas Tradicionais",
                "image": '/pizzas/pizza-tradicional.jpg'
            },
            {
                "id": 6,
                "nome": "Diavola",
                "descricao": "Molho de tomate, mozzarella e salame picante.",
                "preco": 34.00,
                "categoria": "Pizzas Tradicionais",
                "image": '/pizzas/pizza-tradicional.jpg'
            },
            {
                "id": 7,
                "nome": "Prosciutto e Rúcula",
                "descricao": "Presunto Parma, mozzarella e rúcula fresca.",
                "preco": 35.00,
                "categoria": "Pizzas Tradicionais",
                "image": '/pizzas/pizza-tradicional.jpg'
            }
        ],
        "especiais": [
            {
                "id": 1,
                "nome": "Funghi Porcini",
                "descricao": "Cogumelos funghi, mozzarella e azeite trufado.",
                "preco": 36.00,
                "categoria": "Pizzas Especiais",
                "image": '/pizzas/pizza-especial.jpg'
            },
            {
                "id": 2,
                "nome": "Frutti di Mare",
                "descricao": "Camarão, polvo e mariscos com molho de tomate especial.",
                "preco": 40.00,
                "categoria": "Pizzas Especiais",
                "image": '/pizzas/pizza-especial.jpg'
            },
            {
                "id": 3,
                "nome": "Tartufo Bianco",
                "descricao": "Creme de trufa branca, mozzarella e parmesão.",
                "preco": 45.00,
                "categoria": "Pizzas Especiais",
                "image": '/pizzas/pizza-especial.jpg'
            },
            {
                "id": 4,
                "nome": "Carbonara",
                "descricao": "Molho branco, pancetta crocante, gema de ovo e queijo pecorino.",
                "preco": 40.00,
                "categoria": "Pizzas Especiais",
                "image": '/pizzas/pizza-especial.jpg'
            },
            {
                "id": 5,
                "nome": "Vegetariana",
                "descricao": "Tomate, pimentão, cogumelos, abobrinha, berinjela e mozzarella.",
                "preco": 35.00,
                "categoria": "Pizzas Especiais",
                "image": '/pizzas/pizza-especial.jpg'
            },
            {
                "id": 6,
                "nome": "Pera e Gorgonzola",
                "descricao": "Fatias de pera caramelizada, queijo gorgonzola e nozes.",
                "preco": 38.00,
                "categoria": "Pizzas Especiais",
                "image": '/pizzas/pizza-especial.jpg'
            },
            {
                "id": 7,
                "nome": "Zucchine e Ricotta",
                "descricao": "Abobrinha grelhada, ricota cremosa e toque de limão siciliano.",
                "preco": 37.00,
                "categoria": "Pizzas Especiais",
                "image": '/pizzas/pizza-especial.jpg'
            }
        ],
        "premium": [
            {
                "id": 1,
                "nome": "Pistacchio e Mortadella",
                "descricao": "Creme de pistache, mortadela italiana e stracciatella de burrata.",
                "preco": 55.00,
                "categoria": "Pizzas Premium",
                "image": '/pizzas/pizza-especial.jpg'
            },
            {
                "id": 2,
                "nome": "Al Tartufo Nero",
                "descricao": "Molho branco, trufas negras laminadas, mozzarella e queijo grana padano.",
                "preco": 60.00,
                "categoria": "Pizzas Premium",
                "image": '/pizzas/pizza-especial.jpg'
            },
            {
                "id": 3,
                "nome": "Brasato al Barolo",
                "descricao": "Ragù de carne cozida no vinho Barolo, mozzarella e lascas de parmesão.",
                "preco": 65.00,
                "categoria": "Pizzas Premium",
                "image": '/pizzas/pizza-especial.jpg'
            },
            {
                "id": 4,
                "nome": "Burrata Speciale",
                "descricao": "Molho de tomate artesanal, burrata inteira e pesto de manjericão.",
                "preco": 58.00,
                "categoria": "Pizzas Premium",
                "image": '/pizzas/pizza-especial.jpg'
            },
            {
                "id": 5,
                "nome": "Pizzaiolo’s Choice",
                "descricao": "Pizza do chef, com ingredientes frescos e sazonais.",
                "preco": 62.00,
                "categoria": "Pizzas Premium",
                "image": '/pizzas/pizza-especial.jpg'
            }
        ]
    }
}

export const GET = async (req: Request) => {
    const url = new URL(req.url)
    const category = url.searchParams.get('category')

    if (category) {
        const categoryData = menu[category as keyof MenuCategory];

        if (categoryData) {
            return NextResponse.json(categoryData)
        } else {
            return NextResponse.json({ error: `Category "${category}" not found.` })
        }
    }

    return NextResponse.json(menu)
}

