import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { ask, eventSearch, noContent } from '../../redux/actions/search';
import { loading } from '../../redux/actions/search';

export const Form = () => {

    const dispatch = useDispatch();

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
        <div className="grid justify-items-center shadow-sm w-full bg-gradient-to-r from-blue-400 to-green-500">

          <div className="p-5 animate__animated animate__bounce animate__faster">
            <img
              src="/logo-original.svg"
              alt="Picture of the author"
              width={700}
              height={50}
            />
          </div>
          <div className="flex justify-center p-5">
            <div className="flex justify-center w-full max-w-3xl">
              <form onSubmit={formik.handleSubmit}>
                <div className="sm:flex p-3 ">

                  <input
                    id="busqueda"
                    type="text"
                    placeholder="hot dog"
                    name='busqueda'
                    value={formik.values.busqueda}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="w-full shadow appearance-none rounded mb-1 sm:rounded-l sm:rounded-r-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  />
                  <input
                    id="ubicacion"
                    type="text"
                    placeholder="Guayaquil"
                    name='ubicacion'
                    value={formik.values.ubicacion}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className="w-full shadow appearance-none border-none rounded mb-1 sm:rounded-none py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        </div>
    )
}
