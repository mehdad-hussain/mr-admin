import React from "react";
import Link from "next/link";

import styles from "../styles/sidebar.module.scss";
import Button from "./Button";

function sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebarBrand}>
          <h2>
            <span className=''></span>TheMarketPlace
          </h2>
        </div>

        <div className={styles.sidebarMenu}>
          <div className=''>
            <ul>
              <li>
                <Link href='/dashboard'>
                  <a className={styles.active}>
                    <span className=''></span>
                    <span>Dashboard</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Seller</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Customer</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Product</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Order</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Return</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Transaction</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Reviews & Ratings</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Commission</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Promotions</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Subscriptions</span>
                  </a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>
                    <span className=''></span>
                    <span>Contracts</span>
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default sidebar;
