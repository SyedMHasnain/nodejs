import React from "react";
import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const App = ({ key, Data , img,avatar }) => (
  <Card
  
    key={key}
    style={{
      width: 300,
        
    }}
    cover={
      <img
        alt="example"
        src={img}
      />
    }
    actions={[
      <SettingOutlined key="setting" />,
      <EditOutlined key="edit" />,
      <EllipsisOutlined key="ellipsis" />,
    ]}>
    <Meta
      avatar={<Avatar src={avatar} />}
      title={Data}
      description="This is the description"
    />
  </Card>
);

export default App;
