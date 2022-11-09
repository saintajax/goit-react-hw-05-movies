import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  width: 560px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  ::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const SearchForm = styled(Form)`
  margin-right: auto;
  margin-left: auto;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 3px;
  overflow: hidden;
`;

export const SearchBtn = styled.button`
  display: inline-block;
  width: 28px;
  height: 28px;
  border: 0;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;

  :hover {
    opacity: 1;
  }
`;
