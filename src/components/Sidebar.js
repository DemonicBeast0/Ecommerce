
import React, { useState } from "react";
import { MenuUnfoldOutlined, MenuFoldOutlined, WhatsAppOutlined, FacebookOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';
import { Routes, Route, Link } from "react-router-dom";
import { Switch, Button } from "antd";


import { HomeOutlined,
   DatabaseOutlined,
    PhoneOutlined,
      InfoOutlined,
        ProductOutlined,
          DashboardOutlined} from '@ant-design/icons';
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Data from "../pages/DataTable";
import About from "../pages/About";
import Product from "../pages/Product";
import { Menu} from "antd";


const Slidebar = () => {
  const [theme, setTheme] = useState('dark');
  const [current, setCurrent] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  const changeTheme = value => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  function facebookbutton() {
    window.open("https://www.facebook.com/pratik.majhi.9876", "_blank");
    
  }

  function whatsappbutton() {
    window.open("https://wa.me/9811046503", "_blank");
  }

  function linkedinbutton() {
    window.open("https://www.linkedin.com/in/pratik-majhi-743016263/", "_blank");
  }

  function mailbutton() {
    window.open("mailto:pratikmajhi9876@gmail.com", "_blank");
  }

  const items = [
    {
      key: 'dashboard',
      label: <Link to="/">Dashboard</Link>,
      icon: <DashboardOutlined />,
    },
    {
      key: 'home',
      label: <Link to="/">Home</Link>,
      icon: <HomeOutlined />,
     
    },
    {
      key: 'data',
      label: <Link to="DataTable/">Data Table</Link>,
      icon: <DatabaseOutlined />,
    },
    {
      key: 'sub3',
      label: <Link to="Contact/">Contact</Link>,
      icon: <PhoneOutlined />,
      children: [
        { key: '1', label: <button onClick={whatsappbutton}>WhatsApp</button>, icon:<WhatsAppOutlined/> },
        { key: '2', label: <button onClick ={facebookbutton}>Facebook</button>, icon:<FacebookOutlined/> },
        { key: '3', label: <button onClick={linkedinbutton} >Linkedin</button>, icon:<LinkedinOutlined/> },
        { key: '4', label: <button onClick={mailbutton}>Mail</button>, icon:<MailOutlined/> },
      ],
      
    },
    
    {
      key: 'Product',
      label: <Link to="product/">Product</Link>,
      icon: <ProductOutlined/>,
    },
    {
      key: 'About',
      label: <Link to="About/">About</Link>,
      icon: <InfoOutlined />,
    }
  ]
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: 10,
          padding: "1 8px 8px 8px",
          
        }}
      ></div>

      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 200 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
        inlineCollapsed={collapsed}
        items={items}
      />

      <Button type="primary" onClick={toggleCollapsed}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Switch
        position ="top-right"
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />

    

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/DataTable" element={<Data />} />
        <Route path="/About" element={<About />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </>
  );
};

export default Slidebar;
