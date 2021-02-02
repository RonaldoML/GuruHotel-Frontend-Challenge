import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import fetch from 'node-fetch';

const httpLink = createHttpLink({
    uri: 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/graphql',
    methods: 'POST',
    fetch,
    // fetchOptions: {
    //     mode: 'no-cors'
    // },
    // withCredentials: true,
});
const authLink = setContext((_, { headers }) => {
    const token = 'bearer eP-wUV_UqCRe7wlUlnLVEshEY6N0w_LjAmuyNXfFTdLuzq7_dzzt0c5CzFzZAruzCW-dYxD4715L13UJyHR7YK0BvtFmfW0sKv9A_YXW9AXddwtXkcxkOO5IkkMWYHYx';
    return {
        headers: {
            Authorization: token,
            // 'Content-Type': 'application/json',
            // 'Access-Control-Allow-Origin': 'http://localhost:3000'
        }
    };
});

// export const client = new ApolloClient({

//     cache: new InMemoryCache(),
//     link: authLink.concat(httpLink)

// });

const client = new ApolloClient({
    uri: 'https://api.yelp.com/v3/graphql',
    request: (operation) => {
      operation.setContext({
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
          'Accept-Language': 'en-US',
        },
      });
    },
    cache: new InMemoryCache(),
  });

  export default client;