import { Box } from '@mantine/core';
import { useHover, useMediaQuery } from '@mantine/hooks';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetail from './ProjectDetail';
import useImage from '../../hooks/useImage';
import useStyles from './ProjectItem.styles';
import placeholder from '../../assets/placeholder.jpg';

const ProjectItem = ({ image, link, details }) => {
  const backgroundImage = useImage(image);
  const isDesktop = useMediaQuery('(min-width: 800px)');
  const isMobile = useMediaQuery('(max-width: 800px)');
  const { hovered, ref } = useHover();
  const { classes } = useStyles();

  return (
    <>
      <div className={classes.block} ref={ref}>
        <a href={link} target="_blank" rel="noreferrer">
          <Box
            className={`${classes.image}`}
            sx={{
              background: `center bottom / cover no-repeat url("${
                backgroundImage || placeholder
              }")`,
            }}>
            {isDesktop && (
              <AnimatePresence>
                {hovered && (
                  <motion.div
                    key="overlay"
                    className={classes.overlay}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { duration: 0.2, ease: 'easeOut' },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.4 },
                    }}
                  />
                )}

                {hovered && <ProjectDetail {...details} />}
              </AnimatePresence>
            )}
          </Box>
        </a>
      </div>

      {isMobile && <ProjectDetail {...details} />}
    </>
  );
};

export default ProjectItem;
