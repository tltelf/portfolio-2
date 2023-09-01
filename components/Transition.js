import { motion } from 'framer-motion';

const transitionVariants = {
  initial: {
    x: '100%',
    zIndex: '-1',
    opacity: 1,
  },
  animate: {
    x: '100%',
    zIndex: '-1',
    opacity: 0,
  },
  exit: {
    x: '100%',
    zIndex: '1',
    opacity: 1,
  }
}

const Transition = () => {
  return (
    <>
      <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-[#2e2257]'
        variants={transitionVariants} initial='initial' animate='animate' exit='exit' transition={{delay: 0.2, duration: 0.6, ease: 'easeInOut'}}
      >
      </motion.div>
    </>
  );
};

export default Transition;
