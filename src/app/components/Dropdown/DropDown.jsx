'use client'
import React, { useState, useEffect } from 'react'

const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const closeDropdown = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleDocumentClick = (e) => {
          if (!e.target.closest('.relative.inline-block')) {
            closeDropdown();
          }
        };
    
        document.addEventListener('click', handleDocumentClick);
    
        return () => {
          document.removeEventListener('click', handleDocumentClick);
        };
      }, []);

    return (
        <div className='w-full'>
            <div className="relative inline-block">
                <button
                    type="button"
                    className="px-4 text-[#22c55e] text-[21px] font-semibold inline-flex items-center"
                    onClick={toggleDropdown}
                >
                    Tópicos <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                </button>

                {isOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-44 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <ul role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                            <li>
                                <a
                                    href="/functionspage"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Funções Cognitivas
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/eneagrama"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Eneagrama
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/carljung"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    Carl Jung
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/4sides"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                    onClick={closeDropdown}
                                >
                                    4 Lados da personalidade
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Dropdown;