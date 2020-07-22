import React from 'react';
import Helmet from 'react-helmet';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';
import 'tachyons';
import '../styles/custom.tachyons.css';
import {MDXProvider} from '@mdx-js/react'
import * as shortcodes from '@blocks/kit'

export default (props) => (
  <React.Fragment>
    <Helmet>
      <body className="bg-near-white mid-gray" />
    </Helmet>
    <Navbar />
    <MDXProvider components={shortcodes}>
      {props.children}
    </MDXProvider>
    <Footer />
  </React.Fragment>
)
