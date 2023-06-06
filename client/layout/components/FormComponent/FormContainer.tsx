import { motion } from "framer-motion"
import { DetailedHTMLProps, forwardRef, HTMLAttributes } from "react"
import { FormProps } from "./FormComponent.props"

const Component = forwardRef<HTMLInputElement, FormProps>((props, ref) => {
    return <input
        ref={ref}
        type="text"
        placeholder='Alias'
        autoFocus
        onBlur={props.onBlur}
        name="alias"
    />
});

export const MotionComponent = motion(Component)