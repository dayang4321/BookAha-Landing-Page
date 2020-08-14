import React from 'react'
import './Main.css'
import { Container } from 'react-bootstrap'
import InfoBlock from './InfoBlock/InfoBlock'

const main = (props) => {
    return (
        <main>
            <Container>
                <InfoBlock infoTitle="Organize your thoughts"  infoText="Organise all the inspiration, ideas and lessons from books you’re reading."
                    imgSrc="notes.png" imgAlt="notes" imgClass="top-left"/>
                <InfoBlock infoTitle="Share your thoughts"  infoText="Send your thoughts on books and articles to a community of readers like yourself."
                    imgSrc="bookClub.png" imgAlt="notes" imgClass="top-right" imgOrder="first" />
                <InfoBlock infoTitle="Discover New thoughts"  infoText="Find book reviews, new books, events and more exciting content curated for you."
                    imgSrc="library.png" imgAlt="notes" imgClass="top-right" />
            </Container>
        </main>
    )
}

export default main