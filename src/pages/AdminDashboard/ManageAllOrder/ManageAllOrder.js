import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  const [allPurchaseInfo, setAllPurchaseInfo] = useState([]);
  const [control, setConrol] = useState(false);
  
  useEffect(() => {
    fetch("https://murmuring-ridge-12828.herokuapp.com/allPurchaseInfo")
      .then((res) => res.json())
      .then((data) => setAllPurchaseInfo(data));
  }, [control]);

  const handleDelete = (id) => {
    window.confirm("Are you sure ?");
    fetch(`https://murmuring-ridge-12828.herokuapp.com/deleteAllPurchase/${id}`, {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          setConrol(!control);
        } else {
          setConrol(false);
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
    <div>
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
          {allPurchaseInfo?.map((singlePurchase, index) => (
            <tbody>
              <tr>
                <td>{index}</td>
                <td>{singlePurchase?.name}</td>
                <td>{singlePurchase?.email}</td>
                <td>{singlePurchase?.phone}</td>
                <td>{singlePurchase?.details}</td>
                <td>{singlePurchase?.message}</td>
                <td>
                  <button
                    className="statusbtn"
                    onClick={() => handleStatus(singlePurchase._id)}
                  >
                    {singlePurchase?.status}
                  </button>
                </td>
                <button
                  onClick={() => handleDelete(singlePurchase._id)}
                  className="deleteBtn p-2"
                >
                  Delete
                </button>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrder;