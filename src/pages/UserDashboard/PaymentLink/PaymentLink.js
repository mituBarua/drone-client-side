import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFirebase from "../../../Hooks/useFirebase";
import payment from "../../../images/payment.jpg";
const PaymentLink = () => {
  const { user } = useFirebase();
  const {
    register,
    handleSubmit,
  } = useForm();
  return (
    <>
     <h3 className="mt-3">Make Payment Please</h3>
      <Row>
        <Col md={6}>
          <div className="container my-5">
            <div className="login-box  m-auto mt-5">
              <div className="event-box">
                <div className="login-form">
                  <form onSubmit={handleSubmit()}>
                    <input
                      {...register("name")}
                      placeholder={user?.displayName ? user?.displayName : 'Name'} 
                    
                      type="text"
                      className="p-2 m-2 w-100"
                    />

                    <input
                      {...register("email")}
                      placeholder={user?.email}
                      defaultValue={user?.email}
                      type="text"
                      className="p-2 m-2 w-100"
                    />

                    <input
                      {...register("phone")}
                      placeholder="Phone"
                      className="p-2 m-2 w-100"
                      type="text"
                    />

                    <input
                      {...register("card")}
                      placeholder="Card No"
                      className="p-2 m-2 w-100"
                      type="number"
                    />

                    <input
                      type="submit"
                      value="Pay Now"
                      className="booknow"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col md={6}>
          <img className="w-100" src={payment} alt="payment" />
        </Col>
      </Row>
    </>
  );
};

export default PaymentLink;
