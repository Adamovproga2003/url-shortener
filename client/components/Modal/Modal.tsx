import { MouseEventHandler, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Backdrop from "../Backdrop/Backdrop";
import { IoCloseSharp } from "react-icons/io5"
import { FaCopy, FaRegCopy } from "react-icons/fa"

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
            duration: 0.1,
            type: "spring",
            damping: 25,
            stiffness: 500,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};


const Modal = ({ handleClose, alias }: { handleClose: MouseEventHandler, alias: string }) => {

    return (
        <Backdrop onClick={handleClose}>
            <motion.div
                onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
                className="modal-url orange-gradient"
                variants={dropIn}
                initial="hidden"
                animate="visible"
                exit="exit"
            >
                <ModalText alias={alias} />
                <ModalButton alias={alias} />
                <ModalCloseButton onClick={handleClose} />
            </motion.div>
        </Backdrop>
    );
};

const ModalText = ({ alias }: { alias: string }) => {

    if (alias.length > 80) {
        return <div className="modal-text">
            <h1>http://localhost:3000/redirect/{alias.slice(0, 3)}</h1>
            <h1>...</h1>
            <h1>{alias.slice(-34)}</h1>
        </div>
    }

    return <div className="modal-text text-left">
        <h1>http://localhost:3000/redirect/{alias}</h1>
    </div>
}

const ModalCloseButton = ({ onClick }: { onClick: MouseEventHandler<HTMLButtonElement> | undefined }) => {
    return <motion.button
        className="close-button"
        type="button"
        onClick={onClick}
    ><IoCloseSharp /></motion.button>
}

const ModalButton = ({ alias }: { alias: string }) => {
    const [isCopy, setCopy] = useState<boolean>(false)

    useEffect(() => {
        if (isCopy) {
            const timer = setTimeout(() => { setCopy(false) }, 1000);
            return () => clearTimeout(timer);
        }
    }, [isCopy])

    const copyFunc = () => {
        navigator.clipboard.writeText(`http://localhost:3000/redirect/${alias}`)
        setCopy(true)
    }
    return <motion.button
        type="button"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="copy-button"
        onClick={copyFunc}>
        {isCopy ? <FaCopy /> : <FaRegCopy />}
    </motion.button>
}

export default Modal;