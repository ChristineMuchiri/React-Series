import { createElement } from "react";

export function UserFavouriteFood() {
    return createElement('div', null,             <section>
                <span>Favourite Foods:</span>
                <br />
                <ul>
                    <li>Sushi</li>
                    <li>Pizza</li>
                    <li>Mediterranean Food</li>
                </ul>
            </section>)
}