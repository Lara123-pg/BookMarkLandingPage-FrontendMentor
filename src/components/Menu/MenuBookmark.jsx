import './menu.scss';

export function MenuBookmark(props) {
    return(
        <nav>
            <ul>
                <li><a href="#" className={props.classname} id='link1'>FEATURES</a></li>
                <li><a href="#" className={props.classname}>PRICING</a></li>
                <li><a href="#" className={props.classname}>CONTACT</a></li>
            </ul>
        </nav>
    );
}