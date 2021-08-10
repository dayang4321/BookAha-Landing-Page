import React from 'react'
import './Main.css'
import { Container } from 'react-bootstrap'
import InfoBlock from './InfoBlock/InfoBlock'
import { useTranslation } from "react-i18next";


const Main = (props) => {

  const { t } = useTranslation();

    return (
        <main id="about">
            <Container fluid='lg'>
                <InfoBlock infoTitle={t("main.block1.title")} textClass="pl-xl-5 pl-lg-4  pl-sm-5 pl-4" infoText={t("main.block1.text")} 
                  imgBlockClass="mx-auto"  imgSrc="notes.png" imgAlt="notes" imgClass="left"/>
                <InfoBlock infoTitle={t("main.block2.title")} textClass="pl-sm-5 pl-4" infoText={t("main.block2.text")} 
                  imgBlockClass="mx-auto"  imgSrc="bookClub.png" imgAlt="notes" imgClass="right" imgOrder="first" />
                <InfoBlock infoTitle={t("main.block3.title")} textClass="pl-xl-5 pl-lg-4  pl-sm-5 pl-4" infoText={t("main.block3.text")} 
                  imgBlockClass="ml-md-n5 pl-md-4 pl-lg mx-auto"  imgSrc="library.png" imgAlt="notes" imgClass="right" />
            </Container>
        </main>
    )
}

export default Main