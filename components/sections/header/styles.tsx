import { styled } from 'theme';
import { Container as DefaultContainer } from "components/layout"
import Link from 'next/link';

export const HeaderWrapper = styled.header<{initial: boolean, open: boolean}>`
  position: relative;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  z-index: 100;
  box-shadow: ${({theme, open}) => open ? theme.shadow : 'none'};
  transition: box-shadow 300ms ease;
  height: 8rem;

  @media ${({theme}) => theme.mediaQueries.laptop} {
    padding: 0;
    box-shadow: ${({ initial, theme }) => initial ? 'none' : theme.shadow};
    position: sticky;
    top:0;
    transition: all 300ms ease;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    height: ${({ initial }) => initial ? '8rem' : '5rem'};
  };
`

export const Container = styled(DefaultContainer)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 1.6rem;

  @media ${({theme}) => theme.mediaQueries.laptop} {
    padding: 0 3.2rem 0 !important;
  };
`

export const LogoContainer = styled(Link)`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  align-items: center;
  -ms-flex-align: center;
  margin-right: auto;
  cursor: pointer;

  @media ${({theme}) => theme.mediaQueries.laptop} {
    padding-right: 2rem;
  };
`

export const Logo = styled.img`
  display: block;
  margin-bottom: 0;
  height: 3rem;
`

export const DesktopNav = styled.ul`
  display: none;

  @media ${({theme}) => theme.mediaQueries.laptop} {
    display: flex;
    height: 100%;
    flex-direction: row;
    align-items: center;
  }
`

export const NavItem = styled.li<{ cta?: boolean, active: boolean }>`
  display: grid;
  place-items: center;
  cursor: pointer;
  padding: 0 2.4rem;
  list-style: none;
  height: 100%;
  font-size: ${({ theme }) => theme.font.p.size};
  color: ${({ theme, cta }) => cta ? theme.colors.light0 : theme.colors.dark0};
  background-color: ${({ theme, cta, active }) =>
    cta
      ? theme.colors.primary
      : active ? theme.colors.light1 : theme.colors.light0};

  &:hover {
    background-color: ${({ theme, cta }) => cta ? theme.colors.primary : theme.colors.light1};
  }
` 

export const NavDropdown = styled(NavItem)``

// DROPDOWN

export const DropdownToggle = styled(NavItem)<{ open: boolean, active: boolean }>`
  position: relative;
  background-color: ${({ open, theme, active }) => open || active ? theme.colors.light1 : theme.colors.light0};
  display: flex;
`

export const Indicator = styled.div<{ open: boolean }>`
  margin-left: 0.4rem;  
  width: 0; 
  height: 0; 
  border-left: 0.4rem solid transparent;
  border-right: 0.4rem solid transparent;
  border-top: ${({ open }) => open ? 'none' : '0.6rem solid black'};
  border-bottom: ${({ open }) => open ? '0.6rem solid black' : 'none'};
`

export const DropdownMenu = styled.ul<{ open: boolean }>`
  display: ${({ open }) => open ? 'block' : 'none'};
  position: absolute;
  top: 100%;
  left: 0;
`

export const DropdownNavItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem;
  padding-right: 3.2rem;
  list-style: none;
  white-space: nowrap;
  margin: 0;
  position: relative;
  background-color: ${({ theme }) => theme.colors.light1};

  &:hover {
    color: ${({ theme }) => theme.colors.light0};
    background-color: ${({ theme }) => theme.colors.light2};

    svg {
      * {
        fill: ${({ theme }) => theme.colors.light0};
      }
    }
  }

  & > div {
    position: absolute;
    right: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
  }
`


// Mobile menu
export const MenuContainer = styled.ul<{ open: boolean }>`
  display: block;
  position: fixed;
  left: 100%;
  bottom: 0;
  top: 0;
  width: 24rem;
  padding: 5.4rem 1.2rem 1.6rem;

  background-color: ${({ theme }) => theme.colors.light0};
  transform: ${({ open }) => open ? `translateX(-24rem)` : ''};
  transition: transform 300ms ease;

  @media ${({theme}) => theme.mediaQueries.laptop} {
    display: none;
  }
`

export const CloseIcon = styled.img`
  display: block;
  margin-left: auto;
  cursor: pointer;
`

export const MenuItemWrapper = styled.li`
  list-style: none;
  margin: 0;
  position: relative;
  padding: 1.2rem 0;

  &:after {
    content: '';
    position: absolute;
    top: 100%;
    left: 0rem;
    right: 0rem;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.light2};
  }
`

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.dark0};
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 0;
  font-weight: bold;
`

export const StyledSublink = styled(StyledLink)`
  padding-left: 2.4rem;
  &:not(:last-child) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.light1};
  };
`

export const SubmenuTitle = styled.p`
  padding-top: 1.8rem;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.secondary};
`