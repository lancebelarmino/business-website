import { motion } from 'framer-motion';
import useStyles from '../Icons/CloseIcon.styles';

const close = {
  hidden: {
    pathLength: 0,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    transition: { duration: 0.3 },
  },
  exit: {
    pathOffset: 1,
    transition: { duration: 0.3 },
  },
};

const CloseIcon = () => {
  const { classes } = useStyles();

  return (
    <motion.svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={classes.icon}
      initial="hidden"
      animate="visible"
      exit="exit">
      <motion.path d="M1 1L15 15" strokeWidth="2" variants={close} />
      <motion.path d="M15 1L1 15" strokeWidth="2" variants={close} />
    </motion.svg>
  );
};

export default CloseIcon;
