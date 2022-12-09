// STYLES ARE VERY SIMPLE USING STANDARD HTML GLOBAL CSS
//import Head from 'next/head';
//import styles from '../styles/Home.module.css';

import Image from 'next/image';
import logo from '../public/static/images/cellprom.png';

export default function Home() {
  return (
    <>
      <div>
        <Image
          alt="Cellprom logo"
          src={logo}
          width={100}
          height={100}
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />
      </div>

      <div class="login-box">
        <h2>Cellprom</h2>
        <form>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Surname</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>DNI</label>
          </div>
          <div className="user-box">
            <input type="date" name="" required="" />
            <label>Birth date</label>
          </div>
          <div className="user-box">
            <input type="text" name="" required="" />
            <label>Age</label>
          </div>
          <br />
          <div className="user-box-area">
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
    </>
  );
}
