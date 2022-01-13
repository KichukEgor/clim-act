import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const SHeader = styled.header`
  height: 96px;
  padding: 13px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${(props) => props.color};
`

const Navigation = styled.nav`
  display: flex;
  justify-content: space-between;

`

const Header = () => (
  <SHeader color="#F7F7FC">
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
)

export default Header
