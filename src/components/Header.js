import React from 'react';
import { FiGithub } from 'react-icons/fi';

const Header = () => {
    const githubRepoUrl = 'https://github.com/sagargouda/ridiv'; // Your GitHub repo URL

    return (
        <header className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 shadow-md">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-black text-2xl font-sans">ridiv</div>
                <a
                    href={githubRepoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black flex items-center hover:text-gray-200 transition duration-300"
                >
                    <FiGithub size={24} />
                </a>
            </div>
        </header>
    );
};

export default Header;
