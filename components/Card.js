import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const CardContainer = styled.div`
  width: 328px;
  height: 466px;
  padding: 0;
  background: #FCFCFC;
  box-shadow: 0 0 32px rgba(0, 0, 0, 0.04);
  border-radius: 24px;
`

const ImageWrapper = styled.div`
  padding: 0;
  margin: 0;
`

const ContentWrapper = styled.div`
  padding: 32px 32px;
`

const Title = styled.h2`
  padding: 0;
  margin: 0;
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.75px;
`

const Text = styled.p`
  margin: 8px 0;
  font-size: 17px;
  line-height: 28px;
  letter-spacing: 0.75px;
  color: #000;
`

const Button = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  border: none;
  padding: 16px 24px;
  background: #7C80E9;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 24px;
  letter-spacing: 0.75px;
  color: #FCFCFC;
`

export const Card = ({ img, title, text, link }) => (
  <CardContainer>
    <ImageWrapper>
      <Image width={328} height={210} src={img} alt="image"/>
    </ImageWrapper>
    <ContentWrapper>
      <Title>{title}</Title>
      <Text>{text}</Text>
      <Button>
        <Link href={link}>
          <a>Discover</a>
        </Link>
      </Button>
    </ContentWrapper>
  </CardContainer>
)
