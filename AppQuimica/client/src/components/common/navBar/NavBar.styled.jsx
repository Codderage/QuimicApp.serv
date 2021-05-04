import styled from "styled-components";
import logo from "../../../assets/img/logo/logo.svg";

export const Logo = styled.img`
  // width: 5%;
  width: 90px;
  height: auto;
  margin-left: 30px;
`;

Logo.defaultProps = {
  src: logo,
  alt: "logo QuimicApp",
};

// export const 

export const SNav = styled.nav`
  height: 95px;
  background-color: #1283a29f;
  box-shadow: inset 0 1px 1px #0340789a, 0 0 8px #1283a29f;
  font-family: "Cutive Mono", monospace;
  font-size: 24px;
  font-weight: 900;
  letter-spacing: 1px;
  display: flex;
  justify-content: space-between;
`;
