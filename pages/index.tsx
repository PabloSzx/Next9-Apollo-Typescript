import { NextPage } from "next";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const App: NextPage = () => {
  const { loading, data } = useQuery(
    gql`
      query {
        users {
          name
          id
        }
      }
    `
  );
  return (
    <div>
      <div>{loading ? "Loading..." : data.users[0].id}</div>
    </div>
  );
};

export default App;
