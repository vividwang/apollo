import React, { useState } from 'react';
import gql from "graphql-tag";
import { useMutation } from "@apollo/react-hooks";

const ADD_TODO = gql`
    mutation AddTodo($id: string!, $value: string!){
        addTodo(id: $id, value: $value) @client {
            id
            value
            complete
        }
    }
`;

function Add(props) {
  const [val, setVal] = useState('');
  const [addTodo] = useMutation(ADD_TODO, {
    variables: {
      id: `${(Math.random() * 10000000000000).toFixed(0)}${+new Date()}`,
      value: val
    }
  });

  const handleClick = () => {
    addTodo();
  };

    return <>
      { console.log(' render: ', props.data) }
      <div>
        <input type="text" placeholder="Item" onChange={e => setVal(e.target.value)}/>
        <button onClick={handleClick}>Add</button>
        {props.data.map(v => <div key={v.id}>{v.value}</div>)}
      </div>
    </>
  }

  export default Add;
