const products = [
    {id:'01', name:'random1', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',   stock:5},
    {id:'02', name:'random2', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/tRD2F0Qp/mug-withcer.webp',   stock:7},
    {id:'03', name:'random3', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/FK9Yy6QX/Pop-caustic.jpg',   stock:2},
    {id:'04', name:'random4', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/xTDMktqn/Figura-wraith.png',   stock:8},
    {id:'05', name:'random5', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/fWX0hmCF/Figura-jinx.jpg',   stock:3},
    {id:'06', name:'random6', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/9f6Fxg6f/Buzo-bangalore.png',   stock:10},

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