import React from 'react'
import './Main.css'
import { Container } from 'react-bootstrap'
import InfoBlock from './InfoBlock/InfoBlock'

const main = (props) => {
    return (
        <main>
            <Container>
                <InfoBlock infoTitle="Organize your thoughts"  infoText="Organise all the inspiration, ideas and lessons from books you’re reading."
                    img="notes.png" imgAlt="notes" imgOffset="top-left" />
            </Container>
        </main>
    )
}

export default main