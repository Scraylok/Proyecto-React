import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import { getProd } from '../../Mocks/fakeApi';
import  ItemDetail  from '../ItemDetail/ItemDetail'





export const ItemDetailcontainer = () => {
    const [data,setData] = useState({});
    const [loading, setLoading]=useState(true);
    const {id} = useParams();

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
  );
}
export default ItemDetailcontainer