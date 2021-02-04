import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../components/Layout';
import { visit } from '../redux/actions/search';
import { ItemsGrid } from '../components/Items/ItemsGrid';
import { useEffect } from 'react';
import { Form } from '../components/Form/Form';
import { MapContainer } from '../components/Map';


const Index = () => {

  const dispatch = useDispatch();

  const { data, load, content, visited } = useSelector(state => state.search);

  useEffect(() => {
    const v = JSON.parse(localStorage.getItem("visited"));
    if (v && visited.length === 0) {
      console.log('data');
      v.map(a => dispatch(visit(a)));
    }


  }, [])


  return (
      <Layout>
        <Form />
        <div className="grid justify-items-stretch w-full">
          {
            data.length !== 0 &&
            <div>
              <div className="flex">
                <ItemsGrid />
              </div>
              {/* <div className="bg-indigo-100 p-10">
                <MapContainer />
              </div> */}
            </div>
          }
        </div>
      </Layout>
  )
}

export default Index;