import styled from '@emotion/styled';
import { Button, Grid, TextField } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { LanguageContext } from '../../helpers/LanguageContext';


const CssTextField = styled(TextField)({
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInput-underline:before': {
    borderBottom: '1px solid rgba(255, 255, 255, 0.646) !important',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
});

export function validateName(input, errorsParam) {
  let errors = errorsParam;
  if (!input.name) {
    errors.name = 'name is required';
  }
  else {
    errors.name = '';
  }

  return errors;
};

export function validateEmail(input, errorsParam) {
  let errors = errorsParam;

  if (!input.email) {
    errors.email = 'email is required';
  }
  else if (!/\S+@\S+\.\S+/.test(input.email)) {
    errors.email = 'invalid email';
  }
  else {
    errors.email = '';
  }

  return errors;
};

export function validateMessage(input, errorsParam) {
  let errors = errorsParam;

  if (!input.message) {
    errors.message = 'message is required';
  }
  else {
    errors.message = '';
  }

  return errors;
};

export default function Contact() {
  const [spanish] = useContext(LanguageContext)
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [input, setInput] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleNameInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validateName({
      ...input,
      [e.target.name]: e.target.value
    }, errors));
  }

  const handleEmailInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validateEmail({
      ...input,
      [e.target.name]: e.target.value
    }, errors));
  }

  const handleMessageInputChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
    setErrors(validateMessage({
      ...input,
      [e.target.name]: e.target.value
    }, errors));
  }

  console.log(errors.name);

  return (
    <Grid container direction="column" alignItems="center" xs={12} className='contact section' id='contact'>
      <Grid item container className='contactTitle'>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInLeftBig">
          <h1>{spanish ? 'Contacto' : 'Contact'}</h1>
        </AnimationOnScroll>
      </Grid>
      <Grid item container direction="column" xs={7} p={`2%`} className="form">
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeInRightBig">
          <form action="https://formsubmit.co/juanbrusasca96@gmail.com" method='POST' >
            {errors.name === 'name is required' ?
              <CssTextField label={spanish ? "Nombre" : 'Name'} id="custom-css-outlined-input" variant="standard" className="input" name='name' value={input['name']} onChange={handleNameInputChange} error helperText={errors['name']} /> :
              <CssTextField label={spanish ? "Nombre" : 'Name'} id="custom-css-outlined-input" variant="standard" className="input" name='name' value={input['name']} onChange={handleNameInputChange} />
            }
            {errors.email === 'email is required' || errors.email === 'invalid email' ?
              <CssTextField label="Email" id="custom-css-outlined-input" variant="standard" className="input" name='email' value={input['email']} onChange={handleEmailInputChange} error helperText={errors['email']} /> :
              <CssTextField label="Email" id="custom-css-outlined-input" variant="standard" className="input" name='email' value={input['email']} onChange={handleEmailInputChange} />

            }
            {errors.message === 'message is required' ?
              <CssTextField label={spanish ? "Mensaje" : 'Message'} id="custom-css-outlined-input" variant="standard" className="input" multiline rows={5} name='message' value={input['message']} onChange={handleMessageInputChange} error helperText={errors['message']} /> :
              <CssTextField label={spanish ? "Mensaje" : 'Message'} id="custom-css-outlined-input" variant="standard" className="input" multiline rows={5} name='message' value={input['message']} onChange={handleMessageInputChange} />

            }
            <input type="hidden" name="_subject" value="Portfolio contacto" />
            <input type="hidden" name="_next" value="https://juanbrusasca.netlify.app/" />
            {
              input.name && input.email && input.message && errors.email !== 'invalid email' ? <Button variant="contained" className='button' type="submit">Enviar</Button> : <Button variant="contained" disabled style={{ color: 'black', backgroundColor: 'grey', fontWeight: 'bold' }}>{spanish ? 'Enviar' : 'Send'}</Button>
            }

          </form>
        </AnimationOnScroll>
      </Grid>
    </Grid>
  )
}
