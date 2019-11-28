import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

import Add from "./add.jsx";

// import Tasks from "./tasks";

const GET_TODOS = gql`
    query GetTodos {
        todos @client {
            id
            complete
            value
        }
    }   
`;

function TaskList(props) {
  const { data, loading, error } = useQuery(GET_TODOS);

  console.log('data', data, loading, error);
  if (loading) return <h1>Loading......</h1>;
  if (error) return <div>Error: { error }</div>;
  if (data) {
    return <div>
      <Add data={data.todos}/>
    </div>
  }
}


export default TaskList;
