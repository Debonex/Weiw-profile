import type { NextPage } from 'next'
import styles from '../styles/Examples.module.css'
import Profile from '../src/components/profile'
import { exampleProps } from '../src/assets/ts/examples'

const profiles = exampleProps.map((prop, idx) => <Profile {...prop} key={idx}></Profile>)
const Examples: NextPage = () => {
  return <div className={styles.container}>{profiles}</div>
}

export default Examples
