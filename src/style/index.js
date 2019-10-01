import styled from "styled-components";
import { DropdownItem, Table } from "styled-bootstrap-components";

export const Layout = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`;

export const Header = styled.header`
  position: fixed;
  width: 100vw;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  padding: 1px 30px;
  border-top: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 0.75rem;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;

export const Body = styled.div`
  margin-top: 52px;
  display: flex;
  flex: 1;
  @media (min-width: 991px) {
    flex-direction: row;
    flex: 1;
  }
`;

export const Content = styled.main`
  margin-left: 18rem;
  flex: 1;
  max-width: 100vw;
  min-height: calc(100vh - 120px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem 2rem;
  @media (max-width: 991px) {
    margin-left: 0;
  }
`;

export const Page = styled.div`
  max-width: 756px;
  min-height: calc(100vh - 120px);
`;

export const Nav = styled.nav`
  top: 53px;
  position: fixed;
  flex: 0 0 18rem;
  min-height: 100vh;
  width: 18rem;
  order: -1;
  border-right: 1px solid rgba(0, 0, 0, 0.2);
  @media (min-width: 991px) {
    flex: 0 0 18em;
  }
  @media (max-width: 991px) {
    display: none;
  }
`;

export const Ads = styled.aside`
  flex: 0 0 18rem;
  @media (min-width: 991px) {
    flex: 0 0 18rem;
  }
`;

export const StyledFooterItemWrapper = styled.div`
  display: flex;
  @media (max-width: 991px) {
    flex-direction: column;
    margin-top: 1.5rem;
  }
`;

export const StyledFooterItem = styled.div`
  @media (min-width: 991px) {
    &:not(:first-child)::before {
      display: inline-block;
      padding-right: 0.25rem;
      padding-left: 0.25rem;
      color: rgba(0, 0, 0, 0.7);
      content: "|";
      text-decoration: none;
    }
  }
`;

export const StyledFooterLink = styled.a`
  color: rgba(0, 0, 0, 0.7);
  &:hover,
  &:focus {
    outline: 0;
    background: #135589;
    color: white;
    text-decoration: none;
  }
`;

export const StyledFooterCopyright = styled.div``;

export const StyledDropdownMenu = styled.div`
  left: auto;
  right: 0;
  min-width: 11rem;
`;

export const StyledDropdown = styled.div`
  @media (min-width: 991px) {
    display: none;
  }
`;

export const StyledNavItem = styled(DropdownItem)`
  background: white;
  padding: 0;
  border-radius: 0;
  border: 0;
  max-width: 299px;
  &:hover,
  &:focus {
    background: #135589 !important;
    color: white !important;
    & > a {
      background: #135589 !important;
      color: white !important;
    }
  }
  & > a {
    display: block;
    box-sizing: border-box;
    text-decoration: none;
    max-width: 299px;
    text-overflow: ellipsis;
    overflow: hidden;
    border: 0;
    color: black;
    border-radius: 0;
    font-weight: ${props => (props.active ? "700" : "400")};
    border-right: ${props => (props.active ? "3px solid #135589" : "")};
    &:visited {
      background: white;
      color: black;
    }
    outline: 0;
    padding: 0.75rem 2rem;
  }
`;

export const StyledTable = styled(Table).attrs({
  sm: true,
  striped: true,
})``;

export const StyledDropdownItem = styled.div`
  background: ${props => (props.active ? props.activeBackground : "")};
  padding: 0;
  border-radius: 0
  border: 0;
  & > a {
    display: border-box;
    border: 0;
    text-decoration: none;
    font-weight: ${props => (props.active ? "700" : "400")};
    border-right: ${props => (props.active ? "3px solid #135589" : "")};
    border-radius: 0
    &:hover,
    &:focus {
      background: #135589;
      color: white !important;
    }
    outline: 0;
    padding: 0.75rem 2rem;
  }
`;
