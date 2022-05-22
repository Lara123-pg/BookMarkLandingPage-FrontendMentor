import bgDots from '../../assets/bg-dots.svg';

import { Button } from '../ExtensionButton/Button';

export function InfoBrowsers(props) {
    return(
        <div className={props.classname}>
            <img className='photos' src={props.image} alt={props.description} />

            <strong>Add to {props.title}</strong>
            <p>Minimum version {props.version}</p>

            <div className='buttonE'>
                <img src={bgDots} alt="Imagem de background - Descrição: pontilhados da cor branca." />

                <Button />
            </div>
        </div>
    );
}