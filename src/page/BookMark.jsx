import { useState } from 'react';

import { Background } from '../components/ImageBackground/Background';
import { Tab1 } from '../components/Tabs/Tab1';
import { Tab2 } from '../components/Tabs/Tab2';
import { Tab3 } from '../components/Tabs/Tab3';
import { InfoBrowsers } from '../components/Browsers/InfoBrowsers';

import hamburgerIcon from '../assets/icon-hamburger.svg';
import close from '../assets/icon-close.svg';

import illustrationHero from '../assets/illustration-hero.svg';

import logoBookmark from '../assets/logo-bookmark.svg';
import logoBookmarkLight from '../assets/logo-bookmarkLight.svg';

import chromeLogo from '../assets/logo-chrome.svg';
import firefoxLogo from '../assets/logo-firefox.svg';
import operaLogo from '../assets/logo-opera.svg';

import { FAQ } from '../components/FAQBookmark/FAQ';
import { Button } from '../components/MoreInfoButton/Button';
import { MenuBookmark } from '../components/Menu/MenuBookmark';
import { SocialMediaDiv } from '../components/SocialMedia/SocialMediaDiv';

import '../scss/main.scss';

export default function BookMark() {
    const [tab1, setTab1] = useState(true);
    const [tab2, setTab2] = useState(false);
    const [tab3, setTab3] = useState(false);

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState(null);

    const [responsive, setResponsive] = useState(false);
    const [closeMenu, setCloseMenu] = useState(false);

    function handleClickedOptionTab1() {
        setTab1(true);

        setTab2(false);
        setTab3(false);
    }

    function handleClickedOptionTab2() {
        setTab2(true);

        setTab1(false);
        setTab3(false);
    }

    function handleClickedOptionTab3() {
        setTab3(true);

        setTab1(false);
        setTab2(false);
    }

    const validate = () => {
        let error = false;

        setEmailError(null);
        const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(email == '') {
            setEmailError('Email Address cannot be empty');
            error = true;

        } else if(!regexEmail.test(String(email).toLowerCase())) {
            setEmailError('Whoops, make sure it´s an email');
            error = true;
        }

        return !error;
    }

    return(
        <div className="container">
            <header>
                <img className={closeMenu ? 'hiddenMainMenu' : ''} src={logoBookmark} alt="Logo da Bookmark - Descrição: Ícone de uma bandeira branca com fundo circular azul e ao lado o Nome Bookmark com a cor preta." />

                <div className='linksButton'>
                    <MenuBookmark  classname='headerColor'/>

                    <button type='button'>LOGIN</button>
                </div>

                <label className='hamburgerButton' onClick={() => {
                    setCloseMenu(!closeMenu)
                }}>
                    {
                        closeMenu ? 
                            <img className='close' src={close} alt="Imagem de x para fechar o menu." />
                        :
                            <img src={hamburgerIcon} className={closeMenu ? 'hiddenMainMenu' : ''} alt='Ícone de botão hamburger'/>
                    }
                </label>

                {closeMenu ? (
                    <div className='styleMenu'>
                        <div className='logoButton'>
                            <img src={logoBookmarkLight} alt="Logo da Bookmark - Descrição: Ícone de uma bandeira branca com fundo circular azul e ao lado o Nome Bookmark com a cor branca." />

                            <img className='close' src={close} alt="Imagem de x para fechar o menu." onClick={() => setCloseMenu(false)} />
                        </div>

                        <div className='linksButtonResponsive'>
                            <MenuBookmark classname='responsiveMenu'/>

                            <button type='button'>LOGIN</button>
                        </div>

                        <div className='socialMediasResponsive'>
                            <SocialMediaDiv />
                        </div>
                </div>
                )
                :
                    ''
                }                
            </header>

            <main>
                <div className='infosPhoto'>
                    <div className='info'>
                        <h1>A Simple Bookmark Manager</h1>
                        <p>A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instanly. Try it for free.</p>

                        <div className='buttons'>
                            <button className='chrome' type='button'>Get it on Chrome</button>
                            <button className='firefox' type='button'>Get it on Firefox</button>
                        </div>
                    </div>

                    <img src={illustrationHero} alt="Imagem de um tablet representando informações na tela"/>

                    <Background classname="bgInfo" />
                </div>

                <div className='links'>
                    <strong>Features</strong>
                    <p>Our aim is to make it quick and easy for you to access your favourite websites. Your bookmark sync between your devices so you can access them on the go.</p>

                    <div className='optionsTab'>
                        <button 
                            type='button' 
                            className={tab1 ? 'selectedOption' : ''} 
                            onClick={handleClickedOptionTab1}
                        >
                            Simple Bookmarking
                        </button>

                        <button 
                            type='button' 
                            className={tab2 ? 'selectedOption' : ''}
                            onClick={handleClickedOptionTab2}
                        >
                            Speedy Searching
                        </button>

                        <button 
                            type='button' 
                            className={tab3 ? 'selectedOption' : ''}
                            onClick={handleClickedOptionTab3}
                        >
                            Easy Sharing
                        </button>
                    </div>

                    <div className='tabs'>
                       {
                           tab1 ? <Tab1 /> : ''
                       }

                       {
                           tab2 ? <Tab2 /> : ''
                       }

                       {
                           tab3 ? <Tab3 /> : ''
                       }
                    </div>
                </div>

                <div className='browsers'>
                    <strong>Download the extension</strong>

                    <p>We´ve got more browsers in the pipeline. Please do let us know if you´ve got a favourite you´d like us to prioritize.</p>

                    <div className='infoBrowsers'>
                        <InfoBrowsers 
                            classname='chromeBrowser'

                            image={chromeLogo}
                            description='Logo do Chrome - Descrição: Círculo dividido em três cores: Vermelho, amarelo e verde e tem um círculo centralizado da cor azul.'

                            title='Chrome'
                            version='62'
                        />

                        <InfoBrowsers 
                            classname='firefoxBrowser'

                            image={firefoxLogo}
                            description='Logo do Firefox - Descrição: Imagem de uma raposa da cor laranja.'

                            title='Firefox'
                            version='55'
                        />

                        <InfoBrowsers 
                            classname='operaBrowser'

                            image={operaLogo}
                            description='Logo do Opera - Descrição: Letra O da cor vermelha.'

                            title='Opera'
                            version='46'
                        />
                    </div>
                </div>

                <div className='faq'>
                    <strong>Frequently Asked Questions</strong>

                    <p>Here are some of our FAQs. If you have any other questions you´d like answered please feel free to email us.</p>

                    <div className='faqs'>
                        <FAQ 
                            classname='question1'

                            question='What is Bookmark?'
                            response='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.
                          '
                        />

                        <FAQ 
                            classname='question2'

                            question='How can I resquest a new browser?'
                            response='Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. 
                            Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.'
                        />

                        <FAQ 
                            classname='question3'
                            
                            question='Is there a mobile app?'
                            response='Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.'
                        />

                        <FAQ 
                            classname='question4'

                            question='What about other Chromium browsers?'
                            response='Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.'
                        />
                    </div>

                    <Button />
                </div>

                <div className='contact'>
                    <p>35.000+ ALREADY JOINED</p>

                    <strong>Stay up-to-date with what we´re doing</strong>

                    <div className='input'>
                        <div className='inputError'>
                            <input 
                                type='text'
                                className={emailError ? 'errorInput' : ''}
                                onChange={event => {
                                    setEmail(event.target.value);
                                    setEmailError(null);
                                }} 
                                placeholder='Enter your email address'
                            />

                            <span className={emailError ? 'error' : ''}>{emailError}</span>
                        </div>

                       <button onClick={() => validate()}>Contact Us</button>
                    </div>
                </div>
            </main>

            <footer>
                <div className='infoFooter'>
                    <div className='linksLogo'>
                        <img src={logoBookmarkLight} alt="Logo da Bookmark - Descrição: Ícone de uma bandeira branca com fundo circular azul e ao lado o Nome Bookmark com a cor branca." />

                        <MenuBookmark classname='footerColor' />
                    </div>

                    <div className='socialMedias'>
                        <SocialMediaDiv />
                    </div>
                </div>

                <p class="attribution">
                    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
                    Coded by <a href="https://github.com/Lara123-pg">Lara Fernanda</a>.
                </p>
            </footer>
        </div>
    );
}