import React, { useState } from 'react';

import facebookIcon from '../../assets/icon-facebook.svg';
import facebookHoverIcon from '../../assets/icon-facebookHover.svg';

import twitterIcon from '../../assets/icon-twitter.svg';
import twitterHoverIcon from '../../assets/icon-twitterHover.svg';

export function SocialMediaDiv() {
    const [changeIconFacebook, setChangeIconFacebook] = useState(false);
    const [changeIconTwitter, setChangeIconTwitter] = useState(false);

    return(
        <>
            {
                changeIconFacebook ? 
                    <img 
                        src={facebookHoverIcon} 
                        alt="Ícone do Facebook - Descrição: fundo rosa com letra F da cor do brackground(azul escuro)."
                        onMouseOut={() => setChangeIconFacebook(false)}
                    />
                :
                    <img  
                        src={facebookIcon} 
                        alt="Ícone do Facebook - Descrição: fundo branco com letra F da cor do brackground(azul escuro)."
                        onMouseOver={() => setChangeIconFacebook(true)}
                    />
            }
            
            {
                changeIconTwitter ? 
                    <img 
                        src={twitterHoverIcon} 
                        alt="Ícone do Twitter - Descrição: Passáro rosa."
                        onMouseOut={() => setChangeIconTwitter(false)}
                    />
                :
                    <img 
                        src={twitterIcon} 
                        alt="Ícone do Twitter - Descrição: Passáro branco." 
                        onMouseOver={() => setChangeIconTwitter(true)}
                    />          
            }
        </>
    );
}