/* eslint-disable max-len */
import styled from 'styled-components'
import Image from 'next/image'
import Header from '../../components/header/header'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Body = styled.section`
  background: linear-gradient(95.08deg, #81ED7E 2.49%, #006CD0 97.19%);
  width: 1440px;
  height: 822px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const ContainerImage = styled.div`
  position: absolute;
  top: 588px;
  left: 115px;
  right: 115px;
`

const Label = styled.h1`
  text-align: center;
  margin: 45px auto 20px auto;
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
  padding: 0;
  margin: 0;
`

const TextBy = styled.p`
  margin-right: 14px;
  color: #262338;
  font-size: 18px;
  font-family: 'Poppins', sans-serif;
`
const TextName = styled.h2`
  font-size: 16px;
  font-family: 'Poppins', sans-serif;
  color: #14142B;
  padding: 0;
  margin: 0;
`
const TextInspiration = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 14px;
  color: #6E7191;
  margin: 0;
  padding: 0;
`
const TextAbout = styled.p`
  margin: 350px auto 64px auto;
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  width: 696px;
`
const ArticleContainer = styled.div`
  margin-top: 38px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const IntroContainer = styled.div`
  margin-left: 18px;
`
const SocialMediaContainer = styled.div`
  margin-top: 28px;
  display: flex;
`
const TextShare = styled.p`
  font-family: Poppins, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 32px;
  color: #262338;
  margin-right: 21px;
`

const IconContainer = styled.div`
  margin-right: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export default function Blob() {
  return (
    <Container>
      <Header/>
      <Body>
        <Label>« Notre société a besoin d’un lobby des savoirs »</Label>
        <Text>affirme Adèle Thorens à l’occasion de la soirée d’inauguration de CLIMACT</Text>
        <ArticleContainer>
          <TextBy>by</TextBy>
          <Image width={55} height={55} src="/images/girl.png"/>
          <IntroContainer>
            <TextName>Yi Lee</TextName>
            <TextInspiration>Affliation</TextInspiration>
          </IntroContainer>
        </ArticleContainer>
        <SocialMediaContainer>
          <TextShare>Share</TextShare>
          <IconContainer>
            <Image width={25} height={24} src="/icons/svg/Facebook.svg"/>
          </IconContainer>
          <IconContainer>
            <Image width={25} height={24} src="/icons/svg/Twitter.svg"/>
          </IconContainer>
          <IconContainer>
            <Image width={25} height={24} src="/icons/svg/LinkedIn.svg"/>
          </IconContainer>
          <IconContainer>
            <Image width={25} height={24} src="/icons/svg/Instagram.svg"/>
          </IconContainer>
          <Image width={25} height={24} src="/icons/svg/Whatsapp.svg"/>
        </SocialMediaContainer>
      </Body>
      <ContainerImage>
        <Image width={1216} height={634} src="/images/project-modelling.png" alt="climArt logo" objectFit="none"/>
      </ContainerImage>
      <TextAbout>
        La Conseillère aux Etat verte vaudois s’est adressée chaleureusement à la quarantaine d’invités réunis le 7
        octobre au soir pour célébrer le lancement officiel du Centre. Elle a évoqué la complexité inhérente à la
        communication de certaines lois comme celle sur le CO2 et souligné le rôle indispensable des scientifiques pour
        le monde politique et le développement de solutions communes.

        Il est 18h et la soirée s’annonce festive. Un air de jazz manouche, une délicieuse odeur de châtaignes grillées
        et du vin pétillant local. Au cœur du Vortex, tout est prêt pour accueillir la quarantaine de membres du comité
        exécutif et du comité de pilotage CLIMACT pour une brisolée automnale.

        Après deux ans de réflexions et d’échanges entre plus d’une centaine de chercheurs, cadres dirigeants et
        professeurs de l’UNIL et de l’EPFL, le Centre pour l’impact et l’action climatique a enfin vu le jour en janvier
        2021. Ce 7 octobre a marqué son inauguration officielle, l’occasion de remercier toutes celles et ceux qui ont
        rendu possible ce projet, grâce à leur vision et à leur persévérance.

        « Vous aviez sans doute tous.tes vos propres bonnes raisons de vous embarquer dans ce projet. Peut-être
        avez-vous estimé comme moi, que c’était là votre contribution à une société plus durable et juste », déclare
        Nicolas Tetreault, Directeur exécutif de CLIMACT avant de rappeler les objectifs du centre et présenter sa
        nouvelle équipe.

        C’est ensuite au tour de Julia Steinberger, Directrice académique CLIMACT et professeure à l’UNIL, de souligner
        les nombreuses contributions individuelles qui ont porté le projet et de se réjouir de cette rencontre en chair
        et en os après de longs mois d’échanges par écrans interposés.

        « Tout a commencé à San Francisco, dans un restaurant japonais », poursuit Michael Lehning, le second Directeur
        académique CLIMACT. Zéro souvenir de ce qu’il a bien pu y manger, seule lui reste en mémoire l’évidence absolue
        qu’a représenté CLIMACT à ses yeux ce soir-là. « Il y avait urgence de créer un centre opérationnel qui puisse
        accélérer l’atténuation du changement climatique en apportant des solutions concrètes et en créant de la
        visibilité autour du travail des scientifiques. Nous avons aujourd’hui deux ans pour prouver que nous pouvons
        lancer des projets et atteindre cet objectif ! », explique celui qui est également professeur à l’EPFL.

        Puis, vient le moment tant attendu du discours d’Adèle Thorens, invitée d’honneur. C’est avec simplicité et
        passion qu’elle s’adresse à l’audience. Ancienne doctorante en philosophie et politiques publiques de l’UNIL,
        elle explique son choix d’alors de quitter la recherche pour la politique : « J’ai ressenti une grande
        frustration. Je pouvais certes écrire des textes académiques, mais seuls quelques spécialistes les liraient, et
        ils n’auraient finalement aucun impact sur le monde qui m’entourait. » Pour elle, la valeur ajoutée de CLIMACT
        réside clairement dans le fait de donner « un sens aux efforts scientifiques quotidiens. »

        Alors, en quoi notre société a-t-elle besoin d’un lobby des savoirs ?

        « Le fait que la recherche implique de nombreuses incertitudes et que le discours scientifique s’inscrive dans
        le cadre de l’état actuel des connaissances, est certainement un désavantage, face au confort des approches
        idéologiques, sans même parler des phénomènes populistes ou des fake news », confie la Conseillère aux Etats. Sa
        vision du rôle d’un lobby des savoirs : « Littéralement de nourrir le débat public et les processus décisionnels
        avec des contenus scientifiques. »

        « Nous savons, et de ce savoir découle directement un impératif, celui d’agir pour éviter l’irréparable »,
        conclut Adèle Thorens, encourageante, avant de lancer : « Longue vie à CLIMACT ! » sous un tonnerre
        d’applaudissements.

        A 19h30, juste avant d’annoncer l’ouverture du buffet, l’assemblée a retiré et séquestré collectivement près
        d’une tonne de CO2. C’est le cadeau immatériel « Climeworks » que l’équipe CLIMACT a offert à ses convives,
        marquant ainsi la première action commune vers un monde climatiquement plus positif !

      </TextAbout>
    </Container>
  )
}
