
// import React, { useState, useEffect } from "react";
// function Product() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//         console.log(data);
//       })
//       .catch((error) => console.error("Error fetching product data:", error));
//   }, []);

//   return (
//     <div>
//       <h1>Product Data</h1>
//       <p>This is the product data page.</p>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {data.map((product) => (
//           <div
//             key={product.id}
//             style={{
//               border: "1px solid #ccc",
//               padding: "10px",
//               width: "250px",
//               borderRadius: "8px",
//               textAlign: "center",
//             }}
//           >
//             <img
//               src={product.image}
//               alt={product.title}
//               style={{ width: "100px", height: "100px", objectFit: "contain" }}
//             />
//             <h3>{product.title}</h3>
//             <p>{product.description.substring(0, 100)}...</p>
//             <p><strong>${product.price}</strong></p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Product;

import React, { useEffect, useState } from "react";
import {
  List,
  Card,
  Button,
  Modal,
  Input,
  Form,
  Dropdown,
  Menu,
  message,
  Popconfirm,
} from "antd";
import { MoreOutlined } from "@ant-design/icons";
// import "antd/dist/antd.css";

const Product = () => {
  const [form] = Form.useForm();
  const [data, setData] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json.slice(0, 10)))
      .catch((err) => console.error("Fetch error:", err));
  }, []);

  const handleSubmit = (values) => {
    if (editingProduct) {
      setData((prev) =>
        prev.map((item) =>
          item.id === editingProduct.id ? { ...item, ...values } : item
        )
      );
      message.success("Product updated");
    } else {
      const newProduct = {
        id: Date.now(),
        ...values,
        image: "https://via.placeholder.com/150",
      };
      setData((prev) => [newProduct, ...prev]);
      message.success("Product added");
    }
    form.resetFields();
    setEditingProduct(null);
    setModalVisible(false);
  };

  const handleEdit = (item) => {
    setEditingProduct(item);
    form.setFieldsValue(item);
    setModalVisible(true);
  };

  const handleDelete = (id) => {
    setData((prev) => prev.filter((item) => item.id !== id));
    message.success("Product deleted");
  };

  const menu = (item) => (
    <Menu>
      <Menu.Item onClick={() => handleEdit(item)}>Edit</Menu.Item>
      <Menu.Item>
        <Popconfirm
          title="Are you sure to delete this?"
          onConfirm={() => handleDelete(item.id)}
          okText="Yes"
          cancelText="No"
        >
          <span style={{ color: "red" }}>Delete</span>
        </Popconfirm>
      </Menu.Item>
    </Menu>
  );

  return (
    <div style={{ padding: "20px", maxWidth: "1000px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2 style={{ margin: 0 }}>Product List </h2>
        <Button
          type="primary"
          onClick={() => {
            setEditingProduct(null);
            form.resetFields();
            setModalVisible(true);
          }}
        >
          Add Product
        </Button>
      </div>

      {/* Product List */}
      <List
        itemLayout="vertical"
        pagination={{ pageSize: 5, position: ["bottomCenter"] }} // Center-aligned pagination
          bordered
        dataSource={data}
        renderItem={(item) => (
          <List.Item key={item.id} style={{ display: "flex", justifyContent: "flex-start" }}>
            <Card
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                width: "100%",
                maxWidth: "700px",
              }}
              bodyStyle={{ display: "flex", gap: "20px", flexGrow: 1 }}
              actions={[
                <Dropdown overlay={menu(item)} trigger={['click']}>
                  <MoreOutlined style={{ fontSize: 20, cursor: "pointer" }} />
                </Dropdown>,
              ]}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100px",
                  height: "100px",
                  objectFit: "contain",
                  marginRight: "20px",
                }}
              />
              <div style={{ flexGrow: 1 }}>
                <h3 style={{ margin: 0 }}>{item.title}</h3>
                <p style={{ margin: "8px 0" }}>{item.description.slice(0, 80)}...</p>
                <strong>${item.price}</strong>
              </div>
            </Card>
          </List.Item>
        )}
      />

      {/* Adding Modal */}
      <Modal
        title={editingProduct ? "Edit Product" : "Add Product"}
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        onOk={() => form.submit()}
        okText={editingProduct ? "Update" : "Add"}
      >
        <Form form={form} layout="vertical" onFinish={handleSubmit}>
          <Form.Item name="title" label="Title" rules={[{ required: true }]}>
            <Input placeholder="Product Title" />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={3} placeholder="Short description" />
          </Form.Item>
          <Form.Item name="price" label="Price" rules={[{ required: true }]}>
            <Input type="number" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Product;
