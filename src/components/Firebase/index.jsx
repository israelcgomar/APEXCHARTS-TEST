import React, { Component } from 'react'
import Helmet from 'react-helmet'
import { inject } from 'mobx-react'
import fid from '!raw-loader!first-input-delay' // eslint-disable-line import/no-webpack-loader-syntax
 
@inject(({ app, router }) => ({ loading: app.loading, router }))

export default class Firebase extends Component {
 render() {
   return (
     <Helmet>
       <script>{fid}</script>
     </Helmet>
   )
 }
}