import styles from "../styles/header.module.scss";

const Header = () => {
  return (
    <>
      <header className={styles.header}>
        {/* <div className={styles.headerTitle}>
            <h2>
              <label htmlFor='nav-toggle'>
                <span className=''></span>
              </label>
              Return Management
            </h2>
          </div> */}
        <label htmlFor='nav-toggle'>
          <span className='las la-bars'></span>
        </label>

        <div className={styles.userWrapper}>
          <span className=''></span>
          <span className=''></span>
          <img
            src='https://www.w3schools.com/howto/img_avatar.png'
            alt='admin-image'
          />
          <div className=''>
            <h4>John Doe</h4>
            <small>Admin</small>
          </div>
        </div>
        {/* <Button classes={styles.addBtn} type='submit' click=''>
            + Add Button
          </Button> */}
      </header>
    </>
  );
};

export default Header;
