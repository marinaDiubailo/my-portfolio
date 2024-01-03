import { memo } from 'react';
//import styled from 'styled-components';
import { Icon } from '../../../components/uiKit/icon/Icon';
import serviceSprite from '../../../assets/icons/serviceSprite.svg';
import photo from '../../../assets/images/photo.jpg';

type MainPropsType = {};

export const Main = memo((props: MainPropsType) => {
    //const {} = props;

    return (
        <div style={{ display: 'flex' }}>
            <div>
                <span>Hello!</span>
                <h2>I'm Marina Diubailo</h2>
                <div>
                    I'm a <h1>Web Developer</h1> who loves to craft attractive
                    design experiences for the web.
                </div>
                <div>
                    <button
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            background: '#676CDB',
                            fontSize: '20px',
                            gap: '10px',
                            padding: '20px 40px',
                            lineHeight: '24px',
                        }}
                    >
                        <Icon
                            sprite={serviceSprite}
                            id="mail"
                            width="20px"
                            height="20px"
                            viewBox="0 0 20 20"
                        />
                        Email me
                    </button>
                    <button
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            fontSize: '20px',
                            gap: '5px',
                            padding: '20px 40px',
                            lineHeight: '24px',
                            textDecorationLine: 'underline',
                        }}
                    >
                        <Icon
                            sprite={serviceSprite}
                            id="download"
                            width="20px"
                            height="20px"
                            viewBox="0 0 20 20"
                            fill="none"
                        />
                        Download CV
                    </button>
                </div>
            </div>
            <div>
                <img src={photo} width="300px" alt="mainPhoto" />
            </div>
        </div>
    );
});

/**
 *  <Icon
                        sprite={skillsSprite}
                        id="react"
                        width="50px"
                        height="50px"
                        viewBox="0 0 50 50"
                    />
 */
