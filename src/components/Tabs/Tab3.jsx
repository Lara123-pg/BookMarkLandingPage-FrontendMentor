import illustrationFeaturesTab3 from '../../assets/illustration-features-tab-3.svg';

import { Background } from '../ImageBackground/Background';
import { Button } from '../MoreInfoButton/Button';

import './tabs.scss';

export function Tab3() {
    return(
        <div className="tabs">
            <Background classname='bgTabs' />
            <img className='imageTab3' src={illustrationFeaturesTab3} alt="Imagem com informações em tela e mostra duas pessoas." />

            <div className='infos'>
                <strong>Share your bookmarks</strong>

                <p id='pTab3'>Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.</p>

                <Button />
            </div>
        </div>
    );
}