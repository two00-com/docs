import React from "react";
import { withRouter, Route, Link } from "react-router-dom";
import { withI18n } from "react-i18n-kit";
import { MDXProvider } from "@mdx-js/react";

import { config } from "../../config";
import { Navigation } from "../Navigation";
import { Highlight } from "../MDXComponents";
import { GlobalStyle } from "../../style/GlobalStyle";
import {
  Layout,
  Header,
  Content,
  Body,
  Page,
  Nav,
  StyledNavItem,
  StyledTable,
} from "../../style";

const components = {
  code: props => <Highlight {...props} />,
  table: props => <StyledTable {...props} />,
};

const getLanguage = () => {
  let browserLanguage;

  try {
    browserLanguage =
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;
  } catch (err) {
    browserLanguage = "en";
  }

  return browserLanguage;
};

class AppWrapper extends React.Component {
  componentDidMount() {
    const { history, location, translate } = this.props;
    const browserLanguage = getLanguage();

    let lang = browserLanguage;

    if (lang.includes("-")) {
      lang = lang.split("-")[0];
    }

    if (lang === "de" && location.pathname === "/") {
      history.push("/de/");
    } else if (lang === "en" && location.pathname === "/") {
      history.push("/en/");
    } else if (lang !== "en" && lang !== "de" && location.pathname === "/") {
      translate("en");
      history.push("/en/");
    }

    if (
      lang === "de" &&
      location.pathname.includes('/en')
    ) {
      translate("en");
    } else if (
      lang === "en" &&
      location.pathname.includes('/de')
    ) {
      translate("de");
    } else if (lang !== "en" && lang !== "de") {
      translate("en");
    }
  }

  componentDidUpdate() {
    console.log('IN');
    const { i18n, history, location, translate } = this.props;
    const browserLanguage = getLanguage();

    let lang = browserLanguage;

    if (lang.includes("-")) {
      lang = lang.split("-")[0];
    }
    console.log(lang);
    console.log("i18n.language");
    console.log(i18n.language);
    console.log("location.pathname");
    console.log(location.pathname);
    console.log("location.state");
    console.log(location.state);
    if (i18n.language !== 'en' && (location.pathname.includes('/en') || location.pathname.includes('/de')) && (location.state && location.state.clicked)) {
      console.log('I1');
      translate("en");
      history.push(location.pathname);
    } else if (i18n.language !== 'de' && (location.pathname.includes('/en') || location.pathname.includes('/de')) && (location.state && location.state.clicked)) {
      console.log('I2');
      translate("de");
      history.push(location.pathname);
    }
  }

  render() {
    const { i18n, location } = this.props;

    return (
      <>
        <GlobalStyle />
        <Layout {...this.props}>
          <Header>
            <Navigation routes={i18n.routes} />
          </Header>
          <Body>
            <Content>
              <Page>
                <MDXProvider components={components}>
                  {i18n.routes.map((route, idx) => {
                    console.log(route);
                    console.log(route.component);
                    return route.component ? (
                      <Route
                        key={`dashboard-route-${idx}`}
                        path={route.path}
                        exact
                        name={route.name}
                        render={props => (
                          <route.component
                            {...props}
                            {...this.props}
                            {...route.props}
                          />
                        )}
                      />
                    ) : null;
                  })}
                </MDXProvider>
              </Page>
            </Content>
            <Nav>
              {i18n.routes.map(item => {
                console.log(item);
                console.log(location);
                return (
                  <StyledNavItem
                    active={location.pathname === item.path || `${location.pathname}/` === item.path}
                  >
                    <Link to={item.path}>{item.name}</Link>
                  </StyledNavItem>
                );
              })}
            </Nav>
          </Body>
        </Layout>
      </>
    );
  }
}

const AppWrapperWithRouter = withRouter(AppWrapper);
const AppWrapperWithI18n = withI18n(AppWrapperWithRouter, config.i18n.routes);

export { AppWrapperWithI18n as AppWrapper };
