import React, { useContext } from "react";
import styled from "styled-components";
import { User } from "../../App";
import SideNavBar from "../../components/common/sideNav/SideNav";

const Heading = styled.h1`
  text-align: center;
  margin-top: 30px;
`;

const HomePage = () => {
  const { user } = useContext(User);

  const msg = user ? (
    <Heading>Hello {user.username}</Heading>
  ) : (
    <Heading>You're not logged in</Heading>
  );

  return (
    <div>
      <SideNavBar />
      {msg}
    </div>
  );
};

export default HomePage;
