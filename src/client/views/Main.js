import React,{useState} from 'react';
import {List,Divider,Typography} from 'antd';
import 'antd/dist/antd.css';

function Main() {
    const [TodoValue, setTodoValue] = useState("");
    const [TodoIndex, setTodoIndex] = useState(0);
    const [TodoArray, setTodoArray] = useState([]);

    const writingHandler = (e) => {
        setTodoValue(e.currentTarget.value);
    }
      
    const submitHandler = (e) => {
        e.preventDefault();

        const data = {
            TodoIndex : TodoIndex,
            TodoValue : TodoValue
        };

        setTodoArray([...TodoArray, data]);     //배열데이터 추가 전개연산자 방식
        //setTodoArray(TodoArray.concat(data)); //배열데이터 추가 concat 방식
        setTodoIndex(TodoIndex+1);

        setTodoValue('');
    }

    const completeHandler = (num) => {
        let newData = [];

        TodoArray.map((item) => {   //클릭한 Todo를 제외하고 새 배열을 만들기
            if(parseInt(item.TodoIndex) != parseInt(num)){
                newData.push(item);
            }

        });

        setTodoArray(newData);  //새롭게 만들어진 배열 setState
    }

    return (
        <div className="todo-list-template"   style={{textAlign: 'center'}}>
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
            <>
                <Divider orientation="left">[할 일 목록]</Divider>
                <br/>
                <List className="demo-loadmore-list">
                    {TodoArray.map((item, index) => (
                        <List.Item key={index} style={{textAlign: 'center'}}>
                            <a onClick={() => completeHandler(item.TodoIndex)}><Typography.Text>  {item.TodoValue}</Typography.Text></a>
                        </List.Item>
                    ))}
                </List>
            </>
            <section>
                
            
            </section>
        </div>
    )
}

export default Main
