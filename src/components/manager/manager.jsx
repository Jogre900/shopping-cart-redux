import React from 'react'

import Jugadores from './jugadores'
import Titulares from './titulares'
import Suplentes from './suplentes'

const Manager = () => {
    return  (
        <section>
            <Jugadores />
            <Titulares />
            <Suplentes />
        </section>
    )
}

export default Manager