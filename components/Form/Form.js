import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { ask, eventSearch, noContent } from '../../redux/actions/search';
import { loading } from '../../redux/actions/search';
import { Loading } from '../Utility/Loading';
import { Banner } from '../Utility/Banner';
import { NoContent } from '../../components/NoContent';

export const Form = () => {

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
      dispatch(noContent(false));
      dispatch(ask(false));
    },
  });

  return (
    <div className={data.length > 0 ? "grid justify-items-center shadow-sm w-screen bg-gradient-to-r from-blue-400 to-green-500 pb-10" : "grid justify-items-center shadow-sm w-screen bg-gradient-to-r from-blue-400 to-green-500 h-screen"}>

      <Banner />
      <div className="flex justify-center p-5">
        <div className="flex justify-center min-w-screen">
          <form onSubmit={formik.handleSubmit}>
            <div className="sm:flex p-3 ">

              <input
                id="busqueda"
                type="text"
                placeholder="Hamburguesa"
                name='busqueda'
                value={formik.values.busqueda}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-full shadow bg-white bg-opacity-50 placeholder-gray-500 appearance-none rounded mb-1 sm:rounded-l sm:rounded-r-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <input
                id="ubicacion"
                type="text"
                placeholder="Guayaquil"
                name='ubicacion'
                value={formik.values.ubicacion}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-full shadow bg-white bg-opacity-50 placeholder-gray-500 appearance-none border-none rounded mb-1 sm:rounded-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              <div className="md:w-3/12 sm:w-full">
                <input
                  type="submit"
                  value="buscar"
                  className="w-full shadow bg-blue-900 rounded mb-1 sm:rounded-l-none hover:bg-indigo-900 p-2 py-2 px-3 text-white uppercase font-bold"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="h-30">
        {
          load &&
          <Loading />
        }
        {
          content &&
          <NoContent type={1} />
        }
      </div>
    </div>
  )
}
