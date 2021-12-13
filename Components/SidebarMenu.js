import React from "react";
import Link from "next/link";

import Button from "./Button";

const SidebarMenu = () => {
  const { btn } = props;

  if (btn) {
    return (
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
    );
  }

  return <div></div>;
};

export default SidebarMenu;
