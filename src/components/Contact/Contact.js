import React, { useState } from 'react';
import { Title, Text, Anchor, Group, SimpleGrid } from '@mantine/core';
import Section from '../Templates/Section';
import ContactForm from './ContactForm';
import useStyles from './Contact.styles';

const Contact = () => {
  const { classes } = useStyles();

  return (
    <Section id="contact" size={1236} type="content">
      <SimpleGrid
        className={classes.wrapper}
        cols={2}
        spacing={160}
        breakpoints={[
          { maxWidth: 1000, cols: 1, spacing: '120px' },
          { maxWidth: 800, cols: 1, spacing: 'sm' },
        ]}>
        <SimpleGrid
          className={classes.infoWrapper}
          cols={1}
          breakpoints={[
            { maxWidth: 1000, cols: 2 },
            { maxWidth: 800, cols: 1, spacing: '28px' },
          ]}>
          <div className={classes.infoHeader}>
            <Title order={2} className={classes.infoHeading}>
              Let's Talk
            </Title>
            <Anchor
              className={classes.infoSubheading}
              href="mailto: lancebelarmino@gmail.com">
              lancebelarmino@gmail.com
            </Anchor>
          </div>

          <Group className={classes.details} position="apart">
            <a className={classes.detailsBlock} href="tel: +639063969733">
              <Title className={classes.detailsHeading} order={5}>
                Phone
              </Title>
              <Text>(063) 906 3969 733</Text>
            </a>

            <a
              href="https://t.me/lancebelarmino"
              target="_blank"
              rel="noreferrer">
              <Title className={classes.detailsHeading} order={5}>
                Telegram
              </Title>
              <Text>https://t.me/lancebelarmino</Text>
            </a>
          </Group>
        </SimpleGrid>

        <ContactForm />
      </SimpleGrid>
    </Section>
  );
};

export default Contact;
