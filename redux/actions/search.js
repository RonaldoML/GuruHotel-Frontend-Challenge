import axios from "axios";
import { types } from "../types/types";


export const eventSearch = (text) => {
  return async (dispatch) => {
    try {
      dispatch(search(text));
      axios.get(`https://thingproxy.freeboard.io/fetch/https://api.yelp.com/v3/businesses/search?term=${text.busqueda}&location=${text.ubicacion}`, {
        headers: {
          Authorization: `Bearer eP-wUV_UqCRe7wlUlnLVEshEY6N0w_LjAmuyNXfFTdLuzq7_dzzt0c5CzFzZAruzCW-dYxD4715L13UJyHR7YK0BvtFmfW0sKv9A_YXW9AXddwtXkcxkOO5IkkMWYHYx`,
          "accept": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-requested-with": "xmlhttprequest",
        },
        params: {
          limit: 10
        }
      })
        .then((res) => {
          dispatch(loading(false));
          const data = [...res.data.businesses];
          if (data.length === 0) {
            dispatch(noContent(true));
          } else {
            dispatch(fetchData(data));
          }
          
        })
        .catch((err) => {
          console.log(err)
          dispatch(loading(false));
          dispatch(noContent(true));
        })

    } catch (error) {
      console.log('error: ' + error)
    }


  }
}

const search = (text) => ({
  type: types.eventSearch,
  payload: text
});

const fetchData = (data) => ({
  type: types.eventData,
  payload: data
});

export const loading = (value) => ({
  type: types.loading,
  payload: value
})

export const noContent = (value) => ({
  type: types.noContent,
  payload: value
})

export const visit = (value) => ({
  type: types.visited,
  payload: value
})

export const select = (value) => ({
  type: types.selected,
  payload: value
})