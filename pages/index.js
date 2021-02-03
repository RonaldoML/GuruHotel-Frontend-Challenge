import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../components/Layout';
import { visit } from '../redux/actions/search';
import { ItemsGrid } from '../components/Items/ItemsGrid';
import { NoContent } from '../components/NoContent';
import { useEffect } from 'react';
import { images } from '../utils/utils';
import { Form } from '../components/Form/Form';


const Index = () => {

  const dispatch = useDispatch();

  const { data, load, content, visited, askTerms } = useSelector(state => state.search);

  useEffect(() => {
    const v = JSON.parse(localStorage.getItem("visited"));
    if (v && visited.length === 0) {
      console.log('data');
      v.map(a => dispatch(visit(a)));
    }


  }, [])


  return (
    <div className="">
      <Layout>
        <Form/>
        
        <div className="grid justify-items-stretch">
          {
            data.length !== 0 ? (
              <div className="flex">
                <ItemsGrid />
              </div>

            ) : null
          }
          {
            load &&
            <div className="flex justify-self-center justify-center mt-10">
              <img src={images.loadingGif} alt="loading" width="20%" />
            </div>
          }
          {
            content &&
            <NoContent type={1} />
          }
          {
            askTerms &&
            <NoContent type={2} />
          }
        </div>
      </Layout>
    </div>
  )
}

export default Index;