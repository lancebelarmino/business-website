import { Title, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Section from '../Templates/Section';
import AnimatedLink from '../Templates/AnimatedLink';
import { ReactComponent as RightIcon } from '../../assets/right.svg';
import useStyles from './Hero.styles';

const Hero = () => {
  const { classes } = useStyles();
  const isDesktop = useMediaQuery('(min-width: 1000px)');
  const isTablet = useMediaQuery('(max-width: 1000px)');
  const isMobile = useMediaQuery('(max-width: 800px)');

  return (
    <Section size={1236} type={'content'}>
      <div className={classes.intro}>
        <Title order={1} className={classes.heading}>
          Helping businesses achieve their success online
        </Title>

        <AnimatedLink
          link="#contact"
          text="Let's Work Together"
          icon={<RightIcon />}
        />
      </div>

      {isDesktop && (
        <Image
          height={640}
          src="https://f004.backblazeb2.com/file/website-business/hero.jpg"
          alt="3d coding images"
          withPlaceholder
          placeholder={' '}
        />
      )}
      {isTablet && (
        <Image
          // src="https://f004.backblazeb2.com/file/website-business/hero.jpg"
          height={isMobile ? 280 : 468}
          alt="3d coding images"
          withPlaceholder
          placeholder={' '}
        />
      )}
    </Section>
  );
};

export default Hero;
