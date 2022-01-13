import styled from 'styled-components'
import Image from 'next/image'
import Header from '../../components/header/header'

const Body = styled.section`
  background: linear-gradient(95.08deg, #81ED7E 2.49%, #006CD0 97.19%);
  width: 1440px;
  height: 822px;
`

const Label = styled.h1`
  padding-top: 65px ;
  text-align: center;
  margin: 0 auto;
  font-family: Poppins, sans-serif;
  font-weight: 500;
  font-size: 56px;
  width: 966px;
`

const Text = styled.p`
  color: #4E4B66;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 32px;
`

export default function Blob() {
  return (
    <>
      <Header/>
      <Body>
        <Label>« Notre société a besoin d’un lobby des savoirs »</Label>
        <Text>affirme Adèle Thorens à l’occasion de la soirée d’inauguration de CLIMACT</Text>
        <Image width={173} height={50} src="/images/project-modelling.png" alt="climArt logo"/>
      </Body>
    </>
  )
}
