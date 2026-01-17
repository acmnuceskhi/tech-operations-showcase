import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaHome, FaProjectDiagram, FaUsers } from 'react-icons/fa';

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => setIsOpen(!isOpen);

    const navItems = [
        { path: '/', icon: FaHome, label: 'Home' },
        { path: '/projects', icon: FaProjectDiagram, label: 'Projects' },
        { path: '/members', icon: FaUsers, label: 'Members' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <>
            {/* Toggle Button */}
            <button
                onClick={toggleSidebar}
                className="fixed top-6 left-6 z-50 p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                aria-label="Toggle navigation"
            >
                {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-black/40 backdrop-blur-md border-r border-white/10 z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex flex-col h-full pt-24 px-6">
                    <nav className="flex-1 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            return (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={toggleSidebar}
                                    className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 ${isActive(item.path)
                                            ? 'bg-white/20 text-white border border-white/30'
                                            : 'text-slate-300 hover:bg-white/10 hover:text-white'
                                        }`}
                                >
                                    <Icon className="text-xl" />
                                    <span className="font-semibold">{item.label}</span>
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="py-6 border-t border-white/10">
                        <p className="text-slate-400 text-sm text-center">Tech Operations Showcase</p>
                    </div>
                </div>
            </aside>
        </>
    );
}
