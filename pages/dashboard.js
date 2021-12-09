import Head from "next/head";
import Image from "next/image";

import MainContent from "../pages/mainContent";
import Layout from "../layout/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <div className={styles.row}>
        <Layout styles={styles.column}></Layout>
        <div className={styles.column}>
          <div className='header'>
            <h4>Return Management</h4>
            <input type='text' placeholder='Search Order ID' />
            <button className={`btn btn-primary `}>Logout</button>
          </div>
          <div className='table'></div>
        </div>
      </div>
    </>
  );
}
