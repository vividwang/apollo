import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

// import Tasks from "./tasks";

const GET_TODOS = gql`  
    {
        todos @client {
            data {
                id
                completed
            }
        }
        visibilityFilter @client
    }
`;

function TaskList(props) {
  const { data, loading, error } = useQuery(GET_TODOS);

  console.log('data', data, loading, error);
  return <ul>
    {/*{ getVisibleTodos(todos, visibilityFilter).map(todo => (*/}
    {/*  <Tasks key={todo.id} {...todo} />*/}
    {/*)) }*/}
    <li>
      13123123
    </li>
  </ul>
}


export default TaskList;
