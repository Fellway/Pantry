import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  margin: 30px 0;
  position: relative;
  flex-shrink: 0;
  input {
    letter-spacing: 1px;
    color: #fff;
    font-size: 16px;
    border: none;
    line-height: 22px;
    width: 100%;
    background: none;
  }
  input:focus,
  textarea:focus {
    outline: none;
  }

  input:focus + label,
  textarea:focus + label {
    top: -22px;
    font-size: 13px;
  }

  input:not(:placeholder-shown) + label,
  textarea:not(:placeholder-shown) + label {
    top: -22px;
    font-size: 13px;
  }

  input:focus ~ .forms__item__bar,
  textarea:focus ~ .forms__item__bar {
    background: #1e58ff;
  }
`;

const Bar = styled.div`
  width: 100%;
  height: 2px;
  background: #7d7d7d;
  transition: 0.1s all;
`;

const Label = styled.label`
  color: #7d7d7d;
  position: absolute;
  top: 3px;
  left: 0;
  transition: 0.2s ease-out all;
  font-size: 16px;
`;

const LabelSelect = styled.label`
  top: -22px;
  position: absolute;
  left: 0;
  font-size: 13px;
  color: #7d7d7d;
`;

const Select = styled.select`
  letter-spacing: 1px;
  color: white;
  font-size: 16px;
  line-height: 22px;
  width: 100%;
  background: none;
  border: none;
`;

const Option = styled.option`
  color: #7d7d7d;
`;

const Input = ({ name, label, maxLength, select, type, ...props }) => (
  <Wrapper>
    {select ? (
      <>
        <Select type="text" name={name} id={name} {...props} required>
          <Option value="volvo">Volvo</Option>
          <Option value="volvo">Volvo</Option>
        </Select>
        <LabelSelect htmlFor={name}>{label}</LabelSelect>
      </>
    ) : (
      <>
        <input
          autoComplete="off"
          type={type}
          name={name}
          id={name}
          maxLength={maxLength}
          placeholder=" "
          required
          {...props}
        />
        <Label htmlFor={name}>{label}</Label>
      </>
    )}

    <Bar />
  </Wrapper>
);

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  maxLength: PropTypes.number,
};

Input.defaultProps = {
  type: 'text',
  maxLength: 200,
};

export default Input;
