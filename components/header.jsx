import React, {useContext, useEffect} from 'react';
import Link from 'next/link';
import Toggler from './toggler'
import styled from 'styled-components'
import LoadingIcon from './loading-icon'
import Logo from '../assets/logo_sort_4.svg'

const Nav = styled.nav`
  max-width: ${props => props.theme.theme.contentWidths[0]};
  margin: auto;
  display: flex;
  align-items: center;
  padding: 15px 15px;
  color: ${props => props.theme.theme.text.primary};
  justify-content: space-between;
`

const StyledHeader = styled.header`
  background-color: ${props => props.theme.theme.bg.primary};
  /* border-bottom: 1px solid #E9E6E9; */
`

const HeaderGroup = styled.div`
  display: flex;
  align-items: center;
  
  a {
    display: flex;
    align-items: center;
    margin-right: 15px;
    padding: 0;
    text-decoration: none;
    color: ${props => props.theme.theme.text.primary};

    .bold{
      font-weight: 600;
    }

    .italic{
      font-style: italic;
    }

    &.logo-text {
      font-size: 1.2rem;
    }
  }

  .logo {
    max-height: 50px;
    width: 35px;
    /* max-width: 50px; */
    vertical-align:bottom
  }
`

const ProfileImg = styled.img`
  width: 30px;
  border-radius: 100%;
  display: block;
`

const Header = () => {

  return (
    <StyledHeader>
      <Nav>
        <HeaderGroup>
          <Link href="/">
            <a className='logo-text'>
              <Logo className='logo' /> 
              my<span className='bold'>top</span><span className='italic'>50</span>
            </a>
          </Link>

         
        </HeaderGroup>
            
        <HeaderGroup>
          <LoadingIcon isLoading={false} className='nav-item' />
          {/* {!loading &&
            (user ? (
              <>
                  <a href="/api/logout">Logout</a>
                  <Link href="/profile" >
                    <a><ProfileImg src={user.picture} alt="profile-photo"/></a>
                  </Link>
                  
              </>
            ) : (
              <>
                  <a href="/api/login">Login</a>
              </>
            ))} */}
          <Toggler />
        </HeaderGroup>
      </Nav>
    </StyledHeader>
  );
};

export default Header;
