import * as React from "react";
import { motion, SVGMotionProps } from "framer-motion";
import cn from "classnames";
import styles from "./MenuToggle.module.css";

const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & React.RefAttributes<SVGPathElement>) => (
    <motion.path
        fill="#FFFFFF"
        strokeWidth="3"
        strokeLinecap="round"
        {...props}
    />
);

export const MenuToggle = ({ toggle, isOpen }: any) => (
    <button
        onClick={() => toggle(!isOpen)}
        className={cn({
            [styles.translate]: isOpen,
            [styles.default]: !isOpen
        })}
    >
        <svg width="24" height="20" viewBox="0 0 22 20">
            <Path
                stroke={isOpen ? "hsl(0, 100%, 100%)" : "hsl(36, 59%, 83%)"}
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" },
                    open: { d: "M 3 16.5 L 17 2.5" }
                }}
            />
            <Path
                d="M 2 9.423 L 20 9.423"
                stroke={isOpen ? "hsl(0, 100%, 100%)" : "hsl(36, 59%, 83%)"}
                variants={{
                    closed: { opacity: 1 },
                    open: { opacity: 0 }
                }}
                transition={{ duration: 0.1 }}
            />
            <Path
                stroke={isOpen ? "hsl(0, 100%, 100%)" : "hsl(36, 59%, 83%)"}
                variants={{
                    closed: { d: "M 2 16.346 L 20 16.346" },
                    open: { d: "M 3 2.5 L 17 16.346" }
                }}
            />
        </svg>
    </button>
);
