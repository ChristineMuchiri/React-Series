import { createElement } from "react";
import styles from './users.modules.scss'

export function UserFavouriteFood() {
    return createElement('div', null,             <section>
                <span className={styles.foodsTitle}>Favourite Foods:</span>
                <br />
                <ul>
                    <li>Sushi</li>
                    <li>Pizza</li>
                    <li>Mediterranean Food</li>
                </ul>
            </section>)
}