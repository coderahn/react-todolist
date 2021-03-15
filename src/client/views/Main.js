import React,{useState} from 'react';
import 'antd/dist/antd.css';
import TodoList from './TodoList';
import CompleteList from './CompleteList';

function Main() {
    const [TodoValue, setTodoValue] = useState("");
    const [TodoIndex, setTodoIndex] = useState(0);
    const [TodoArray, setTodoArray] = useState([]);
    const [CountTodo, setCountTodo] = useState(0);

    const [CompleteArray, setCompleteArray] = useState([]);

    const writingHandler = (e) => {
        setTodoValue(e.currentTarget.value);
    }
      
    const submitHandler = (e) => {
        e.preventDefault();

        if(TodoValue == ''){
            alert("할 일을 입력해주세요.");
            return;    
        }
        const data = {
            TodoIndex : TodoIndex,
            TodoValue : TodoValue
        };

        //setTodoArray([...TodoArray, data]);     //배열데이터 추가 전개연산자 방식
        setTodoArray(TodoArray.concat(data)); //배열데이터 추가 concat 방식
        setTodoIndex(TodoIndex+1);

        setTodoValue('');
    }

    const completeHandler = (num) => {
        let newData = [];
        let completeData = [];

        TodoArray.map((item) => {   //클릭한 Todo를 제외하고 새 배열을 만들기
            if(parseInt(item.TodoIndex) != parseInt(num)){
                newData.push(item);
            }else{
                completeData.push(item);
            }
        });

        setCountTodo(newData.length);
        setTodoArray(newData);  //새롭게 만들어진 배열 setState

        //setCompleteArray([...CompleteArray, completeData]); //완료된 Todo(오류)
        setCompleteArray(CompleteArray.concat(completeData));   //완료된 Todo
        console.log(completeData);
    }

    return (
        <div className="todo-list-template" style={{textAlign: 'center'}}>
            <div className="title">
                <h2>TODO LIST</h2>
            </div>
            <section>
                <form onSubmit={submitHandler}>
                    <input onChange={writingHandler} value={TodoValue} />
                    <button type="submit">등록</button>
                </form>
            </section>

            <br/>

            {/* TodoList */}            
            <TodoList TodoArray={TodoArray} completeTodo={completeHandler} count={CountTodo}/>
            {/* CompleteList */}
            <CompleteList CompleteArray={CompleteArray}/>
        </div>
    )
}

export default Main
