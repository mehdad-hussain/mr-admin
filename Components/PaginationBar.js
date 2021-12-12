import styles from "../styles/paginationBar.module.scss";

const PaginationBar = () => {
  return (
    <>
      <div className={styles.pagination}>
        <a href='#'>Previous</a>
        <a className={styles.active} href='#'>
          1
        </a>
        <a href='#'>2</a>
        <a href='#'>3</a>
        <a href='#'>4</a>
        <a href='#'>5</a>
        <a href='#'>6</a>
        <a href='#'>Next</a>
      </div>
    </>
  );
};

export default PaginationBar;
