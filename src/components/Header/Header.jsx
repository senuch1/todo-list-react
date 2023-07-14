import Container from '../Container/Container';
import styles from './Header.module.css'

function Header() {
    return (
        <div className={styles.header__container}>
            <Container>
                <h3>Тестовое название страницы</h3>
            </Container>

        </div>
    )
}

export default Header;