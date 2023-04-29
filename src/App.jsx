import React from 'react'
import { useState } from 'react';
import "./App.css";
// import TodoItem from './components/TodoItem';
import TodoList from './components/TodoList';



const App = () => {

  const [todo, setTodo] = useState([
    { id: 0, title: '공부하기', body: '리액트 공부하기', isDone: false }
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [isDone, setIsDone] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  }

  const bodyChangeHandler = (event) => {
    setBody(event.target.value);
  }

  const clickAddButtonHandler = () => {
    const newTodo = {
      id: todo.length + 1,
      title: title,
      body: body,
      isDone: false
    }
    if (title === '' && body === '') alert('내용을 추가해주세요')
    else setTodo([...todo, newTodo])
  }

  const clickRemoveHandler = (id) => {
    const delTodo = todo.filter((todo) => todo.id !== id);
    setTodo([...delTodo]);
  }

  const completeHandler = (id) => {
    const setDoneTodo = todo.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodo(setDoneTodo);
  }

  // const cancleHandler = (id) => {
  //   const setDoneTodo = todo.map((todo) =>
  //     todo.id === id ? { ...todo, isDone: false } : todo
  //   );
  //   setTodo(setDoneTodo);
  // }


  return (
    <div className='layout'>
      <div className='container'>
        <div> 나의 계획 작성하기 </div>
        <div> min jeong </div>
      </div>
      <div className='listAdd'>
        <div className='input-group'>
          <label className='form-label'>제목</label>
          <input value={title} onChange={titleChangeHandler} />
          <label>내용</label>
          <input value={body} onChange={bodyChangeHandler} />
        </div>
        <button className='add-button' onClick={clickAddButtonHandler}>추가하기</button>
      </div>

      <div className='lists'>
      <TodoList title={'완료 전'} isWorking={false} todo={todo} clickRemoveHandler={clickRemoveHandler} completeHandler={completeHandler} />
      <TodoList title={'완료 후'} isWorking={true} todo={todo} clickRemoveHandler={clickRemoveHandler} completeHandler={completeHandler} />

      </div>
    </div>

  )
}

export default App;