import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../components/Layout';
import { ItemsGrid } from '../components/Items/ItemsGrid';
import { useEffect } from 'react';
import { MapContainer } from '../components/Utility/Map';
import { DetailModal } from '../components/Modal/DetailModal';
import { visit } from '../redux/actions/search';

const Index = () => {

  const dispatch = useDispatch();

  const { data, visited, back } = useSelector(state => state.search);

  useEffect(() => {
    const v = JSON.parse(localStorage.getItem("visited"));
    if (v && visited.length === 0) {
      v.map(a => dispatch(visit(a)));
    }
  }, [])


  return (
    <Layout>
      <div className="grid justify-items-stretch w-full">
        {
          data.length !== 0 &&
          <div>
            <div className="flex">
              <ItemsGrid />
              </div>
            {
              back &&
              <div className="bg-gray-100 p-10">
                <MapContainer 
                  maxHeight={70}
                />
              </div>
            }
          </div>
        }
        {
           !back && data.length !== 0 &&
             <DetailModal />
        }
      </div>
    </Layout>
  )
}

export default Index;