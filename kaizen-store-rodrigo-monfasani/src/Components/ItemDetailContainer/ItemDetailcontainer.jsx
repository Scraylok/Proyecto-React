import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { getProd } from '../../Mocks/fakeApi';
import  ItemDetail  from '../ItemDetail/ItemDetail'


const mug ={id:'01', name:'random1', description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",img:'https://i.postimg.cc/Wzx2sxHQ/Copa-Riot.jpg',   stock:5};


const ItemDetailcontainer = () => {
    const [data,setData] = useState({});
    const [loading, setLoading]=useState(true)
    const {id} = useParams()

    useEffect(() => {
      setLoading(true);
      getProd(id)
          .then((res) => {
            setData(res);
          })
          .catch((error) => {
              console.log(error);
          })
          .finally(() => {
              setLoading(false);
          });
  }, [id]);

  return (
    <ItemDetail data={data}/>
  )
}
export default ItemDetailcontainer