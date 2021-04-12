import React, { useState } from 'react';

 import {getKey} from "../lib/util";

 function Todo() {
   const [items, putItems] = React.useState([
     
     { key: getKey(), text: '日本語の宿題', done: false },
     { key: getKey(), text: 'reactを勉強する', done: false },
     { key: getKey(), text: '明日の準備をする', done: false },
    
   ]);

   const handleAdd = text => {
    putItems([...items, { key: getKey(), text, done: false }]);
  };

   return (
     <div className="panel">
       <div className="panel-heading">
         ITSS ToDoアプリ
       </div>
       <Input onAdd={handleAdd} />
       {items.map(item => (
         <label className="panel-block">
             <input type="checkbox" />
             {item.text}
         </label>
       ))}
       <div className="panel-block">
         {items.length} items
       </div>
     </div>
   );
 }

 export default Todo; 