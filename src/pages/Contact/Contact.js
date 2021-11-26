import React from "react";
import SharedHeader from "../Shared/SharedHeader/SharedHeader";
import "../ProductDetails/ProductDetails.css";
import { Col,  Row  } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useFirebase from "../../Hooks/useFirebase";
import contactImg from '../../images/contact.jpg';
import Footer from "../Shared/Footer/Footer";
const Contact = () => {
    const { user } = useFirebase();
    const {
      register,
      handleSubmit
    } = useForm();
  return (
    <>
      <SharedHeader></SharedHeader>
      <div className="details-banner">
        <Row className="my-5">
          <Col md={12}>
            <div class="breadcrumb-wrap">
              <h2 className="my-5">Contact Us</h2>
            </div>
          
          </Col>
        </Row>
        </div>
        <Row>
          <Col md={6}>
             <img className="w-100" src={contactImg} alt="contactImg"/>
          </Col>
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
        </Row>
         <Footer></Footer>
    </>
  );
};

export default Contact;
