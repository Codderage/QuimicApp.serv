import styled, { css } from "styled-components";

const baseInputStyles = css`
  border: 2px solid #1282a2 !important;
  height: auto;
  font-family: "Lexend", monospace;
  font-size: 15px;
  &:focus {
    outline: none;
    box-shadow: inset 0 1px 1px #0340789a, 0 0 8px #1283a29f;
  }
`;

export const Title = styled.h1`
  color: #034078;
  font-family: "DM Serif Text";
  font-weight: bold;
  padding: 4rem 0 3rem 0;
`;

export const TextInput = styled.input`
  ${baseInputStyles}
`;
TextInput.defaultProps = {
  type: "text",
  className: "textInput",
};

export const EmailInput = styled.input`
  ${baseInputStyles}
`;
EmailInput.defaultProps = {
  type: "email",
  id: "registerEmail",
  placeholder: "Introduce el email",
};

export const PasswordInput = styled.input`
  ${baseInputStyles}
`;
PasswordInput.defaultProps = {
  type: "password",
};

export const SendButton = styled.button`
  background-color: #034078;
  color: #fefcfb;
  padding: 0.3rem 4rem;
  border-radius: 0.15rem;
  width: 100%;
  font-size: 16px;
  font-family: "Lexend", "Arial";
  &:hover {
    background-color: #1282a2;
    color: #fefcfb;
  }
`;

SendButton.defaultProps = {
  type: "submit",
  name: "submit",
};

export const AdminCheckbox = styled.input`
  ${baseInputStyles};
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 1em;
  height: 1em;
  margin-top: 0.25em;
  vertical-align: top;
  background-color: #fefcfb;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border-radius: 0.25em;
  border-color: 2px solid #1282a2 !important;
  + label {
    font-size: 14px;
    font-family: "Lexend";
    vertical-align: top;
    margin-top: 0.09rem;
  }
  &:checked {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    background-color: #034078;
  }
`;
AdminCheckbox.defaultProps = {
  type: "checkbox",
  id: "esAdmin",
  className: "form-check-input",
};

export const Seccion = styled.section`
  margin-bottom: 5.3rem;
`;
