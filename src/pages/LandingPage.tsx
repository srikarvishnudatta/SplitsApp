import styles from "./LandingPage.module.css"

export default function LandingPage(){
    return <section className={styles.landing}>
        <div className={styles.landingcontent}>
        <p className={styles.landingheader}>
        <h1 className={styles.landingh1}>Split your expenses for free</h1>
        <p className={styles.landingpara}>Create. Invite. Split. Settle.</p>
        </p>
        <img src="illustration.png" alt="" />
        </div>
        <div>
            <h4>Powered by</h4>
            <div>
                React, Mantine, NodeJs, AWS
            </div>
        </div>
    </section>
}