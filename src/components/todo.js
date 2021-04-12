import React, { useState } from 'react';

import {getKey} from "../lib/util";
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';

 function Todo() {
   const [items, putItems] = React.useState([
     
     { key: getKey(), text: '日本語の宿題', done: false },
     { key: getKey(), text: 'reactを勉強する', done: false },
     { key: getKey(), text: '明日の準備をする', done: false },
    
   ]);

   const [filter, setFilter] = React.useState('ALL');

   const displayItems = items.filter(item => {
     if (filter === 'ALL') return true;
     if (filter === 'TODO') return !item.done;
     if (filter === 'DONE') return item.done;
   });

   const handleAdd = text => {
    putItems([...items, { key: getKey(), text, done: false }]);
  };

  const handleFilterChange = value => setFilter(value);
   return (
     <div className="panel">
       <div className="panel-heading">
         ITSS ToDoアプリ
       </div>
       <Input onAdd={handleAdd} />
       <Filter
         onChange={handleFilterChange}
         value={filter}
       />
       {displayItems.map(item => (
         <TodoItem 
           key={item.key}
           item={item}
           onCheck={handleCheck}
         />
       ))}
       <div className="panel-block">
       {displayItems.length} items
       </div>
     </div>
   );
 }

 export default Todo; 