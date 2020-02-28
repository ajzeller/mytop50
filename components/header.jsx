import React, {useState, useContext, useEffect} from 'react';
import Link from 'next/link';
import Cookie from "js-cookie";
import Router from 'next/router'
import Nav from 'react-bootstrap/Nav'
import Toggler from './toggler'
import styled from 'styled-components'
import LoadingIcon from './loading-icon'
import Logo from '../assets/logo_sort_4.svg'
import { SpotifyContext } from '../lib/spotify'
import { IoIosMenu, IoIosAddCircleOutline, IoIosRemoveCircleOutline } from "react-icons/io";


const Navbar = styled.nav`
  max-width: ${props => props.theme.theme.contentWidths[0]};
  margin: auto;
  display: flex;
  align-items: center;
  padding: 15px 15px 0 15px;
  color: ${props => props.theme.theme.text.primary};
  justify-content: space-between;
`

const StyledHeader = styled.header`
  background-color: ${props => props.theme.theme.bg.primary};
  /* border-bottom: 1px solid #E9E6E9; */
`

const HeaderGroup = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto auto;
  grid-gap: 15px;

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

  svg {
    max-height: 44px;
    max-width: 44px;
    align-self: center;
  }

  .nav-item{
    margin-right: 15px;
    width: 20px;
    height: 20px;
  }

  .logo {
    max-height: 50px;
    width: 35px;
    /* max-width: 50px; */
    vertical-align:bottom
  }
`

const Hamburger = styled.div`
  display: flex;
  align-items: center;

  &:hover{
    cursor: pointer;
  }
`

const MenuMobile = styled.div`
  color: ${props => props.theme.theme.text.primary};
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  padding: 10px;
  grid-gap: 10px;
`

const ProfileImg = styled.img`
  width: 30px;
  border-radius: 100%;
  display: block;
`

const IncrementContainer = styled.div`
  justify-self: center;
  display: grid;
  grid-template-columns: auto auto auto;
  align-items: center;
  grid-gap: 5px;

  svg{
    height: 2rem;
    width: 2rem;
  }
`

const AddPlaylistButton = styled.button`
  color: #fff;
  display: inline-block;
  font-size: 0.9rem;
  background-color: ${props => props.theme.theme.colors.spotifyGreen};
  border: 0;
  border-radius: 100px;
  text-transform: uppercase;
  padding: 10px 20px;
  margin: 0px 0px 0px 0px;
  letter-spacing: 2px;
  font-weight: 600;
  vertical-align: middle;
  box-shadow: 0px 5px 30px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: $spotify-button-border;
  }

  span{
    background-color: #1E9548;
    padding: 5px 3px 1px 5px;
    border-radius: 5px;
    border-bottom: 4px solid #1F8242;
  }
`

const Header = () => {
  const [menuShown, setMenuShown] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const {loading, spotifyData} = useContext(SpotifyContext)
  const [num, setNum] = useState(50)
  console.log(num)

  useEffect(() => {
    if(spotifyData){
      setIsLoggedIn(true)
    }
  }, [spotifyData])

  // console.log(loading)
 
  const logout = () => {
    Cookie.remove('refresh_token_v2')
    setMenuShown(false)
    setIsLoggedIn(false)
    Router.replace('/')
  }

  const increment = () => {
    if(num < 50){
      setNum(prev => prev + 5)
    }
  }

  const decrement = () => {
    if(num > 0){
      setNum(prev => prev - 5)
    }
  }

  const menuMobile = menuShown && (
    <MenuMobile>
      <IncrementContainer>
        <AddPlaylistButton>Add Top <span>{num}</span> to Library</AddPlaylistButton>
        <IoIosAddCircleOutline onClick={increment} />
        <IoIosRemoveCircleOutline onClick={decrement} />
      </IncrementContainer>
      <span onClick={() => logout()}>Logout</span>
    </MenuMobile>
  )

  const showHamburger = isLoggedIn && (
          <Hamburger onClick={() => setMenuShown(prev => !prev)}>
            <IoIosMenu size={'30px'} />
          </Hamburger>
  )


  return (
    <StyledHeader>
      <Navbar>
        <HeaderGroup>
          <Link href="/">
            <a className='logo-text'>
              <Logo className='logo' /> 
              my<span className='bold'>top</span><span className='italic'>50</span>
            </a>
          </Link>
        </HeaderGroup>
            
        <HeaderGroup>
            {/* <LoadingIcon isLoading={true} /> */}
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

          {showHamburger}

        </HeaderGroup>
      </Navbar>

        {menuMobile}
    </StyledHeader>
  );
};

export default Header;
