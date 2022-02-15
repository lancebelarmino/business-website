import { Title, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Section from '../Templates/Section';
import useStyles from './Hero.styles';
import hero from '../../assets/hero.jpg';

const Hero = () => {
  const { classes } = useStyles();

  const isDesktop = useMediaQuery('(min-width: 1000px)');
  const isTablet = useMediaQuery('(max-width: 1000px)');
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <Section size={1236} type={'content'}>
      <Title order={1} className={classes.heading}>
        Helping businesses achieve their success online
      </Title>
      {isDesktop && <Image src={hero} alt="3d coding images" withPlaceholder />}
      {isTablet && (
        <Image
          src={hero}
          height={isMobile ? 280 : 468}
          alt="3d coding images"
          withPlaceholder
        />
      )}
    </Section>
  );
};

export default Hero;
