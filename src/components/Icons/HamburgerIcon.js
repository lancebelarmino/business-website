import { motion } from 'framer-motion';
import useStyles from '../Icons/HamburgerIcon.styles';

const topBarVariant = {
  hidden: {
    x: 100,
  },
  visible: {
    x: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    x: 100,
    transition: { duration: 0.3 },
  },
};

const middleBarVariant = {
  hidden: {
    x: 100,
  },
  visible: {
    x: 0,
    transition: { duration: 0.3, delay: 0.1 },
  },
  exit: {
    x: 100,
    transition: { duration: 0.3, delay: 0.1 },
  },
};

const bottomBarVariant = {
  hidden: {
    x: 100,
  },
  visible: {
    x: 0,
    transition: { duration: 0.3, delay: 0.2 },
  },
  exit: {
    x: 100,
    transition: { duration: 0.3, delay: 0.2 },
  },
};

const HamburgerIcon = () => {
  const { classes } = useStyles();

  return (
    <motion.svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.icon}
      initial="hidden"
      animate="visible"
      exit="exit">
      <motion.path d="M6 0H20V2H6V0Z" variants={topBarVariant} />
      <motion.path d="M0 6H20V8H0V6Z" variants={middleBarVariant} />
      <motion.path d="M10 12H20V14H10V12Z" variants={bottomBarVariant} />
    </motion.svg>
  );
};

export default HamburgerIcon;
