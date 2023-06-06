import { GoHomeButtonProps } from "./GoHomeButton.props";
import styles from "./GoHomeButton.module.css"
import { HiOutlineArrowSmLeft } from "react-icons/hi";
import Link from "next/link";

export const GoHomeButton = (props: GoHomeButtonProps): JSX.Element => {
    return (
        <Link href="/" className={styles.goHome} type='button'>
            <HiOutlineArrowSmLeft />
            <span>Go home</span>
        </Link>
    );
};