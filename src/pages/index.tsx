import * as React from "react";
import styled from "styled-components";
import { withLayout, LayoutProps, menuItems } from "../components/Layout";
import {
  Image,
  Segment,
  Container,
  Grid,
  Icon,
  Label,
} from "semantic-ui-react";
import MainTitle from "../components/MainTitle";
import MainSubtitle from "../components/MainSubtitle";
import MainButton from "../components/MainButton";
import CardGridColumn from "../components/CardGridColumn";
import CardContent from "../components/CardContent";
import Title from "../components/Title";

const FirstPartTitle = styled.span`
  font-family: Montserrat;
  font-weight: 300;
  text-transform: uppercase;
`;
const SecondPartTitle = styled.span`
  font-family: Montserrat;
  font-weight: 500;
  text-transform: uppercase;
`;

const IndexPage = (props: LayoutProps) => (
  <div>
    {/* Master head */}
    <Segment
      vertical
      inverted
      textAlign="center"
      className="masthead home-banner"
    >
      <Container text>
        <MainTitle>
          <FirstPartTitle>David</FirstPartTitle>
          <SecondPartTitle>Bonan</SecondPartTitle>
        </MainTitle>
        <MainSubtitle>
          <Icon name="react"></Icon>
          <span>{`Front-end web developer | react and react-native `}</span>
          <Icon name="react"></Icon>
        </MainSubtitle>
        <MainButton>Curriculum Vitae</MainButton>
      </Container>
    </Segment>

    {/* About this starter */}
    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="8">
            <Title size="large" color="grey">
              Overview
            </Title>
            <p>Hello ! I'm David, a front-end web engineer at Directskills</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    {/* Key features */}
    <Segment vertical className="stripe alternate feature">
      <Grid
        columns="3"
        textAlign="center"
        relaxed
        stackable
        className="container"
      >
        <Grid.Row>
          <CardGridColumn>
            <Title icon color="grey" size="small">
              <Icon name="react" color="blue"></Icon>
              React, React Native, Jest, Enzyme...
            </Title>
            <CardContent>
              Literally fan of React and more since the release of hooks and
              Apis unfortunately still experimental like Suspense - Thanks to
              Dan Abramov and all React Core Team !
            </CardContent>
          </CardGridColumn>
          <CardGridColumn>
            <Title icon color="grey" size="small">
              <Icon name="aws" color="yellow"></Icon>
              EC2, S3, Docker, Netlify...
            </Title>
            <CardContent>
              Having initiated several projects I had to address the issue of
              deployment by taking in hand all the tools passing from Docker
              under AWS EC2 created through Gitlab pipelines to the Netlify,
              Heroku or Zeit
            </CardContent>
          </CardGridColumn>
          <CardGridColumn>
            <Title icon color="grey" size="small">
              <Icon name="node js" color="green"></Icon>
              NodeJS, Express, Passport...
            </Title>
            <CardContent>
              Server-side-rendering by Gatsby or Next, backend by Express or
              simply Node script
            </CardContent>
          </CardGridColumn>
        </Grid.Row>
        <Grid.Row>
          <CardGridColumn>
            <Title icon color="grey" size="small">
              <Icon name="database" color="green"></Icon>
              MongoDB & Sql
            </Title>
            <CardContent>
              Familiar with classic SQL database systems: Mysql, Sqlite... as
              well as Mongodb in Nosql
            </CardContent>
          </CardGridColumn>
          <CardGridColumn>
            <Title icon color="grey" size="small">
              <Icon name="terminal" color="blue"></Icon>
              REST, GraphQL & Socket.io
            </Title>
            <CardContent>
              REST for standard APIs, GraphQL for massive fetch data and limited
              time to transport and socket.io for interaction and authentication
            </CardContent>
          </CardGridColumn>
          <CardGridColumn>
            <Title icon color="grey" size="small">
              <Icon name="code branch" color="orange"></Icon>
              Git, Submodule, Subtree, Subrepos, Monorepo
            </Title>
            <CardContent>
              Rebase and Merge enthusiast and experimenting with Git monorepo or
              Subrepos with Lerna for my node_modules
            </CardContent>
          </CardGridColumn>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="10">
            <Title size="large" color="grey">
              Jewtrips
              <a
                href="https://jewtrips.com"
                target="_blank"
                style={{ marginLeft: 5, verticalAlign: "super" }}
              >
                <Icon name="external alternate" color="blue" size="tiny"></Icon>
              </a>
            </Title>
            <MediumContent>
              A web and mobile application like yelp for jewish community.
            </MediumContent>
            <Title size="small" color="pink">
              Stack
            </Title>
            <SmallContent>
              Jewtrips.com is built using React with a node backend for APIs,
              authentication (Google, Facebook, Apple) and CRON service.
              Jewtrips Mobile is built with React Native.
              <br />
              I used MongoDB as Docker container in AWS EC2 with external volume
              and backup task. APIs are built with express, mongoose and GraphQL
              with Apollo server and client. <br />
              Pictures of establishments are store in AWS S3. Gitlab CI/CD are
              used for automatic test and deployement to EC2 instance and i hope
              migrate to Netlify soon. <br />
              Appcenter codepush is use for update on-the-fly the mobile app.
            </SmallContent>
            <Label color="blue">React</Label>
            <Label color="blue">React Native</Label>
            <Label color="green">NodeJS</Label>
            <Label color="grey">GraphQL</Label>
            <Label color="green">Express</Label>
            <Label color="grey">Mongo</Label>
            <Label color="yellow">AWS EC2</Label>
            <Label color="yellow">AWS S3</Label>
            <Label color="teal">Redux</Label>
            <Label color="blue">Docker</Label>
            <Label color="pink">Apollo</Label>
          </Grid.Column>
          <Grid.Column width="6">
            <Image src="/static/projects/jewtrips.png" circular />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="6">
            <Image src="/static/projects/vidal.png" circular />
          </Grid.Column>
          <Grid.Column width="10">
            <Title size="large" color="grey">
              Vidal Mobile
              <a
                href="https://apps.apple.com/fr/app/vidal-mobile/id512171778"
                target="_blank"
                style={{ marginLeft: 5, verticalAlign: "super" }}
              >
                <Icon name="external alternate" color="blue" size="tiny"></Icon>
              </a>
            </Title>
            <MediumContent>
              A mobile application for prescription assistance in France and
              Spain.
            </MediumContent>
            <Title size="small" color="pink">
              Stack
            </Title>
            <SmallContent>
              Vidal Mobile is built in NativeScript with a PHP backend for APIs
              dockerized.
            </SmallContent>
            <Label color="blue">Nativescript</Label>
            <Label color="red">PHP</Label>
            <Label color="blue">Docker</Label>
            <Label color="grey">REST</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="10">
            <Title size="large" color="grey">
              Directskills
              <a
                href="https://directskills.com"
                target="_blank"
                style={{ marginLeft: 5, verticalAlign: "super" }}
              >
                <Icon name="external alternate" color="blue" size="tiny"></Icon>
              </a>
            </Title>
            <MediumContent>
              An application for interim management and billing called "Baps".
              My mission is to migrate frontend from ColdFusion to ReactJS.
            </MediumContent>
            <Title size="small" color="pink">
              Stack
            </Title>
            <SmallContent>
              Baps - next gen - is built in React with a Java backend.
            </SmallContent>
            <Label color="blue">React</Label>
            <Label color="teal">Redux</Label>
            <Label color="green">NodeJS</Label>
            <Label color="grey">Rest API</Label>
            <Label color="black">Webpack</Label>
            <Label color="yellow">Babel</Label>
            <Label color="purple">Gulp</Label>
            <Label color="grey">Monorepo</Label>
            <Label color="green">Jest</Label>
            <Label color="pink">Enzyme</Label>
            <Label color="green">Mocha</Label>
            <Label color="grey">REST</Label>
          </Grid.Column>
          <Grid.Column width="6">
            <Image src="/static/projects/dsk.png" />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="6">
            <Image src="/static/projects/campus.png" circular />
          </Grid.Column>
          <Grid.Column width="10">
            <Title size="large" color="grey">
              Vidal Campus
              <a
                href="https://campus.vidal.fr"
                target="_blank"
                style={{ marginLeft: 5, verticalAlign: "super" }}
              >
                <Icon name="external alternate" color="blue" size="tiny"></Icon>
              </a>
            </Title>
            <MediumContent>An eLearning medtech web application.</MediumContent>
            <Title size="small" color="pink">
              Stack
            </Title>
            <SmallContent>
              Vidal Campus is built in PHP with a docker environnement.
            </SmallContent>
            <Label color="red">PHP</Label>
            <Label color="yellow">jQuery</Label>
            <Label color="blue">Docker</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="10">
            <Title size="large" color="grey">
              Hotel Push Marketing
              <a
                href="https://about.hotelpushmarketing.com/"
                target="_blank"
                style={{ marginLeft: 5, verticalAlign: "super" }}
              >
                <Icon name="external alternate" color="blue" size="tiny"></Icon>
              </a>
            </Title>
            <MediumContent>
              A marketing web solution for the hotel domain.
            </MediumContent>
            <Title size="small" color="pink">
              Stack
            </Title>
            <SmallContent>
              HPM is a script ready-to-use and backoffice built in PHP and React
              only for the editing message board.
            </SmallContent>
            <Label color="blue">React</Label>
            <Label color="yellow">Javascript</Label>
            <Label color="red">PHP</Label>
            <Label color="grey">REST</Label>
          </Grid.Column>
          <Grid.Column width="6">
            <Image src="/static/projects/hpm.jpeg" circular />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>

    <Segment vertical className="stripe">
      <Grid stackable verticalAlign="middle" className="container">
        <Grid.Row>
          <Grid.Column width="6">
            <Image src="/static/projects/croustipate.jpeg" circular />
          </Grid.Column>
          <Grid.Column width="10">
            <Title size="large" color="grey">
              Croustipate
              <a
                href="https://croustipate.com"
                target="_blank"
                style={{ marginLeft: 5, verticalAlign: "super" }}
              >
                <Icon name="external alternate" color="blue" size="tiny"></Icon>
              </a>
            </Title>
            <MediumContent>A brand website built in PHP.</MediumContent>
            <Label color="red">PHP</Label>
            <Label color="yellow">Javascript</Label>
            <Label color="grey">REST</Label>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);

export default withLayout(IndexPage);

const SmallContent = styled.p`
  font-size: 1em !important;
`;
const MediumContent = styled.p`
  font-size: 1.2em !important;
`;
