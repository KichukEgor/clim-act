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
        <Label>?? Notre soci??t?? a besoin d???un lobby des savoirs ??</Label>
        <Text>affirme Ad??le Thorens ?? l???occasion de la soir??e d???inauguration de CLIMACT</Text>
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
        La Conseill??re aux Etat verte vaudois s???est adress??e chaleureusement ?? la quarantaine d???invit??s r??unis le 7
        octobre au soir pour c??l??brer le lancement officiel du Centre. Elle a ??voqu?? la complexit?? inh??rente ?? la
        communication de certaines lois comme celle sur le CO2 et soulign?? le r??le indispensable des scientifiques pour
        le monde politique et le d??veloppement de solutions communes.

        Il est 18h et la soir??e s???annonce festive. Un air de jazz manouche, une d??licieuse odeur de ch??taignes grill??es
        et du vin p??tillant local. Au c??ur du Vortex, tout est pr??t pour accueillir la quarantaine de membres du comit??
        ex??cutif et du comit?? de pilotage CLIMACT pour une brisol??e automnale.

        Apr??s deux ans de r??flexions et d?????changes entre plus d???une centaine de chercheurs, cadres dirigeants et
        professeurs de l???UNIL et de l???EPFL, le Centre pour l???impact et l???action climatique a enfin vu le jour en janvier
        2021. Ce 7 octobre a marqu?? son inauguration officielle, l???occasion de remercier toutes celles et ceux qui ont
        rendu possible ce projet, gr??ce ?? leur vision et ?? leur pers??v??rance.

        ?? Vous aviez sans doute tous.tes vos propres bonnes raisons de vous embarquer dans ce projet. Peut-??tre
        avez-vous estim?? comme moi, que c?????tait l?? votre contribution ?? une soci??t?? plus durable et juste ??, d??clare
        Nicolas Tetreault, Directeur ex??cutif de CLIMACT avant de rappeler les objectifs du centre et pr??senter sa
        nouvelle ??quipe.

        C???est ensuite au tour de Julia Steinberger, Directrice acad??mique CLIMACT et professeure ?? l???UNIL, de souligner
        les nombreuses contributions individuelles qui ont port?? le projet et de se r??jouir de cette rencontre en chair
        et en os apr??s de longs mois d?????changes par ??crans interpos??s.

        ?? Tout a commenc?? ?? San Francisco, dans un restaurant japonais ??, poursuit Michael Lehning, le second Directeur
        acad??mique CLIMACT. Z??ro souvenir de ce qu???il a bien pu y manger, seule lui reste en m??moire l?????vidence absolue
        qu???a repr??sent?? CLIMACT ?? ses yeux ce soir-l??. ?? Il y avait urgence de cr??er un centre op??rationnel qui puisse
        acc??l??rer l???att??nuation du changement climatique en apportant des solutions concr??tes et en cr??ant de la
        visibilit?? autour du travail des scientifiques. Nous avons aujourd???hui deux ans pour prouver que nous pouvons
        lancer des projets et atteindre cet objectif ! ??, explique celui qui est ??galement professeur ?? l???EPFL.

        Puis, vient le moment tant attendu du discours d???Ad??le Thorens, invit??e d???honneur. C???est avec simplicit?? et
        passion qu???elle s???adresse ?? l???audience. Ancienne doctorante en philosophie et politiques publiques de l???UNIL,
        elle explique son choix d???alors de quitter la recherche pour la politique : ?? J???ai ressenti une grande
        frustration. Je pouvais certes ??crire des textes acad??miques, mais seuls quelques sp??cialistes les liraient, et
        ils n???auraient finalement aucun impact sur le monde qui m???entourait. ?? Pour elle, la valeur ajout??e de CLIMACT
        r??side clairement dans le fait de donner ?? un sens aux efforts scientifiques quotidiens. ??

        Alors, en quoi notre soci??t?? a-t-elle besoin d???un lobby des savoirs ?

        ?? Le fait que la recherche implique de nombreuses incertitudes et que le discours scientifique s???inscrive dans
        le cadre de l?????tat actuel des connaissances, est certainement un d??savantage, face au confort des approches
        id??ologiques, sans m??me parler des ph??nom??nes populistes ou des fake news ??, confie la Conseill??re aux Etats. Sa
        vision du r??le d???un lobby des savoirs : ?? Litt??ralement de nourrir le d??bat public et les processus d??cisionnels
        avec des contenus scientifiques. ??

        ?? Nous savons, et de ce savoir d??coule directement un imp??ratif, celui d???agir pour ??viter l???irr??parable ??,
        conclut Ad??le Thorens, encourageante, avant de lancer : ?? Longue vie ?? CLIMACT ! ?? sous un tonnerre
        d???applaudissements.

        A 19h30, juste avant d???annoncer l???ouverture du buffet, l???assembl??e a retir?? et s??questr?? collectivement pr??s
        d???une tonne de CO2. C???est le cadeau immat??riel ?? Climeworks ?? que l?????quipe CLIMACT a offert ?? ses convives,
        marquant ainsi la premi??re action commune vers un monde climatiquement plus positif !

      </TextAbout>
    </Container>
  )
}
