import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import Message from "./components/Message";
import Content from "./components/Contents";

export default function Home() {
  return (
    <main className={styles.main}>
      <Message />
      <Content />
    </main>
  );
}
