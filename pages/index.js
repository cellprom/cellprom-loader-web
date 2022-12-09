import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div class="login-box">
      <h2>Cellprom</h2>
      <form>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Name</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Surname</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>DNI</label>
        </div>
        <div class="user-box">
          <input type="password" name="" required="" />
          <label>Birth date</label>
        </div>
        <div class="user-box">
          <input type="text" name="" required="" />
          <label>Age</label>
        </div>
        <div class="user-box-area">
          <textarea type="text" name="" required="" />
          <label>Patient</label>
        </div>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Load
        </a>
      </form>
    </div>
  );
}
