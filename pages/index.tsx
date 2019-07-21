import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const App: NextPage = () => {
  const { loading, data } = useQuery(gql`
    query {
      users {
        name
        id
      }
    }
  `);
  return (
    <div>
      <div>{JSON.stringify(loading)}</div>
      <div>{JSON.stringify(data, null, 4)}</div>
    </div>
  );
};

export default App;
