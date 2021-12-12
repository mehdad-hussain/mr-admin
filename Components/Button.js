import Link from "next/link";

const Button = (props) => {
  const { href, classes, type, click, disabled, exact, children } = props;

  if (props.href) {
    return (
      <Link href={props.href} className={`btn ${classes || ""}`} exact={exact}>
        <a>{children}</a>
      </Link>
    );
  }

  return (
    <>
      <button
        className={`btn ${classes || ""}`}
        type={type}
        onClick={click}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};

export default Button;
