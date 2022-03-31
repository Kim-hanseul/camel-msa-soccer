import Link from "next/link";
import styles from "common/style/Nav.module.css";


export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/basic/components/calc'>Calculator</Link> </li>
        <li className={styles.li}> <Link href='/basic/components/counter'>Counter</Link> </li>
        <li className={styles.li}> <Link href='/basic/components/bmi'>BMI</Link> </li>
      </ul>
    </nav>
  );
};