const products = [
    {id:'01', name:'Copa limitada Riot', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',price:"10$",    stock:5, category:"Merchandising",},
    {id:'02', name:'Mug de The Witcher', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/tRD2F0Qp/mug-withcer.webp',price:"5$",    stock:7, category:"Merchandising",},
    {id:'03', name:'Pop Caustic', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/FK9Yy6QX/Pop-caustic.jpg', price:"10$",   stock:2, category:"Merchandising",},
    {id:'04', name:'Figura de Wraith', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/xTDMktqn/Figura-wraith.png',price:"20$",    stock:8, category:"Merchandising",},
    {id:'05', name:'Figura De Jinx', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/fWX0hmCF/Figura-jinx.jpg', price:"20$",   stock:3, category:"Merchandising",},
    {id:'06', name:'Hoodie Apex Legends: Bangalore', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/9f6Fxg6f/Buzo-bangalore.png', price:"10$",   stock:10, category:"Merchandising",},

]

export const getData = new Promise ((resolve, reject) => {
    let condition = true 
    setTimeout(() => {
        if(condition){
            resolve(products)
        }else{
            reject(console.log('algo salio mal'))
        }
    },3000)
})