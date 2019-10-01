import styled, { css } from "styled-components";
import { Navbar, Nav, NavbarLink } from "styled-bootstrap-components";

export const StyledNavbar = styled(Navbar)`
  background-color: #ffffff !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  ${props =>
    props.private &&
    css`
      border-top: 3px solid #135589;
    `}
`;

export const StyledNav = styled(Nav)``;

export const StyledNavbarLink = styled(NavbarLink)`
  color: #000000 !important;
  word-break: keep-all;
  ${props =>
    props.outline &&
    css`
      margin: 0 0.3rem;
      &:hover,
      &:focus {
        outline: none;
        background: #135589;
        color: white !important;
        border-radius: 0;
      }
    `}
  ${props =>
    props.flex &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
`;
