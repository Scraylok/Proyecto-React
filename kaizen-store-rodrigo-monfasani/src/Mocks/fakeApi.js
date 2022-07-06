const products = [
    {id:'01', name:'random1', description: "Lorem ipsum dolor sit amet",img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',   stock:5},
    {id:'02', name:'random2', description: "Lorem ipsum dolor sit amet",img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',   stock:7},
    {id:'03', name:'random3', description: "Lorem ipsum dolor sit amet",img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',   stock:2},
    {id:'04', name:'random4', description: "Lorem ipsum dolor sit amet",img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',   stock:8},
    {id:'05', name:'random5', description: "Lorem ipsum dolor sit amet",img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',   stock:3},
    {id:'06', name:'random6', description: "Lorem ipsum dolor sit amet",img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',   stock:10},

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