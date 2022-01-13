import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import background from '../../public/images/projects_header.png'
import { MailIcon } from '../../public/icons/MailIcon'

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url('../../public/images/projects_header.png');
`

const SHeader = styled.header`
  height: 96px;
  padding: 13px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: transparent;
`

const Navigation = styled.nav`
  width: 400px;
  display: flex;
  justify-content: space-between;
  align-items: center;

`

export default function Projects() {
  return (
    <div style={{ backgroundImage: `url(${background})` }} >
      <SHeader>
        <Image width={173} height={50} src="/images/clim-art-logo.svg" alt="climArt logo"/>
        <Navigation>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/Projects">
            <a>Projects</a>
          </Link>
          <Link href="/Blog">
            <a>Blog</a>
          </Link>
          <Link href="/Contact-us">
            <a>Contact us</a>
          </Link>
        </Navigation>
      </SHeader>
    </div>
  )
}
