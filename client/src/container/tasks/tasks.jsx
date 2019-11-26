import React from 'react';
import { useMutation } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const TOGGLE_TODO = gql`
    mutation ToggleTodo($id: Int!) {
        toggleTodo(id: $id) @client
    }
`;

function Tasks(props) {
  const { id, completed, text } = props;
  const [toggleTodo] = useMutation(TOGGLE_TODO, { variables: {id} });

  return <div>
    <li
      onClick={ toggleTodo }
      style={{
      textDecoration: completed ? "line-thougn" : "none",
    }}>
      { text }
    </li>
  </div>
}

export default Tasks;
