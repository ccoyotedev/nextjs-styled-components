import React, { useState } from "react"
import { css } from "styled-components"
import { styled } from "theme"

const Stroke = styled.div`
  display: block;
  position: absolute;
  height: 12%;
  width: 100%;
  background: black;
  opacity: 1;
  left: 0;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .25s ease-in-out;
  -moz-transition: .25s ease-in-out;
  -o-transition: .25s ease-in-out;
  transition: .25s ease-in-out;
`

const HamburgerWrapper = styled.div<{open: boolean}>`
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  cursor: pointer;

  ${props => props.open && css`
    ${Stroke}:nth-child(1) {
      top: 50%;
      width: 0%;
      left: 50%;
    };

    ${Stroke}:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      transform: rotate(45deg);
    };

    ${Stroke}:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      transform: rotate(-45deg);
    };

    ${Stroke}:nth-child(4) {
      top: 18px;
      width: 0%;
      left: 50%;
    }
  `};

  ${Stroke}:nth-child(1) {
    top: 0px;
  };

  ${Stroke}:nth-child(2) {
    top: 50%;
  };
  
  ${Stroke}:nth-child(3) {
    top: 50%;
  };

  ${Stroke}:nth-child(4) {
    top: 100%
  }

  @media ${({theme}) => theme.mediaQueries.laptop} {
    display: none;
  }
`

interface Props {
  onClick: () => void,
  style: {}
}

export const Hamburger = (props: Props) => {
  const [open, setOpen] = useState(false)

  const style = props.style;

  const handleClick = () => {
    setOpen(!open);
    props.onClick();
  }

  return (
    <HamburgerWrapper
      onClick={() => handleClick()}
      style={style}
      open={open}
    >
      <Stroke></Stroke>
      <Stroke></Stroke>
      <Stroke></Stroke>
      <Stroke></Stroke>
    </HamburgerWrapper>
  )
}
