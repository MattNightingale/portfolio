import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";

export const SlideInFromLeft = ({
  children,
  offset = 300,
  duration = 1.2,
  delay = 0,
  fullWidth = false,
  viewAmount = 0.1,
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: viewAmount });

  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 90,
          damping: 18,
          duration,
          delay,
        },
      });
    }
  }, [controls, inView, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: -offset, opacity: 0 }}
      animate={controls}
      style={{
        width: fullWidth ? "100%" : "fit-content",
        position: "relative",
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInFromRight = ({
  children,
  offset = 300,
  duration = 1.2,
  delay = 0,
  fullWidth = false,
  viewAmount = 0.1,
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, amount: viewAmount });
  useEffect(() => {
    if (inView) {
      controls.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 90,
          damping: 18,
          duration,
          delay,
        },
      });
    }
  }, [controls, inView, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ x: offset, opacity: 0 }}
      animate={controls}
      style={{
        width: fullWidth ? "100%" : "fit-content",
        position: "relative",
        zIndex: 2,
        display: "flex",
        justifyContent: "center",
        
      }}
    >
      {children}
    </motion.div>
  );
};

export const SlideInFromTop = ({
  children,
  offset = 300,
  duration = 1.2,
  delay = 0,
  fullWidth = false,
}) => {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          stiffness: 90,
          damping: 18,
          duration,
          delay,
        },
      });
    }
  }, [controls, inView, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ y: -offset, opacity: 0 }}
      animate={controls}
      style={{
        width: "100%",
        position: "relative",
        zIndex: 3,
        display: "flex",
        justifyContent: "center",
      }}
    >
      {children}
    </motion.div>
  );
};
