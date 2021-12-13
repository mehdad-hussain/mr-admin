import Link from "next/link";

import styles from "../styles/paginationBar.module.scss";

const PaginationBar = () => {
  return (
    <>
      <div className={styles.pagination}>
        <Link href='/'>
          <a>Previous</a>
        </Link>
        <Link href='/'>
          <a className={styles.active}>1</a>
        </Link>
        <Link href='/'>
          <a>2</a>
        </Link>
        <Link href='/'>
          <a>3</a>
        </Link>
        <Link href='/'>
          <a>4</a>
        </Link>
        <Link href='/'>
          <a>5</a>
        </Link>
        <Link href='/'>
          <a>6</a>
        </Link>
        <Link href='/'>
          <a>Next</a>
        </Link>
      </div>
    </>
  );
};

export default PaginationBar;
