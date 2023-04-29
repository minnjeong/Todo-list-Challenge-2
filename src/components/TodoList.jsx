import TodoItem from "./TodoItem"

export default function TodoList(props) {
    return (
        <div className="list">
            <span>
                {props.title}
            </span>

            <div className="listWrapper">
                <div className="listContainer">
                    {props.todo
                    .filter((todo) => todo.isDone===props.isWorking)
                    .map((todo)=> {
                        return (
                            <TodoItem todo={todo} clickRemoveHandler={props.clickRemoveHandler} completeHandler={props.completeHandler}/>
                        );
                    })
                    }
                </div>
            </div>
        </div>
    )
}