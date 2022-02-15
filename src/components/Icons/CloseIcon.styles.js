import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  icon: {
    stroke: theme.colors.gray[2],
    transition: theme.other.transition.stroke,

    '&:hover': {
      stroke: theme.colors.black,
    },
  },
}));

export default useStyles;
