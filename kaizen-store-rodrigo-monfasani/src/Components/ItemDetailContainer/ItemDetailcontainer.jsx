import React,{useEffect,useState} from 'react'
import  ItemDetail  from '../ItemDetail/ItemDetail'


const mug ={id:'01', name:'random1', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',   stock:5};


const ItemDetailcontainer = () => {
    const [data,setData] = useState({});

    useEffect(() => {
        const getData = new Promise(resolve => {
            setTimeout(() => {
                resolve(mug);
            },3000);
            getData.then(res => setData(res));
        })
    },[])

  return (
    <ItemDetail data={data}/>
  )
}
export default ItemDetailcontainer