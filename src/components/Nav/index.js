import React from 'react';
function Nav() {
    const parts = [
        {
            name:"about"
        },
        {
            name: "portfolio"
        },
        {
            name: "contact"
        },
        {
            name: "resume"
        }
    ];
    return (
        <header>
            <h2>
                <a href ="/">
                <span></span>
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2'>
                        <a href="#about">
                            About me
                        </a>
                    </li>
                    <li>
                        <span>Contact</span>
                    </li>
                    {parts.map((part) => (
                        <li
                            className='mx-1'
                            key={part.name}
                            >
                                <span>
                                    {part.name}
                                </span>
                            </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Nav;