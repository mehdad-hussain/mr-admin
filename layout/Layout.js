import { useRouter } from "next/router";
import React from "react";

import Sidebar from "../Components/Sidebar";
import Button from "../Components/Button";
import Header from "../Components/Header";
import styles from "../styles/layout.module.scss";
import PaginationBar from "../Components/PaginationBar";

const Layout = ({ children, pageTitle, backOption }) => {
  const router = useRouter();
  return (
    <>
      <Sidebar />

      <Header></Header>

      <main className={styles.mainContent}>
        <div className={styles.main}>
          <div className={styles.recentGrid}>
            <div className={styles.card}>
              <div className={styles.cardHeader}>
                <h2>Customer List</h2>
                <div className={styles.searchWrapper}>
                  <input type='search' placeholder='Search' />
                  <span className=''></span>
                </div>
              </div>

              <div className={styles.cardBody}>
                <div className='table-responsive'>
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <td>Name</td>
                        <td>Phone Number</td>
                        <td>Gender</td>
                        <td>Since</td>
                        <td>Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className={styles.line}>
                        <td>Jemi</td>
                        <td>017979.....</td>
                        <td>Male</td>
                        <td>21 june 2022</td>
                        <td>Details</td>
                      </tr>
                      <tr>
                        <td>Jemi</td>
                        <td>017979.....</td>
                        <td>Male</td>
                        <td>21 june 2022</td>
                        <td>Details</td>
                      </tr>
                      <tr>
                        <td>Jemi</td>
                        <td>017979.....</td>
                        <td>Male</td>
                        <td>21 june 2022</td>
                        <td>Details</td>
                      </tr>
                      <tr>
                        <td>Jemi</td>
                        <td>017979.....</td>
                        <td>Male</td>
                        <td>21 june 2022</td>
                        <td>Details</td>
                      </tr>
                      <tr>
                        <td>Jemi</td>
                        <td>017979.....</td>
                        <td>Male</td>
                        <td>21 june 2022</td>
                        <td>Details</td>
                      </tr>
                      <tr>
                        <td>Jemi</td>
                        <td>017979.....</td>
                        <td>Male</td>
                        <td>21 june 2022</td>
                        <td>Details</td>
                      </tr>
                      <tr>
                        <td>Jemi</td>
                        <td>017979.....</td>
                        <td>Male</td>
                        <td>21 june 2022</td>
                        <td>Details</td>
                      </tr>
                      <tr>
                        <td>Jemi</td>
                        <td>017979.....</td>
                        <td>Male</td>
                        <td>21 june 2022</td>
                        <td>Details</td>
                      </tr>
                      <tr>
                        <td>Jemi</td>
                        <td>017979.....</td>
                        <td>Male</td>
                        <td>21 june 2022</td>
                        <td>Details</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className={styles.pagination}>
                  <PaginationBar />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
