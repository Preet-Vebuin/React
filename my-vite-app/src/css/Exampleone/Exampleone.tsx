import styles from "./Exampleone.module.css";

//import 'Exampleone.css'
// by using this module format we can  resolve the css confilct which were occcuring in previous

const Button1 = () => {
  return <button className={styles.button}>Click Me</button>;
};

export default Button1;
