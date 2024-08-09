import React from 'react'

import performanceImg from '/public/performance.jpg'
import Hero from '../_components/Hero'

export default function PerformancePage() {
    return (
        <Hero
            imgData={performanceImg}
            imgAlt='welding'
            title='We serve high performance applications'
        />
    )
}

