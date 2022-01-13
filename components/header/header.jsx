import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const SHeader = styled.header`
  height: 96px;
  padding: 13px 32px;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  background: #F7F7FC;
`

const Logo = styled.div`
  height: 96px;
  padding: 13px 32px;
  background: #F7F7FC;
`

const Header = () => (
  <SHeader>
    <Image width={173} height={50} src="/images/clim-art-logo.svg" alt="climArt logo"/>
    <nav>
      <Link href="/about">
        <a>About Page</a>
      </Link>
    </nav>
  </SHeader>
)

export default Header
