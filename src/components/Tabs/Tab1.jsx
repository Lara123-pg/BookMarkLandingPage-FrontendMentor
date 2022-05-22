import illustrationFeaturesTab1 from '../../assets/illustration-features-tab-1.svg';

import { Background } from "../ImageBackground/Background";
import { Button } from '../MoreInfoButton/Button';

import './tabs.scss';

export function Tab1() {
    return(
        <div className="tabs">
            <Background classname='bgTabs'/>
            <img src={illustrationFeaturesTab1} alt="Imagem representando informações em tela." />

            <div className='infos'>
                <strong>Bookmark in one click</strong>

                <p id='pTab1'>Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.</p>

                <Button />
            </div>
        </div>
    );
}