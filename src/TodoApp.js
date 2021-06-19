import React from 'react';
import { view as Todos } from './todos';
import { view as Filter } from './filter';

export default function TodoApp() {
  return (
    <>
      <Todos />
      <Filter />
    </>
  );
}
