import React from 'react';

import { PreloaderContainer, PreloaderItem, PreloaderWrapper } from './styled';

const Preloader: React.FC = () => {
    const PreloaderItems: any = [];

    for (let i = 1; i <= 12; i++) {
        PreloaderItems.push(<PreloaderItem key={i} num={i} />);
    }

    return (
        <PreloaderWrapper>
            <PreloaderContainer>
                {PreloaderItems}
            </PreloaderContainer>
        </PreloaderWrapper>
    );
};

export default Preloader;