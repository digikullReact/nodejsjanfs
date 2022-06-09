import { Space, Table, Tag } from 'antd';
import React,{useEffect,useState} from 'react';
import { Col, Row } from 'antd';

import axios from 'axios';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'age',
  },


  {
    title: 'Action',
    key: '_id',
    render: (_, record) => (
      <Space size="middle">
        
        <a>Delete</a>
      </Space>
    ),
  },
];


const Home = () => {
  const [data,setData]=useState([]);

  useEffect(()=>{

    const headers = {
    
      'token': localStorage.getItem("token")
    }

    axios.get("http://localhost:8080/user/",{
      headers: headers
    }).then(response=>{

    if(response["data"].data){
      setData(response["data"].data)

    }

    }).catch(err=>{
      console.log(err);
    })



  },[])


  return(
    <Row style={{marginTop:"120px"}}>
    
    <Col span={12} offset={6}>
      <h1>User Details</h1>
    <Table columns={columns} dataSource={data} />
    </Col>
  </Row>

  )
}



export default Home;