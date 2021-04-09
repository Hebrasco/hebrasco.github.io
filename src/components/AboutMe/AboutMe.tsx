import React from "react";
import { Routes } from "../../Constants/Routes";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Media from "react-bootstrap/esm/Media";
import Col from "react-bootstrap/esm/Col";
import Image from "react-bootstrap/esm/Image";
import Logo from "../../assets/img/logo512.png";
import Badge from "react-bootstrap/esm/Badge";
import { Languages } from "../../Constants/Languages";
import { Frameworks } from "../../Constants/Frameworks";
import { Applications } from "../../Constants/Applications";

export default function AboutMe(): JSX.Element {
  const languages = [
    Languages.swift,
    Languages.json,
    Languages.html,
    Languages.css,
    Languages.javaScript,
    Languages.typeScript,
    Languages.dart,
    Languages.java,
    Languages.kotlin,
    Languages.cSharp,
  ];

  const frameworks = [
    Frameworks.ios.swiftUI,
    Frameworks.ios.uiKit,
    Frameworks.ios.widgetKit,
    Frameworks.ios.storeKit,
    Frameworks.web.react,
    Frameworks.crossPlattform.flutter,
    Frameworks.crossPlattform.reactNative,
    Frameworks.web.reactRedux,
  ];

  const applications = [
    Applications.xcode,
    Applications.gitTower,
    Applications.gitHub,
    Applications.vsCode,
    Applications.intellijIdea,
    Applications.androidStudio,
    Applications.gitLab,
    Applications.unity,
    Applications.threeDsMax,
    Applications.maya,
  ];

  const gitHubLogo = require("../../assets/img/github.png");
  const appStoreLogo = require("../../assets/img/app_store.png");

  return (
    <Container style={{ position: "relative" }} className="navbar-spacer">
      <div id={Routes.aboutMe.replace("/#", "")} className="top-anchor"></div>
      <Media>
        <Row>
          <Col xs={12} md={4} className="mb-4 mb-md-0 align-self-center">
            <Image src={Logo} roundedCircle width="100%" />
          </Col>
          <Col xs={12} md={8} className="align-self-center">
            <Media.Body>
              <div className="d-md-flex align-items-center mb-sm-5 mb-md-0">
                <h1>Daniel Bedrich</h1>
                <div className="ml-md-auto">
                  <a
                    href="https://apps.apple.com/de/developer/daniel-bedrich/id1533246847?ign-itsct=apps_box&ign-itscg=30200"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="git-account-link d-block float-md-right float-left mr-2 mr-md-0 ml-md-2"
                  >
                    <Image src={appStoreLogo} />
                  </a>
                  <a
                    href="https://github.com/hebrasco"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="git-account-link d-block float-md-right float-left ml-2 ml-md-0"
                  >
                    <Image src={gitHubLogo} />
                  </a>
                </div>
              </div>
              <p className="d-inline-block mt-2 mt-md-0">
                Ich bin seit 2017 in der App- Entwicklung tätig und habe bereits
                diverse Projekte für iOS und Android in kleinen Teams umgesetzt.
                Am liebsten programmiere ich für iOS. Dort habe ich auch bereits
                eine App veröffentlicht.
              </p>
              <Row className="mb-3">
                <Col xs={12}>
                  <h5>Programmiersprachen</h5>
                  {languages.map((language) => {
                    return (
                      <Badge pill variant={language.variant}>
                        {language.name}
                      </Badge>
                    );
                  })}
                </Col>
              </Row>
              <Row className="mb-3">
                <Col xs={12}>
                  <h5>Frameworks</h5>
                  {frameworks.map((framework) => {
                    return (
                      <Badge pill variant={framework.variant}>
                        {framework.name}
                      </Badge>
                    );
                  })}
                </Col>
              </Row>
              <Row>
                <Col xs={12}>
                  <h5>Programme</h5>
                  {applications.map((application) => {
                    return (
                      <Badge pill variant={application.variant}>
                        {application.name}
                      </Badge>
                    );
                  })}
                </Col>
              </Row>
            </Media.Body>
          </Col>
        </Row>
      </Media>
    </Container>
  );
}
