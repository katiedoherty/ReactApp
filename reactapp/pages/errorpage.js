import styles from'../styles/error.module.css'
import Link from 'next/link'

//this page will show up if the user tries to search for an country that is non-existent
export default function Error() {

    return (
        <div className={styles.errorpage}>
            <h2 className={styles.title}>This country deos not exist</h2>
            <p>Please click the button below to return to the homepage</p>
            <Link href="/">
            <button className="searchbutton">Return to homepage</button>
            </Link>
        </div>
    )
}