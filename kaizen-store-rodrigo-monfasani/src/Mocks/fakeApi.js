const products = [
    {id:'01', name:'Copa limitada Riot', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',price:"10$",    stock:5, category:"Merchandising",},
    {id:'02', name:'Mug de The Witcher', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", img:'https://i.postimg.cc/tRD2F0Qp/mug-withcer.webp',price:"5$",    stock:7, category:"Merchandising",},
    {id:'03', name:'Pop Caustic', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", img:'https://i.postimg.cc/FK9Yy6QX/Pop-caustic.jpg', price:"10$",   stock:2, category:"Merchandising",},
    {id:'04', name:'Figura de Wraith', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", img:'https://i.postimg.cc/xTDMktqn/Figura-wraith.png',price:"20$",    stock:8, category:"Merchandising",},
    {id:'05', name:'Figura De Jinx', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", img:'https://i.postimg.cc/fWX0hmCF/Figura-jinx.jpg', price:"20$",   stock:3, category:"Merchandising",},
    {id:'06', name:'Hoodie Apex Legends: Bangalore', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", img:'https://i.postimg.cc/9f6Fxg6f/Buzo-bangalore.png', price:"10$",   stock:10, category:"Merchandising",},
    {id:'07',name: '10.000 Kaizen coins', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", img:'https://i.postimg.cc/TYwVwtFf/shopcoins6.jpg', price:"60$",   stock:10, category:"Monedas",}

]
const producto ={id:'02', img:'https://i.postimg.cc/tRD2F0Qp/mug-withcer.webp', name:'Mug de The Witcher', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat", price:"5$",    stock:7, category:"Merchandising"};

export const getProds = (categoryId) => {
    return new Promise ((resolve, reject) => {
        const productsFilter = products.filter(
            (prod) => prod.category === categoryId)
        setTimeout(() => {
            categoryId
            ? resolve(productsFilter)
            : resolve(products);
        }, 1000);

    })

};

export const getProd = (id) => {
    return new Promise((resolve, reject) =>{
        const productFind = products.find((prod) => prod.id === Number(id));
        setTimeout(() => {
            resolve(productFind);
        },1000);
    });
};