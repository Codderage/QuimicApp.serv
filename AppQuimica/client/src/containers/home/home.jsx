import React from "react";
import Footer from "../../components/common/footer/Footer";
import NavBar from "../../components/common/navBar/NavBar";
import styled, { css } from "styled-components";

const Heading = styled.h1`
    text-align: center;
    margin-top: 30px;
  `;

const HomePage = (props) => {

  // console.log(props);

  const msg = props.user ? <Heading>Hello {props.user.username}</Heading> : <Heading>You're not logged in</Heading>;

  return (
    <div>
      <NavBar />
      {msg}
      <Footer />
    </div>
  );
};

export default HomePage;
