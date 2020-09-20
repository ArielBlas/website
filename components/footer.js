import styles from '../styles/footer.module.scss';

export default function Footer(){
    let d = new Date();
    let currentYear = d.getFullYear(); 

    return(
        <footer>
            <div className={styles.copyContainer}>
                <p>Copyright &copy; {currentYear} Ariel Blas. All Rights Reserved</p>
            </div>            
        </footer>
    )
}