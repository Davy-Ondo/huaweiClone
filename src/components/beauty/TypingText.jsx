import {motion} from 'framer-motion';
import { textContainer, textVariant2 } from './motion';


export const TypingText = ({text}) => (
    <motion.h2
    variants={textContainer}
    className='type'>
       {Array.from(text).map((letter, index) => (
        <motion.span
        variants={textVariant2}
        key={index}>
            {letter === " " ? "\u00A0" : letter}
        </motion.span>
       ))}
    </motion.h2>
);