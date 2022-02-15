import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  icon: {
    fill: theme.colors.gray[2],
    transition: theme.other.transition.fill,

    '&:hover': {
      fill: theme.colors.black,
    },
  },
}));

export default useStyles;
