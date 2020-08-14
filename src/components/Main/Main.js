import React from 'react'
import './Main.css'
import { Container } from 'react-bootstrap'
import InfoBlock from './InfoBlock/InfoBlock'

const main = (props) => {
    return (
        <main>
            <Container fluid='lg'>
                <InfoBlock infoTitle="Organize your thoughts" textClass="pl-xl-5 pl-3" infoText="Organise all the inspiration, ideas and lessons from books you’re reading."
                  imgBlockClass="mx-auto"  imgSrc="notes.png" imgAlt="notes" imgClass="top-left"/>
                <InfoBlock infoTitle="Share your thoughts" textClass="pl-xl-5 pl-3" infoText="Send your thoughts on books and articles to a community of readers like yourself."
                  imgBlockClass="mx-auto"  imgSrc="bookClub.png" imgAlt="notes" imgClass="top-right" imgOrder="first" />
                <InfoBlock infoTitle="Discover New thoughts" textClass="pl-xl-5 pl-3" infoText="Find book reviews, new books, events and more exciting content curated for you."
                  imgBlockClass="ml-md-n5 pl-md-4 pl-lg mx-auto"  imgSrc="library.png" imgAlt="notes" imgClass="top-right" />
            </Container>
        </main>
    )
}

export default main