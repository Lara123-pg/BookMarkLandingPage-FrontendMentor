import illustrationFeaturesTab2 from '../../assets/illustration-features-tab-2.svg';

import { Background } from '../ImageBackground/Background';
import { Button } from '../MoreInfoButton/Button';

import './tabs.scss';

export function Tab2() {
    return(
        <div className='tabs'>
            <Background  classname='bgTabs'/>
            <img className='imageTab2' src={illustrationFeaturesTab2} alt="Imagem representando informações em tela com uma lupa." />

            <div className='infos'>
                <strong>Intelligent search</strong>

                <p id='pTab2'>Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.</p>

                <Button />
            </div>
        </div>
    );
}