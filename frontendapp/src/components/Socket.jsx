import { Button, Input,Row,Col } from 'antd';
const { TextArea } = Input;
import React from 'react'
import { useEffect,useState } from 'react';
import { io } from "socket.io-client";
import config from './config';
import { Avatar, List } from 'antd';
import axios from 'axios';



function Socket() {

    const [socketObj,setSocketObj]=useState("");
    const [message,setMessage]=useState("");
    const [userList,setUserList]=useState([]);
    const [username,setUsername]=useState("");


    const getUserList=()=>{
        axios.get("http://localhost:8000/userlist").then(response=>{
            setUserList(response.data.userList);

        }).catch(err=>{
            console.log(err);
        })
    }

      

    useEffect(()=>{
        const socket = io(config.SOCKETSERVER,{
            query: {
              username:localStorage.getItem("username")
            }
          });
        setSocketObj(socket);

        socket.on("groupchat",function(data){
            console.log(data);

        })

        getUserList();


    },[])

    const handleChange=(event)=>{
        setMessage(event.target.value);

    }

    const handleClick=()=>{

        socketObj.emit("message",{message:message,id:username});

    }

    const selectUsername=(username)=>{
        setUsername(username);

    }

  return (
    <div style={{marginTop:"200px"}}>
        <Row>
        <Col span={12} offset={6}>
            <h1>Hello Chat</h1>

        <TextArea rows={4} onChange={handleChange} /> 


<Button type='primary' style={{marginTop:"20px"}} onClick={handleClick}>
Send Message
</Button>
</Col>



        </Row>

        <Row>
            <Col span={12} offset={6}>
            
            <List
    itemLayout="horizontal"
    dataSource={userList}
    renderItem={item => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
          title={<a onClick={()=>selectUsername(item.id)} href="#">{item.title}</a>}
     
          description={item.id}
        />
      </List.Item>
    )}
  />
  </Col>
        </Row>


    </div>
  )
}

export default Socket