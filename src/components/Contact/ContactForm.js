import { useState } from 'react';
import {
  Title,
  Text,
  Group,
  SimpleGrid,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useForm } from '@mantine/hooks';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedButton from '../Templates/AnimatedButton';
import { ReactComponent as ErrorIcon } from '../../assets/error.svg';
import { ReactComponent as SuccessIcon } from '../../assets/success.svg';
import { ReactComponent as RightIcon } from '../../assets/right.svg';
import useStyles from './ContactForm.styles';

const inputVariant = {
  animate: {
    top: '-24px',
    fontSize: '12px',
    transition: { duration: 0.15 },
  },

  neutral: {
    top: '0',
    fontSize: '16px',
    transition: { duration: 0.15 },
  },
};

const encode = (data) => {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
};

const ContactForm = () => {
  const [animateName, setAnimateName] = useState(false);
  const [animateEmail, setAnimateEmail] = useState(false);
  const [animateTextarea, setAnimateTextarea] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      textarea: '',
    },

    validationRules: {
      name: (value) => /^[a-zs]+$/i.test(value),
      email: (value) => /^\S+@\S+$/.test(value),
    },

    errorMessages: { name: 'Invalid name', email: 'Invalid email' },
  });
  const { classes } = useStyles();

  const nameAnimation = animateName ? 'animate' : 'neutral';
  const emailAnimation = animateEmail ? 'animate' : 'neutral';
  const textareaAnimation = animateTextarea ? 'animate' : 'neutral';

  const changeHandler = (e) => {
    form.setFieldValue(e.target.id, e.target.value);
  };

  const blurHandler = (e) => {
    const field = e.target.id;
    const userInput = e.target.value;

    form.validateField(field);

    if (userInput === '') {
      if (field === 'name') {
        setAnimateName(false);
      } else if (field === 'email') {
        setAnimateEmail(false);
      } else if (field === 'textarea') {
        setAnimateTextarea(false);
      }
    }
  };

  const submitHandler = (values) => {
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...values }),
    })
      .then(() => {
        setFormSubmitted(true);
        setAnimateName(false);
        setAnimateEmail(false);
        setAnimateTextarea(false);
        form.reset();
      })
      .catch((error) => alert(error));

    setTimeout(() => {
      setFormSubmitted(false);
    }, 5000);
  };

  console.log(form.values);

  return (
    <div className={classes.form}>
      <Title order={4} className={classes.heading}>
        Tell me more
      </Title>

      <form
        onSubmit={form.onSubmit(submitHandler)}
        data-netlify="true"
        data-netlify-recaptcha="true">
        <input type="hidden" name="form-name" value="contact" />

        <SimpleGrid
          className={classes.formGroup}
          cols={2}
          spacing={40}
          breakpoints={[{ maxWidth: 800, cols: 1, spacing: '60px' }]}>
          <div className={classes.row}>
            <TextInput
              id="name"
              classNames={{
                input: form.errors.name ? classes.errorInput : '',
              }}
              name="name"
              value={form.values.name}
              onFocus={(e) => e.target.value === '' && setAnimateName(true)}
              onChange={changeHandler}
              onBlur={blurHandler}
              required
            />

            <motion.span
              className={classes.floatingLabel}
              animate={nameAnimation}
              variants={inputVariant}>
              Name
            </motion.span>

            <AnimatePresence>
              {form.errors.name && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  <ErrorIcon className={classes.errorIcon} />
                  <p className={classes.errorMessage}>{form.errors.name}</p>
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className={classes.row}>
            <TextInput
              id="email"
              classNames={{
                input: form.errors.email ? classes.errorInput : '',
              }}
              name="email"
              value={form.values.email}
              onFocus={(e) => e.target.value === '' && setAnimateEmail(true)}
              onChange={changeHandler}
              onBlur={blurHandler}
              required
            />

            <motion.span
              className={classes.floatingLabel}
              animate={emailAnimation}
              variants={inputVariant}>
              Email
            </motion.span>

            <AnimatePresence>
              {form.errors.email && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}>
                  <ErrorIcon className={classes.errorIcon} />
                  <p className={classes.errorMessage}>{form.errors.email}</p>
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </SimpleGrid>

        <div className={`${classes.row} ${classes.lastRow}`}>
          <Textarea
            id="textarea"
            name="description"
            value={form.values.textarea}
            variant="unstyled"
            minRows={2}
            onFocus={(e) => e.target.value === '' && setAnimateTextarea(true)}
            onChange={changeHandler}
            onBlur={blurHandler}
            autosize
            required
          />

          <motion.span
            className={classes.floatingLabelTextarea}
            animate={textareaAnimation}
            variants={inputVariant}>
            Project Details
          </motion.span>
        </div>

        <AnimatedButton type="submit" text="Submit" icon={<RightIcon />} />

        <div data-netlify-recaptcha="true" />
      </form>

      <AnimatePresence>
        {formSubmitted && (
          <Group
            className={classes.success}
            spacing={8}
            component={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <Text className={classes.successMessage}>Form Submitted!</Text>
            <SuccessIcon />
          </Group>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactForm;
