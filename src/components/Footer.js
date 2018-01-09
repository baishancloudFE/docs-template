import React, { Component } from 'react'
import styled from 'styled-components'

const Footer = styled.footer`
 background: ${props => props.theme.colors.primary};
 border-top: 1px solid #ebebeb;
 color: #ccc;
 padding: 2em;`

const Content = styled.div`
  font-weight: 500;
  text-align: center;`

export default () => (
  <Footer>
    <Content>
      <div>Copyright &copy; 2018 <a href="http://fe.baishancloud.com" target="_blank">Gotc</a>. All Rights Reserved.</div>
    </Content>
  </Footer>
)
