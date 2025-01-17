import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="bg-green-900 text-white w-full h-20 absolute left-0 top-0 flex justify-between items-start p-4">
            <div className="flex items-start space-x-4">
                <img src="logo-url" alt="Logo" className="h-8 w-8"/>
                <span className="font-bold text-lg">eLearning</span>
            </div>
            <div className="flex space-x-8 items-start">
                <NavLink
                    to="/"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "900" : "400",
                        color: isActive ? "yellow" : "white"
                    })}
                >
                    Home
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "900" : "400",
                        color: isActive ? "yellow" : "white"
                    })}
                >
                    About
                </NavLink>
                <NavLink
                    to="/courses"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "900" : "400",
                        color: isActive ? "yellow" : "white"
                    })}
                >
                    Courses
                </NavLink>
                <NavLink
                    to="/instructors"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "900" : "400",
                        color: isActive ? "yellow" : "white"
                    })}
                >
                    Instructors
                </NavLink>
                <NavLink
                    to="/testimonial"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "900" : "400",
                        color: isActive ? "yellow" : "white"
                    })}
                >
                    Testimonial
                </NavLink>
                <NavLink
                    to="/blog"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "900" : "400",
                        color: isActive ? "yellow" : "white"
                    })}
                >
                    Blog
                </NavLink>
                <NavLink
                    to="/contact"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "900" : "400",
                        color: isActive ? "yellow" : "white"
                    })}
                >
                    Contact
                </NavLink>
                <NavLink
                    to="/users"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "900" : "400",
                        color: isActive ? "yellow" : "white"
                    })}
                >
                    Users
                </NavLink>
            </div>
            <div className="flex space-x-4 items-start">
                <NavLink
                    to="/login"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "900" : "400",
                        color: isActive ? "yellow" : "white"
                    })}
                >
                    Login
                </NavLink>
                <NavLink
                    to="/signup"
                    style={({ isActive }) => ({
                        fontWeight: isActive ? "900" : "400",
                        color: isActive ? "yellow" : "white"
                    })}
                >
                    Signup
                </NavLink>
            </div>
        </nav>
    );
};

export default Nav;
