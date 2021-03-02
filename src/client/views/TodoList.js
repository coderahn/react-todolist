import React from 'react'
import {List,Divider,Typography} from 'antd';

function TodoList(props) {
    return (
        <div>
            <Divider orientation="center">[할 일 목록] / {props.TodoArray.length}개</Divider>
                <br/>
                <List className="demo-loadmore-list" orientation="center">
                    {props.TodoArray.map((item, index) => (
                        <List.Item key={index} orientation="center">
                            <a onClick={() => props.completeTodo(item.TodoIndex)}><Typography.Text orientation="center">{item.TodoValue}</Typography.Text></a>
                        </List.Item>
                    ))}
            </List>
        </div>
    )
}

export default TodoList
