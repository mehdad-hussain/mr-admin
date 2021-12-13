import React from "react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

import styles from "../styles/sidebar.module.scss";
import Button from "./Button";

const Sidebar = () => {
  const [dropDownIsOpen, setDropDownIsOpen] = useState(false);

  const clickHandler = () => {
    setDropDownIsOpen((prev) => !prev);
  };

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
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Customers</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Customer List</a>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Sellers</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Sellers List</a>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Products</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Category List</a>
                    </Link>
                    <Link href='path'>
                      <a>Brand List</a>
                    </Link>
                    <Link href='path'>
                      <a>Product List</a>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Orders</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Orders List</a>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Returns</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Return Requests</a>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Reviews & Ratings</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Product Reviews</a>
                    </Link>
                    <Link href='path'>
                      <a>Seller Reviews</a>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Transactions</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Customer Transactions</a>
                    </Link>
                    <Link href='path'>
                      <a>Seller Transactions</a>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Commissions</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Commission Settings</a>
                    </Link>
                    <Link href='path'>
                      <a>Sellers Commission</a>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Promotions</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Promotions</a>
                    </Link>
                    <Link href='path'>
                      <a>Campaigns</a>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Subscriptions</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Newsletters</a>
                    </Link>
                  </div>
                )}
              </li>
              <li>
                <Button click={clickHandler} classes={styles.dropdownBtn}>
                  <span className=''></span>
                  <span>Contracts</span>
                </Button>
                {!dropDownIsOpen && (
                  <div className={styles.dropdownContainer}>
                    <Link href='path'>
                      <a>Seller MOU</a>
                    </Link>
                    <Link href='path'>
                      <a>Discount Partners</a>
                    </Link>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
