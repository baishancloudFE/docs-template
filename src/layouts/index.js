import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import classnames from 'classnames'
import styled, { ThemeProvider } from 'styled-components'

import '../styles.css'
import { pageConfig, themeConfig } from '../config'

const theme = themeConfig

const DefaultLayout = ({ children }) => (
  <div>
    <Helmet title={pageConfig.title} />
    <ThemeProvider theme={theme}>{children()}</ThemeProvider>
  </div>
)

DefaultLayout.propTypes = {
  children: PropTypes.func,
}

export default DefaultLayout
