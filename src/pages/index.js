import React, { Component } from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Editor from '../components/Editor'
import Button from '../components/Button'
import ProgramWindow from '../components/ProgramWindow'

const Hero = styled.div`
  z-index: 1;
  background: ${props => props.theme.colors.primary};
  color: #fff;
  padding: 70px;
  border-radius: 0 0 50% 50% / 4%;
  display: flex;
  justify-content: space-between;

  section:first-child {
    width: 50%;
    margin-left: 3%;
  }

  section:last-child {
    width: 45%;
    text-align:center;
  }

  img {
    width: 400px;
  }

  h2 {
    margin-top: 1.5rem;
    font-size: 3.5em;
    margin-bottom: 0.25em;
    font-weight: bold;
    letter-spacing: 1.5px;
    line-height: 1.05em;
    display: inline-block;
  }

  h3 {
    font-size: 1.5em;
    margin-top: 0;
    margin-bottom: 1.5em;
    font-weight: 300;
  }

  @media ${props => props.theme.tablet} {
    padding: 50px 15px;
    flex-direction: column;

    h2 {
      font-size: 2.5em;
    }

    h3 {
      font-size: 1.25em;
    }

    section:first-child, section:last-child {
      width: 100%;
    }

    section:first-child {
      margin: 0 0 2em 0;
    }
  }
`

const PreviewButton = styled(Button)`
  position: absolute;
  bottom: 1em;
  right: 2em;
  z-index: 44;
  margin-top: 1em;
  box-shadow: 0 2px 5px 0px rgba(43, 63, 76, 0.18);
  border: 1px solid #eeeeee;

  &:hover {
    box-shadow: 0 3px 7px 0px rgba(43, 63, 76, 0.2);
  }
`
const Philosophy = styled.section`
  background: #f9f8f9;
  display: flex;
  justify-content: space-around;
  margin-top: -2em;
  padding: 5em 2em 2em 2em;

  div {
    width: 30%;
  }

  h3 {
    color: ${props => props.theme.colors.primary};
  }

  p {
    margin-top: 0;
  }

  @media ${props => props.theme.tablet} {
    flex-direction: column;

    div {
      width: 90%;
      margin: auto;
    }
  }
`

class IndexPage extends Component {
  componentDidMount() {
    localStorage.setItem('homeEditor', previewHEML)
  }

  render() {
    return (
      <div>
        <Header currentPath={this.props.location.pathname} fixed />
        <Hero>
          <section>
            <h2>SL 持续集成开发工具</h2>
            <h3>
              SL 是面向前端的工程构建工具。解决前端工程中性能优化、资源加载（异步、同步、按需、预加载、依赖管理、合并、内嵌）、模块化开发、自动化工具、开发规范、代码部署等问题。
            </h3>
            <Button to="/docs/getting-started/guide" large>
              快速开始
            </Button>
            <Button to="/docs/getting-started/overview" large transparent>
              文档
            </Button>
          </section>
          <section>
            <img src="/sl-banner.png" />
          </section>
        </Hero>
        <Philosophy>
          <div>
            <h3>Native Feel</h3>
            <p>
              Do you know HTML and CSS? Check out our docs and you are off to the
              races! No special rules or styling paradigms to master.
            </p>
          </div>
          <div>
            <h3>Forward Thinking</h3>
            <p>
              HEML is designed to take advantage of all that email can do while
              still providing a solid experience for all clients.{' '}
            </p>
          </div>
          <div>
            <h3>Forward Thinking</h3>
            <p>
              HEML is designed to take advantage of all that email can do while
              still providing a solid experience for all clients.{' '}
            </p>
          </div>
        </Philosophy>
        <Footer />
      </div>
    )
  }
}

const previewHEML = `<heml>
  <head>
    <subject>Welcome to HEML!</subject>
    <style>
      body { background: SkyBlue; }
      h1 { color: DarkViolet; }
    </style>
  </head>
  <body>
    <container>
      <marquee><h1>Explore the world of email! 💌</h1></marquee>
    </container>
  </body>
</heml>





`

export default IndexPage
