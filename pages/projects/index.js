import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import Header from '../../components/header/header'
import { Card } from '../../components/Card'

const ContainerImage = styled.div`
  position: absolute;
  top: -20px;
  left: 0;
  z-index: -1;
  width: 100%;
`

const Main = styled.main`
  width: 1316px;
  margin: 460px auto 0;
  padding: 24px 4px 134px 50px;
  border-radius: 16px;
  background: #f5f5f5;
`

const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 64px;
  font-weight: 700;
  line-height: 88px;
  letter-spacing: 1px;
  color: #262338;
`

const Subtitle = styled.h3`
  margin-top: 15px;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: #4E4B66;
`

const Content = styled.section`
  margin-top: 52px;
  display: grid;
  gap: 135px;
  grid-template-columns: 706px 431px;
`

const H3 = styled.h3`
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 1px;
`

const P = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.75px;
  & + p {
    margin-top: 26px;
  }
`

const GoalsList = styled.div`
  display: grid;
  gap: 16px;
  grid-template-columns: 48px 1fr;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: start;
  }
`

const Goals = styled.p`
  font-size: 18px;
  font-style: normal;
  line-height: 32px;
  letter-spacing: 0.75px;
  color: #4E4B66;
`

const LinkList = styled.ol`
  height: 120px;
  margin: 0;
  padding-left: 18px;

  li {
    font-weight: 600;
    font-size: 15px;
    line-height: 24px;
    letter-spacing: 0.75px;
    color: #7C80E9;
  }
`

const CardHolder = styled.div`
  display: grid;
  padding-right: 20px;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
`

const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`

const IntroContainer = styled.div`
  margin-left: 18px;
`

const TextInspiration = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #6E7191;
  margin: 0;
  padding: 0;
`
const TextName = styled.h2`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  color: #14142B;
  padding: 0;
  margin: 0;
`
const ImgContainer = styled.span`
  margin-right: 24px;
`

export default function Projects() {
  return (
    <>
      <Header color="inherit"/>
      <ContainerImage>
        <Image
          width={1440}
          height={676}
          src="/images/projects_header.png"
          alt="background"
          quality={100}
        />
      </ContainerImage>
      <Main>
        <Title>
          Act now for change
        </Title>
        <Subtitle>
          A subititle for your landing page describing your product or service that you provide.
        </Subtitle>
        <Content>
          <div>
            <article>
              <H3>Context</H3>
              <P>
                Iaculis ut interdum purus aliquam vestibulum quisque tempus. At suspendisse egestas
                pellentesque sit. Neque imperdiet eget pharetra, tristique fermentum massa
                dignissim.
              </P>
            </article>
            <article>
              <H3>Goals</H3>
              <GoalsList>
                <div>
                  <Image width={32} height={44} src="/icons/svg/Lightning.svg"/>
                </div>
                <Goals>Reduce energy consumption by 50%</Goals>
                <div>
                  <Image width={48} height={48} src="/icons/svg/WeatherWind.svg"/>
                </div>
                <Goals>Produce 1 GWh/year with wind energy</Goals>
              </GoalsList>
            </article>
            <article>
              <H3>Description</H3>
              <P>
                Lacus leo tristique volutpat, ultricies curabitur. Interdum enim, tincidunt
                neque euismod ultricies lorem. Maecenas vivamus enim praesent nisl tellus
                fermentum porttitor. Aliquam aliquam viverra lorem pellentesque. Proin tellus
                mauris, aliquet massa lectus sed donec. Pulvinar elementum ac facilisis tempor
                , malesuada lacus, magna ultrices. Facilisis quis nibh duis id. Cursus pulvinar
                malesuada diam mi.
                Tristique quis vitae non tempus nulla porttitor cursus purus. Libero, duis diam
                feugiat eget tempor. Id tristique pulvinar nec risus lectus. Platea pellentesque
                vitae laoreet elit risus. Augue maecenas turpis quam velit cursus orci integer urna.
                Pellentesque ipsum commodo placerat neque. Enim molestie praesent odio viverra.
                At morbi commodo, cursus at neque a nibh condimentum aliquam.
              </P>
              <P>
                Blandit pulvinar volutpat faucibus pretium viverra imperdiet nec. Vestibulum
                arcu dolor sit in nascetur euismod egestas sagittis varius. Nisi interdum
                vestibulum nullam nunc. Nec risus proin etiam sit vel elit ut tempor, rhoncus.
                Volutpat ultricies tempor adipiscing sapien magna sed ornare amet tempus.
              </P>
            </article>
            <article>
              <H3>Milestones</H3>
              <div>
                <Image width={706} height={95} src="/images/Milestones.png"/>
              </div>
            </article>
            <article>
              <H3>Docs & references</H3>
              <LinkList>
                {[1, 2, 3].map((num) => (
                  <li key={num}>
                    <Link href={`link${num}`}>
                      <a>
                        {`Link ${num}`}
                      </a>
                    </Link>
                  </li>
                ))}
              </LinkList>
            </article>
            <article>
              <H3>Other projects</H3>
              <CardHolder>
                <Card
                  img="/images/mountain.png"
                  title="Example product title heading"
                  text="Fermentum facilisis sed is nulla amet vulputate."
                  link="/projects"
                />
                <Card
                  img="/images/coffee.png"
                  title="Example product title heading"
                  text="Fermentum facilisis sed is nulla amet vulputate."
                  link="/projects"
                />
              </CardHolder>
            </article>
          </div>
          <div>
            <article>
              <H3>
                Team behind this project
              </H3>
              <Profile>
                <Image width={55} height={55} src="/images/girl.png"/>
                <IntroContainer>
                  <TextName>Yi Lee</TextName>
                  <TextInspiration>Affliation</TextInspiration>
                </IntroContainer>
              </Profile>
              <Profile>
                <Image width={55} height={55} src="/images/boy.png"/>
                <IntroContainer>
                  <TextName>Abel Valion</TextName>
                  <TextInspiration>Affliation</TextInspiration>
                </IntroContainer>
              </Profile>
            </article>
            <article>
              <H3>Partners</H3>
              <Image src="/images/EPFL.png" width={128} height={55}/>
              <br/>
              <Image src="/images/Swisscom.png" width={128} height={94}/>
            </article>
            <article>
              <H3>Sustainable Development Goals</H3>
              <ImgContainer>
                <Image src="/images/E-WEB-Goal-09.png" width={64} height={64}/>
              </ImgContainer>
              <ImgContainer>
                <Image src="/images/E-WEB-Goal-01.png" width={64} height={64}/>
              </ImgContainer>
              <ImgContainer>
                <Image src="/images/E-WEB-Goal-03.png" width={64} height={64}/>
              </ImgContainer>
            </article>
          </div>
        </Content>
      </Main>
    </>
  )
}
