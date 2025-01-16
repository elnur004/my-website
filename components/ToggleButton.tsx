"use client"

import { Menu, X } from "lucide-react";

const ToggleButton = ({ toggleMenu, isMenuOpen }: { toggleMenu: () => void, isMenuOpen: boolean }) => {
    return (
        <button
            className="md:hidden text-gray-700 hover:text-blue-600"
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

    )
}

export default ToggleButton;