import { useState } from 'react';

import arrowIcon from '../../assets/icon-arrow.svg';
import arrowIcon2 from '../../assets/icon-arrow2.svg';

export function FAQ(props) {
    const [showResponse, setShowResponse] = useState(false);

    return(
        <div className={props.classname}>
            <div className={`title ${showResponse ? '' : 'borderTitle'}`}>
                <strong onClick={() => setShowResponse(!showResponse)}>{props.question}</strong>

                {
                    showResponse ? 
                        <img 
                            onClick={() => setShowResponse(!showResponse)} 
                            src={arrowIcon2} 
                            alt='Ícone de seta direcionada para cima da cor vermelha.'
                            className='arrowUp'
                        />
                    :
                        <img 
                            onClick={() => setShowResponse(!showResponse)} 
                            src={arrowIcon} 
                            alt="Ícone de seta direcionada para baixo da cor azul." 
                            className='arrowDown'
                        />
                }
            </div>
            {
                showResponse ? 
                    <p className={showResponse ? 'openResponse' : ''}>{props.response}</p> 
                : 
                ''
            }
        </div>
    );
}