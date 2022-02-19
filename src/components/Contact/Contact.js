import React from 'react';
import {
  Title,
  Text,
  Anchor,
  Group,
  Grid,
  TextInput,
  Textarea,
  UnstyledButton,
} from '@mantine/core';
import useStyles from './Contact.styles';
import Section from '../Templates/Section';
const Contact = () => {
  const { classes } = useStyles();

  return (
    <Section id="contact" size={1236} type="content">
      <Group position="apart" className={classes.wrapper}>
        <Group direction="column" className={classes.infoWrapper}>
          <div>
            <Title order={2} className={classes.heading}>
              Let's Talk
            </Title>
            <Text className={classes.subheading}>lancebelarmino@gmail.com</Text>
          </div>

          <Group position="apart" className={classes.details}>
            <div className={classes.detailsBlock}>
              <Title className={classes.detailsHeading} order={5}>
                Phone
              </Title>
              <Text>(063) 906 3969 733</Text>
            </div>

            <div>
              <Title className={classes.detailsHeading} order={5}>
                Telegram
              </Title>
              <Text>https://t.me/lancebelarmino</Text>
            </div>
          </Group>
        </Group>

        <div className={classes.form}>
          <Title order={4} className={classes.formHeading}>
            Tell me more
          </Title>
          <form action="">
            <Grid>
              <Grid.Col lg={6} sm={12} className={classes.formRow}>
                <TextInput placeholder="Name" required />
              </Grid.Col>

              <Grid.Col lg={6} sm={12} className={classes.formRow}>
                <TextInput placeholder="Email" required />
              </Grid.Col>

              <Grid.Col lg={12} className={classes.formRow}>
                <Textarea placeholder="Project Details" />
              </Grid.Col>
            </Grid>

            <UnstyledButton className={classes.formButton}>
              Submit
            </UnstyledButton>
          </form>
        </div>
      </Group>
    </Section>
  );
};

export default Contact;
