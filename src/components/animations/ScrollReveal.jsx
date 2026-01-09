import React, { Children } from 'react'
import {useScrollReveal} from '@/hooks/useScrollReveal.jsx'

const ScrollReveal = (
    {children,
    animation= 'fadeUp',
    duration= 700,
    delay= 0,}
) => {
    const {ref, isVisible} = useScrollReveal({threshold: 0.1})
    const animationClasses = {
        fadeUp: 'translate-y-8 opacity-0',
        fadeIn: 'opacity-0',
        slideLeft: '-translate-x-12 opacity-0',
        slideRight: 'translate-x-12 opacity-0',
        scaleIn: 'scale-90 opacity-0',
}

    const visibleClasses = 'opacity-100 translate-y-0 translate-x-0 scale-100'

    return (
        <div
            ref={ref}   
            className={`transition-all ease-out ${
                isVisible ? visibleClasses : animationClasses[animation]
            }`}
            style={{
                transitionDuration: `${duration}ms`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}

export default ScrollReveal