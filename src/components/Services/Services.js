import { Title, Text, SimpleGrid } from '@mantine/core';
import Section from '../Templates/Section';
import ServiceItem from './ServiceItem';
import { ReactComponent as CodeIcon } from '../../assets/code.svg';
import { ReactComponent as NoCodeIcon } from '../../assets/no-code.svg';
import { ReactComponent as EcommerceIcon } from '../../assets/ecommerce.svg';
import { ReactComponent as ContentIcon } from '../../assets/content.svg';
import useStyles from './Services.styles';

const Services = () => {
  const { classes } = useStyles();

  return (
    <Section id="services" size={996} type="content">
      <div className={classes.header}>
        <Text size="lg" className={classes.subheading}>
          Services
        </Text>

        <Title order={2} className={classes.heading}>
          Fueling growth through strategy and technology
        </Title>
      </div>

      <SimpleGrid
        cols={2}
        spacing={80}
        breakpoints={[
          { maxWidth: 1000, cols: 2, spacing: 40 },
          { maxWidth: 800, cols: 1, spacing: 40 },
        ]}>
        <ServiceItem
          icon={<CodeIcon />}
          title="Web Development"
          description="Responsive and optimized website built to scale as you grow."
        />

        <ServiceItem
          icon={<NoCodeIcon />}
          title="No-code Website"
          description="No-code website that is easily maintainable without a developer."
        />

        <ServiceItem
          icon={<EcommerceIcon />}
          title="E-commerce Website"
          description="Online store with great shopping experience built with Shopify or Woocommerce."
        />

        <ServiceItem
          icon={<ContentIcon />}
          title="Content Management"
          description="I’ll manage your website contents so you can focus on other parts ofa your business."
        />
      </SimpleGrid>
    </Section>
  );
};

export default Services;
