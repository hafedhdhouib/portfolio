import React from 'react'
import { animate, motion } from 'framer-motion'

const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
}
const reversedIndex = (index: number) => {
    const totlaSteps = 6;
    return totlaSteps - index - 1;
}
const Stairs = () => {
    return (
        <>
            {/* render 6 motion divs each representing a step of the stairs
        Ech div will have the same animation defined by the stairsAnimation object
        the delay for each div is calculated sinamically based on it's reversed index,
        creating a staggered effect with decreasing delay for each subsequent step
        */}
            {[...Array(6)].map((_, index) => {
                return (<motion.div
                    key={index}
                    variants={stairAnimation}
                    initial='initial'
                    animate="animate"
                    exit='exit'
                    transition={{
                        duration: 0.4,
                        ease: 'easeInOut',
                        delay: reversedIndex(index) * 0.1
                    }}
                    className='h-full w-full bg-white relative' />)
            })}
        </>
    )
}

export default Stairs