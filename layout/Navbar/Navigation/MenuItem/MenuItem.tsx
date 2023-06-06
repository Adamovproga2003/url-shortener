import * as React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { MenuItemProps } from "./MenuItem.props";

const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: { stiffness: 1000, velocity: -100 }
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: { stiffness: 1000 }
        }
    }
};

export const MenuItem = ({ item, link, className }: MenuItemProps): JSX.Element => {
    return (
        <motion.li
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={className}
        >
            <Link href={link} className="text-placeholder">{item}</Link>
        </motion.li>
    );
};
