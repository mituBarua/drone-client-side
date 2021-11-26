import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useFirebase from "../../../Hooks/useFirebase";
import "./MyOrder.css";

const MyOrder = () => {
  const { user } = useFirebase();
  const [myOrder, setMyOrder] = useState([]);
  const [control, setConrol] = useState(false);

  useEffect(() => {
    fetch(`https://murmuring-ridge-12828.herokuapp.com/allPurchaseInfo/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, [user?.email, control]);

  const handleDelete = (id) => {
    window.confirm("Are you sure ?");
    fetch(`https://murmuring-ridge-12828.herokuapp.com/deleteMyPurchase/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(control);
        }
      });
  };
  const handleStatus = (id) => {
    fetch(`https://murmuring-ridge-12828.herokuapp.com/purchaseStatus/${id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        setConrol(!control);
      });
  };
  return (
    <>
      <h3>My Order List</h3>
      <div className="container mt-5">
        <Table striped bordered hover className="cutom-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Product Name</th>
              <th>Message</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          {myOrder?.map((order, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{order?.name}</td>
                <td>{order?.email}</td>
                <td>{order?.phone}</td>
                <td>{order?.details}</td>
                <td>{order?.message}</td>
                <td>
                  <button
                    className="statusbtn"
                    onClick={() => handleStatus(order._id)}
                  >
                    {order?.status}
                  </button>
                </td>
                <button
                  onClick={() => handleDelete(order._id)}
                  className="deleteBtn p-2"
                >
                  Delete
                </button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default MyOrder;
