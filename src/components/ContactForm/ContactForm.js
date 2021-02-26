import React, { useState } from 'react';
import { Box, Text, Button } from 'rebass';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';
import axios from 'axios';
import './ContactForm.css';
import successImg from '../../images/checked.svg';
import errorImg from '../../images/close.svg';

const endpoints = {
  contact: '/.netlify/functions/sendMail',
};

const Form = styled(Box)`
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const FormGroup = styled(Box)`
  label {
    em {
      color: red;
    }
  }
`;

const SuccessImage = styled.img`
  width: 100px;
`;

const ContactForm = () => {
  const [data, setData] = useState({
    name: null,
    email: null,
    message: null,
  });
  const intl = useIntl();

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const isValid = () => {
    const { name, email, message } = data;

    if (name && email && message) {
      return true;
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValid()) return;

    axios
      .post(endpoints.contact, JSON.stringify(data))
      .then((response) => {
        if (response.status !== 200) {
          handleError();
        } else {
          handleSuccess();
        }
      })
      .catch(() => {
        handleError();
      });
  };

  const handleSuccess = () => {
    setData({ name: null, email: null, message: null });
    setShowSuccess(true);
  };

  const handleError = () => {
    setShowError(true);
  };

  return (
    <Box pl="10%" pr="10%" m="0 auto">
      {showSuccess ? (
        <Box mt="30px" sx={{ textAlign: 'center' }}>
          <SuccessImage src={successImg} alt="successful form" />
          <Text mt="20px" mb={['100px', '0']}>
            {intl.formatMessage({ id: 'contact.form.success' })}
          </Text>
        </Box>
      ) : showError ? (
        <Box mt="30px" sx={{ textAlign: 'center' }}>
          <SuccessImage src={errorImg} alt="error form" />
          <Text mt="20px" mb={['100px', '0']}>
            {intl.formatMessage({ id: 'contact.form.error' })}
          </Text>
        </Box>
      ) : (
        <Box>
          <Text m="auto" width={['100%', '75%']}>
            <em style={{ color: 'red' }}>*</em>{' '}
            {intl.formatMessage({ id: 'contact.form.required' })}
          </Text>
          <Form
            as="form"
            name="contact"
            className="contact-form"
            data-netlify="true"
            onSubmit={handleSubmit}
            width={['100%', '75%']}
          >
            <FormGroup
              mr="2%"
              width={['100%', '49%']}
              display={['block', 'inline-block']}
            >
              <label>
                {intl.formatMessage({ id: 'contact.form.name' })} <em>*</em>
              </label>
              <input
                name="name"
                type="text"
                class="feedback-input name"
                onChange={handleInputChange}
                value={data.name}
              />
            </FormGroup>
            <FormGroup
              mr="0"
              width={['100%', '49%']}
              display={['block', 'inline-block']}
            >
              <label>
                {intl.formatMessage({ id: 'contact.form.mail' })} <em>*</em>
              </label>
              <input
                name="email"
                type="text"
                class="feedback-input email"
                onChange={handleInputChange}
                value={data.email}
              />
            </FormGroup>
            <FormGroup>
              <label>
                {intl.formatMessage({ id: 'contact.form.message' })} <em>*</em>
              </label>
              <textarea
                name="message"
                class="feedback-input msg"
                onChange={handleInputChange}
                value={data.message}
              ></textarea>
            </FormGroup>
            <Button
              type="submit"
              className={`submit-button ${!isValid() ? 'disabled' : ''}`}
              mb={['50px', '0']}
            >
              {intl.formatMessage({ id: 'contact.form.submit' })}
            </Button>
          </Form>
        </Box>
      )}
    </Box>
  );
};

export default ContactForm;
