import { AnimatePresence, motion } from 'framer-motion';
import styles from './Navbar.module.css';
import { Navigation } from './Navigation/Navigation';

interface NavbarProps {
    isOpen: boolean;
    toggle: (isOpen: boolean) => void;
}

export const Navbar = ({ isOpen, toggle }: NavbarProps) => {

    return <>
        <AnimatePresence>
            {isOpen && (
                <motion.div className={styles.background}
                    initial={{ clipPath: "circle(0px at 100% 0px)" }}
                    animate={{ clipPath: `circle(1200px at 100% 0px)`, transition: { ease: 'easeIn', duration: 1 } }}
                    exit={{ clipPath: "circle(0px at 100% 0px)", transition: { type: 'spring', duration: 1 } }}
                >
                    <Navigation />
                </motion.div>
            )}
        </AnimatePresence>


    </>
}