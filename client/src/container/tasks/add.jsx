import React, { useState } from 'react';
import gql from "graphql-tag";
import {useMutation} from "@apollo/react-hooks";

const ADD_TODO = gql`
    mutation AddTodo($id: string!, $value: string!){
        addTodo(id: $id, value: $value) @client
    }
`;

function Add(props) {
  const [val, setVal] = useState('');
  const [ addTodo ] = useMutation(ADD_TODO, { variables: {
      id: `${(Math.random()*10000000000000).toFixed(0)}${+new Date()}`,
      value: val
    }});
  // const handleClick = async () => {
  //   console.log('addTodo', addTodo);
  //   try {
  //     await addTodo();
  //   }catch (e) {
  //     console.error('Error: ', e.message);
  //   }
  // };

  return <>
    <div>
      <input type="text" placeholder="Item" onChange={e => setVal(e.target.value)}/>
      <button onClick={addTodo}>Add</button>
    </div>
  </>
}

export default Add;
