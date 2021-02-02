import { gql, useQuery } from '@apollo/client';
import axios from 'axios';
import { useField } from 'formik';
import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import Router from 'next/router'

const options = {
  method: 'POST',
  url: 'https://api.yelp.com/v3/graphql',
  headers: {
    // 'content-type': 'application/json',
    'Authorization': 'Bearer eP-wUV_UqCRe7wlUlnLVEshEY6N0w_LjAmuyNXfFTdLuzq7_dzzt0c5CzFzZAruzCW-dYxD4715L13UJyHR7YK0BvtFmfW0sKv9A_YXW9AXddwtXkcxkOO5IkkMWYHYx',
    // 'Access-Control-Allow-Origin': '*'
    'Accept-Language': 'en-US',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
  },
  data: {
    query: `
    {
      search(term: "burrito", location: "san francisco") {
        total
        business {
          name
          rating
          review_count
          location {
            address1
            city
            state
            country
          }
        }
      }
    }
    `
  }
};
const GET_DOGS = gql`
{
  search(term: "burrito", location: "san francisco", limit: 10) {
    total
    business {
      name
      rating
      review_count
      location {
        address1
        city
        state
        country
      }
    }
  }
}

`;
const Nosotros = () => {

  // const { loading, error, data } = useQuery(GET_DOGS);

  // console.log(error);

  // axios(options).then( response => {
  //   console.log(response.data.data.search.business)
  //   setData(response.data.data.search.business);
  // }).catch( error => {
  //   console.error(error);
  // });



  const [state, setState] = useState([]);

  useEffect(() => {

    const d = async () => {
      return axios(options).then(response => {
        resolve(response)
      }).catch(error => {
        console.error(error);
      });
    }
    d();
  }, [])

  const fetch = async () => {
    axios(options).then(response => {
      const business = response.data.data.search.business;
      console.log(business);
    }).catch(error => {
      console.error(error);
    });
}

  return (
    <div>
      <Layout>
      <div onClick={() => Router.back()}>Go Back</div>
      </Layout>
    </div>
  )
}

export default Nosotros;