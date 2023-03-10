import { NextPage } from 'next'
import styles from '../styles/Home.module.css'
import WalletContextProvider from '../components/WalletContextProvider'
import { AppBar } from '../components/AppBar'
import { BalanceDisplay } from '../components/BalanceDisplay'
import { SendSolForm } from '../components/SendSolForm'
import Head from 'next/head'
import { LeftBar } from '../components/LeftBar'
import { MainArea } from '../components/MainArea'
import { useState } from 'react'

const Home: NextPage = (props) => {
  const [viewPage, setViewPage] = useState("main");
  const setViewFn = (page) => {
    setViewPage(page)
    console.log(page)
  }
  return (
    <div className={styles.App}>
      <Head>
        <title>Wallet-Adapter Example</title>
        <meta
          name="description"
          content="Wallet-Adapter Example"
        />
      </Head>
      <WalletContextProvider>


        <AppBar />
        <div className={styles.mainArea0}>
          <LeftBar view={viewPage} setViewFn={setViewFn}/>
          <MainArea view={viewPage} setViewFn={setViewFn}/>
        </div>



        {/* <div className={styles.AppBody}>
          <BalanceDisplay />
          <SendSolForm />
        </div> */}
      </WalletContextProvider >
    </div>
  );
}

export default Home;