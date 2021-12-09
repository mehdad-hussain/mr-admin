import Head from "next/head";
import Image from "next/image";

import Layout from "../layout/Layout";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <Layout styles=''></Layout>
      <div className={styles.mainContent}>
        <h4>Return Management</h4>
        <div className={styles.header}>
          <input type='text' placeholder='Search Order ID' />
          <div className={styles.searchWrapper}></div>
          <div className={styles.addBtn}>
            <button className={`btn btn-primary`}>+ Add Return</button>
          </div>
        </div>
        <div className='table'></div>
      </div>
    </>
  );
}
