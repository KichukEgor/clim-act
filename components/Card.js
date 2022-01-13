import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 328px;
  height: 466px;
  background: #FCFCFC;
`

const Title = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #000;
`

const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #000;
  font-size: 16px;
`

const LinkButton = styled(Link)`

`

const Card = ({ img, title, text, linkButton }) => (
  <CardContainer>
    <Image width={328} height={210} src={img} alt="image"/>
    <Title>{title}</Title>
    <Text>{text}</Text>
    <LinkButton>{linkButton}</LinkButton>
  </CardContainer>
)
