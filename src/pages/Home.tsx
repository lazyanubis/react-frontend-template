import { useCallback, useState } from 'react';
import { Button } from '@heroui/react';

import { useBearStore } from '@/stores/bear';
import { useWebsiteStore } from '@/stores/website';
import { useTransaction } from '@/hooks/translation';
import Test from '@/components/test';

import heroImg from '../assets/images/hero.png';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

function HomePage() {
    const t = useTransaction();

    const [count, setCount] = useState(0);

    const increase = useBearStore((state) => state.increase);

    const { language, setLanguage } = useWebsiteStore();
    const changeLanguage = useCallback(() => {
        setLanguage(language === 'en' ? 'zh-CN' : 'en');
    }, [language, setLanguage]);

    return (
        <>
            <section id="center">
                <div className="hero">
                    <img src={heroImg} className="base" width="170" height="179" alt="" />
                    <img src={reactLogo} className="framework" alt="React logo" />
                    <img src={viteLogo} className="vite" alt="Vite logo" />
                </div>
                <div className="flex w-full flex-col justify-center">
                    <h1>Get started</h1>
                    <p>
                        Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
                    </p>
                </div>
                <button className="counter" onClick={() => setCount((count) => count + 1)}>
                    Count is {count}
                </button>

                <div className="flex w-full flex-row justify-center gap-4">
                    <div className="flex flex-col items-center justify-center">
                        <Button onPress={() => increase(2)}>add 2</Button>
                        <Test />
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <Button onPress={changeLanguage}>Change Language</Button>
                        <div>{language}</div>
                        <div>{t('test.test')}</div>
                        <div>{t('test.test')}</div>
                        <div>{t('test.test2')}</div>
                    </div>
                </div>
            </section>

            <div className="ticks"></div>

            <section id="next-steps">
                <div id="docs">
                    <svg className="icon" role="presentation" aria-hidden="true">
                        <use href="/icons.svg#documentation-icon"></use>
                    </svg>
                    <h2>Documentation</h2>
                    <p>Your questions, answered</p>
                    <ul>
                        <li>
                            <a href="https://vite.dev/" target="_blank">
                                <img className="logo" src={viteLogo} alt="" />
                                Explore Vite
                            </a>
                        </li>
                        <li>
                            <a href="https://react.dev/" target="_blank">
                                <img className="button-icon" src={reactLogo} alt="" />
                                Learn more
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="social">
                    <svg className="icon" role="presentation" aria-hidden="true">
                        <use href="/icons.svg#social-icon"></use>
                    </svg>
                    <h2>Connect with us</h2>
                    <p>Join the Vite community</p>
                    <ul>
                        <li>
                            <a href="https://github.com/vitejs/vite" target="_blank">
                                <svg className="button-icon" role="presentation" aria-hidden="true">
                                    <use href="/icons.svg#github-icon"></use>
                                </svg>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a href="https://chat.vite.dev/" target="_blank">
                                <svg className="button-icon" role="presentation" aria-hidden="true">
                                    <use href="/icons.svg#discord-icon"></use>
                                </svg>
                                Discord
                            </a>
                        </li>
                        <li>
                            <a href="https://x.com/vite_js" target="_blank">
                                <svg className="button-icon" role="presentation" aria-hidden="true">
                                    <use href="/icons.svg#x-icon"></use>
                                </svg>
                                X.com
                            </a>
                        </li>
                        <li>
                            <a href="https://bsky.app/profile/vite.dev" target="_blank">
                                <svg className="button-icon" role="presentation" aria-hidden="true">
                                    <use href="/icons.svg#bluesky-icon"></use>
                                </svg>
                                Bluesky
                            </a>
                        </li>
                    </ul>
                </div>
            </section>

            <div className="ticks"></div>
            <section id="spacer"></section>
        </>
    );
}

export default HomePage;
