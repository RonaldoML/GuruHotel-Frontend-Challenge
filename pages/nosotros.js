import { useEffect, useState } from 'react';
import { Layout } from '../components/Layout';
import Router from 'next/router'
import { Detail } from '../components/Detail';


const Nosotros = () => {

  return (
    <div>
      <Layout>
        <Detail />
        <div onClick={() => Router.back()}>Go Back</div>
      </Layout>
    </div>
  )
}

export default Nosotros;