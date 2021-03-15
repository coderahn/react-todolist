import React from 'react'
import {List,Divider,Typography} from 'antd';

function CompleteList(props) {
    return (
        <div>
            <Divider orientation="center">[완료 목록]</Divider>
            <br/>
            <List className="demo-loadmore-list" orientation="center">
                {props.CompleteArray.map((item,index) => (
                    <List.Item key={index} orientation="center">
                        <a><Typography.Text orientation="center">{item.TodoValue}</Typography.Text></a>
                    </List.Item>
                ))}
            </List>
        </div>
    )
}

export default CompleteList
