import React from 'react';
import { SiSpotify } from 'react-icons/si';

const SpotifyDropdown = () => {
    return (
        <a
            href="https://volt.fm/user/f0uqsd4ky115yma4?time_frame=short"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 border border-transparent hover:border-retro-accent text-retro-text hover:text-retro-accent transition-all duration-300"
            aria-label="Spotify Stats"
        >
            <SiSpotify size={20} />
        </a>
    );
};

export default SpotifyDropdown;
