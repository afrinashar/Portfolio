// LoadingText.js
import React from 'react';
import './LoadingText.scss';

const name = ['A', 'F', 'R', 'I', 'N', '', 'A', 'S', 'H', 'A', 'R'];

const LoadingText = () => {
    return (
        <nav aria-label="Animated Name Loading">
            <ul id="content" className="loading-text" itemScope itemType="https://schema.org/Person">
                {name.map((char, idx) => (
                    <li key={idx} aria-label={char ? char : 'space'} itemProp="name">
                        {char}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default LoadingText;
