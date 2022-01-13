import React from 'react';
import { render } from 'react-dom';
import NavBar from './NavBar';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";


const client = new ApolloClient({
  uri: 'https://graphqlzero.almansi.me/api',
  cache: new InMemoryCache()
});



const EXCHANGE_RATES = gql`query (
  $options: PageQueryOptions
) {
  posts(options: $options) {
    data {
      title
    }
    meta {
      totalCount
    }
  }
}
`;

function DisplayPosts() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.posts.data.map(({ title }) => (
    <div key={title}>
      <p>
        {title}
      </p>
    </div>
  ));
}


function App() {
  return (
    <div>
      <NavBar/>
      <div className="Posts">
      <DisplayPosts />
      </div>
      
    </div>
  );
}


render(

  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

