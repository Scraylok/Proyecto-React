
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