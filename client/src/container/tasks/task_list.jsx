import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

import Add from "./add.jsx";

// import Tasks from "./tasks";

const GET_TODOS = gql`
    query Todos{
        todos @client {
            id
            complete
        }
    }
`;

function TaskList(props) {
  const { data, loading, error } = useQuery(GET_TODOS);

  console.log('data', data, loading, error);
  return <div>
    <Add data={data}/>
  </div>
}


export default TaskList;
