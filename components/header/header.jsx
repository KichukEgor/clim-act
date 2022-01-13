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
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Navigation = styled.nav`
  width: 354px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.25px;

  a:hover {
    color: #7C80E9;
  }
`

const Contact = styled.button`
  width: 147px;
  height: 40px;
  margin-left: 84px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #7C80E9;
  background: transparent;
  box-sizing: border-box;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.25px;
  color: #7C80E9;

  & > div {
    margin-left: 12px;
  }
`

const Header = () => (
  <SHeader color="#F7F7FC">
    <Image width={173} height={50} src="/images/clim-art-logo.svg" alt="climArt logo"/>
    <div>
      <Navigation>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </Navigation>
      <Contact>
        <Image
          src="/icons/svg/Mail.svg"
          alt="mail"
          width={16}
          height={16}
        />
        <div>
          Contact us
        </div>
      </Contact>
    </div>
  </SHeader>
)

export default Header
