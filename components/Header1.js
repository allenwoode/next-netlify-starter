import React from 'react'
import Image from 'next/image'
import logo from '../assets/logo.svg'
import Search from '../assets/svg/search'

const styles = {
  header: `bg-[#17171A] text-white h-20 flex gap-[100px] w-full p-[30px]`,
  headerWrapper: `flex h-full max-w-screen-xl mx-auto px-4`,
  nav: `flex items-center gap-[20px]`,
  navItem: `relative mr-1 cursor-pointer hover:opacity-60`,
  badge: `rounded-full bg-blue-600 h-1 w-1 absolute bottom-5 right-0 top-1 ring-4`,
  inputeContainer: `flex items-center justify-center p-2 rounded bg-[#171924]`,
  input: `bg-transparent outline-none text-white w-70 ml-3`
}

export default function Header({ title }) {
  return (
    <div className={styles.header}>
      <Image
        src={logo}
        alt='logo'
        width={220}
        height={220}
      />

      <div className={styles.headerWrapper}>
        <nav className={styles.nav}>
          <div className={styles.navItem}>
            <div className={styles.navLink}>谷歌</div>
            <div className={styles.badge}/>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>谷歌</div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>谷歌</div>
            <div className={styles.badge}/>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>谷歌</div>
            <div className={styles.badge}/>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>谷歌</div>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>谷歌</div>
            <div className={styles.badge}/>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>谷歌</div>
            <div className={styles.badge}/>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>必应</div>
            <div className={styles.badge}/>
          </div>

          <div className={styles.navItem}>
            <div className={styles.navLink}>搜狗</div>
          </div>

          <div className='flex items-center'>
            <div className={styles.inputeContainer}>
              <Search />
              <input className={styles.input} placeholder='Search'></input>
            </div>
            
          </div>
        </nav>
      </div>
    </div>
  )
}
