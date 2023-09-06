import styles from "./EntryInfoSection.module.css";

export default function EntryInfoSection() {
  return (
    <section className={styles['info-section']}>
      <div className={styles['info']}>
        <div className={styles['info-text-wrap']}>
            <h2>Какво е индустриален стил</h2>
            <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
                sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo 
                duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata 
                sanctus 
            </p>
            <p>Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur 
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua. At vero eos et 
            accusam et justo duo dolores et</p>
            <button>Научи повече за нас</button>
        </div>
      </div>

      <div className={styles['bg-image']}></div>

    </section>
  )
}
