import React from "react";
import Link from "next/link";

import styles from "../styles/Sidebar.module.scss";

function sidebar() {
  return (
    <>
      <div className={styles.row}>
        <div className={(styles.sidebar, styles.column)}>
          <div className={styles.sidebarBrand}>
            <h1>
              <span className=''></span>TheMarketPlace
            </h1>
          </div>
          <div className={styles.userWrapper}>
            <img
              src='https://www.w3schools.com/howto/img_avatar.png'
              alt='admin-image'
            />
            <div className=''>
              <h4>John Doe</h4>
              <small>Admin</small>
            </div>
          </div>
          <div className={styles.sidebarMenu}>
            <div className=''>
              <ul>
                <li>
                  <Link href='/dashboard'>
                    <a>
                      <span className=''></span>Dashboard
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='path'>
                    <a>
                      <span className=''></span>Seller Management
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='path'>
                    <a>
                      <span className=''></span>Customer Management
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='path'>
                    <a>
                      <span className=''></span>Product Management
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='path'>
                    <a>
                      <span className=''></span>Order Management
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='path'>
                    <a>
                      <span className=''></span>Review
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='path'>
                    <a>
                      <span className=''></span>Return Management
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href='path'>
                    <a>
                      <span className=''></span>Transaction Management
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.settingSection}>
            <p>
              <span className=''></span>Settings
            </p>
            <ul>
              <li>
                <Link href='path'>
                  <a>Profile Settings</a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>Social Settings</a>
                </Link>
              </li>
              <li>
                <Link href='path'>
                  <a>Payment Settings</a>
                </Link>
              </li>
            </ul>
          </div>
          <button className={`btn btn-gray ${styles.logoutBtn}`}>Logout</button>
        </div>
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

export default sidebar;

{
  /* <div className={styles.sidenav}>
        <h3 className='ml-40 mt-5 mb-5'>TheMarketPlace</h3>
        <div className='ml-20 mt-5 mb-5 p-10'>
          <img src='' alt='' />
          <p>William</p>
          <small>Sales Manager</small>
        </div>
        <button className={styles.dropdownBtn}>
          <i className={styles.faCaretDown} />
          Dashboard
        </button>
        <div className={styles.dropdownContainer}>
          <Link href='management'>Customer Management</Link>
          <Link href='management'>Seller Management</Link>
          <Link href='management'>Product Management</Link>
          <Link href='management'>Offer Management</Link>
          <Link href='management'>Oder Management</Link>
          <Link href='management'>Review</Link>
          <Link href='management'>Transaction Management</Link>
        </div>
        <button className={styles.dropdownBtn} onClick={(e) => {}}>
          <i className={styles.faCaretDown} />
          Settings
        </button>
        <div className={styles.dropdownContainer}>
          <Link href='management'>Profile Setting</Link>
          <Link href='management'>Social Setting</Link>
          <Link href='management'>Payment Setting</Link>
        </div>
        <button className='btn btn-gray m-10 p-10'>Logout</button>
      </div>
    */
}
