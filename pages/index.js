import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Layout } from '../components/Layout';
import { eventSearch, noContent } from '../redux/actions/search';
import { loading } from '../redux/actions/search';
import { ItemsGrid } from '../components/Items/ItemsGrid';
import { NoContent } from '../components/NoContent';


const Index = () => {

  const dispatch = useDispatch();

  const { data, load, content } = useSelector(state => state.search)
  const { busqueda, ubicacion } = useSelector(state => state.search.searchs);

  const formik = useFormik({
    initialValues: {
      busqueda: busqueda,
      ubicacion: ubicacion,
    },
    validationSchema: Yup.object({
      busqueda: Yup.string()
        .min(1, 'Debe ingresar una entrada para buscar')
        .required('Debe ingresar una entrada para buscar'),
      ubicacion: Yup.string()
        .min(1, 'Debe ingresar una ubicación para buscar')
        .required('Debe ingresar una ubicación para buscar')
    }),
    onSubmit: async (s, { resetForm }) => {
      dispatch(eventSearch({ busqueda: s.busqueda, ubicacion: s.ubicacion }));
      dispatch(loading(true));
    },
  });

  return (
    <div>
      <Layout>
        <h1 className="text-2xl text-gray-700 text-center font-bold">GuruHotel - Frontend Challenge</h1>
        <div className="flex justify-center mt-10">
          <div className="flex justify-center w-full max-w-3xl">
            <form onSubmit={formik.handleSubmit}>
              <div className="sm:flex p-3">

                <input
                  id="busqueda"
                  type="text"
                  placeholder="hot dog"
                  name='busqueda'
                  value={formik.values.busqueda}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className="w-full shadow appearance-none border rounded-l rounded-r-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                  id="ubicacion"
                  type="text"
                  placeholder="Guayaquil"
                  name='ubicacion'
                  value={formik.values.ubicacion}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  className="w-full shadow appearance-none border rounded-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <div className="md:w-3/12 sm:w-full">
                  <input
                    type="submit"
                    value="buscar"
                    className="w-full bg-gray-800 rounded-l-none hover:bg-gray-900 p-2 py-2 px-3 text-white uppercase font-bold rounded"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="grid justify-items-stretch p-5">
          {
            data.length !== 0 &&
            <ItemsGrid />
          }
          {
            load &&
            <div className="flex justify-self-center justify-center">

              <img src="/loading.gif" alt="loading" width="10%" />
            </div>
          }
          {
            content && 
            <NoContent/>
          }
        </div>
      </Layout>
    </div>
  )
}

export default Index;