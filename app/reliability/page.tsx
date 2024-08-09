import React from 'react'

import reliabilityImg from '/public/reliability.jpg'
import Hero from '../_components/Hero'

export default function ReliabilityPage() {
    return (
        <Hero
            imgData={reliabilityImg}
            imgAlt='welding'
            title='Super high relaibility hosting'
        />
    )
}

