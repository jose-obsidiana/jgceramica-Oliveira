const products = [
    {
        id: '1',
        name: 'Jarra Pincelada',
        price: 500,
        stock: 5,
        category: 'jarras',
        description: 'Jarrón artesanal hecho de arcilla blanca con diseño único.',
        img: 'https://res.cloudinary.com/dit43qjpn/image/upload/v1710866714/Captura_de_pantalla_2024-03-19_134357_a2oxq1.png'
    },

    {
        id: '2',
        name: 'Plato Rayado',
        price: 500,
        stock: 5,
        category: '',
        description: '',
        img: 'https://res.cloudinary.com/dit43qjpn/image/upload/v1710862816/Captura_de_pantalla_2024-03-19_123933_xavrd8.png'
    },
    {
        id: '3',
        name: 'Ornero Artesanal',
        price: 500,
        stock: 5,
        category: 'orneros',
        description: 'Ornero de arcilla blanca para prender la escencia de tu preferencia.',
        img: 'https://res.cloudinary.com/dit43qjpn/image/upload/v1710862816/Captura_de_pantalla_2024-03-19_123811_sun44m.png'
    },
    {
        id: '4',
        name: 'Cuenco',
        price: 500,
        stock: 5,
        category: 'cuencos',
        description: 'Cuenco artesanal de arcilla blanca ideal para servir alimentos.',
        img: 'https://res.cloudinary.com/dit43qjpn/image/upload/v1710862816/Captura_de_pantalla_2024-03-19_123912_pyv4c4.png'
    },
    {
        id: '5',
        name: 'Cuenco Artesanal',
        price: 500,
        stock: 5,
        category: 'cuencos',
        description: 'Cuenco artesanal de arcilla blanca ideal para servir alimentos.',
        img: 'https://res.cloudinary.com/dit43qjpn/image/upload/c_crop,ar_1:1/v1710862816/Captura_de_pantalla_2024-03-19_123707_q7unz7.png'
    },
    {
        id: '6',
        name: 'Taza con Líneas',
        price: 500,
        stock: 5,
        category: 'tazas',
        description: 'Taza de arcilla blanca perfecta para disfrutar de tu bebida favorita.',
        img: 'https://res.cloudinary.com/dit43qjpn/image/upload/v1710865417/Captura_de_pantalla_2024-03-19_132321_qkgngz.png'
    },
    {
        id: '7',
        name: 'Taza Pincelada',
        price: 500,
        stock: 5,
        category: 'tazas',
        description: 'Taza de arcilla blanca perfecta para disfrutar de tu bebida favorita.',
        img: 'https://res.cloudinary.com/dit43qjpn/image/upload/v1710866713/Captura_de_pantalla_2024-03-19_134424_iflhzh.png'
    },
    {
        id: '8',
        name: 'Jarra Artesanal',
        price: 500,
        stock: 5,
        category: 'jarras',
        description: 'Jarrón artesanal hecho de arcilla blanca con diseño único.',
        img: 'https://res.cloudinary.com/dit43qjpn/image/upload/v1710866714/Captura_de_pantalla_2024-03-19_134357_a2oxq1.png'
    },
    
];

// products
export const getProducts = new Promise ((resolve) => {
    setTimeout ( () => {
        resolve(products)
    }, 500)
});

 // categories
 export const getProductsByCategory = (category) => { 
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.filter(prod => prod.category === category))
        }, 500)
    })
}


// detalle del producto
export const getProductById = (prodId) => { 
    return new Promise ((resolve) => {
        setTimeout (() => {
            resolve(products.find(prod => prod.id === prodId))
        }, 500)
    })
}