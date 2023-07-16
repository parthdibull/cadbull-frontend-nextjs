import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'
import { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
     <h1>Home <span>dhkj</span></h1>
     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore, asperiores.</p>
    </Fragment>
  )
}


Home.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>
  )
}
