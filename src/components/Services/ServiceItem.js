import React from 'react';
import { Title, Text } from '@mantine/core';
import useStyles from './ServiceItem.styles';

const ServiceItem = ({ icon, title, description }) => {
  const { classes } = useStyles();

  return (
    <div className={classes.block}>
      {icon}
      <Title className={classes.heading} order={4}>
        {title}
      </Title>
      <Text order={4}>{description}</Text>
    </div>
  );
};

export default ServiceItem;
