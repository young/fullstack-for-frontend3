import * as React from 'react'
import { Helmet } from 'react-helmet-async'

// The doc prop contains some metadata about the page being rendered that you can use.
const Wrapper = ({ children, doc }) => <React.Fragment>
    <Helmet>
        <meta charSet="utf-8" />
        <title>Fullstack for Frontend</title>
        <link rel="icon"
            type="image/x-icon"
              href="/images/favicon.ico"
        />
    </Helmet>
    {children}
</React.Fragment>
export default Wrapper
