import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow_white from './right-arrow-white.png';
import person from './Person.png';
import profile from './profile.png';
import design from './design.jpeg';
import codes from './codes.jpeg';
import study from './study.jpeg';
import C from './C.svg';
import python from './Python.svg';
import dart from './Dart.svg';
import flutter from './flutter-original.svg';
import kotlin from './Kotlin.svg';
import swift from './swift-original.svg';
import mysql from './mysql-original.svg';
import sqlite from './file-type-sqlite.svg'
import html from './html5-original.svg';
import css from './css3-original.svg';
import js from './javascript-original.svg';
import react from './react-original.svg';
import typesecript from './typescript-original.svg';
import tailwind from './tailwindcss-original.svg';
import next from './nextjs-original.svg';
import sasc from './sasc.jpeg';
import binus from './binus.jpeg';
import tfisc from './tfisc.png';
import ada from './ada.jpeg';
import youthmatters from './youthmatters.png';
import aidbuddy from './aidbuddy.png';
import tapesync from './tapesync.png';
import picverse from './picverse.png';
import dojomovies from './dojomovies.png';
import github from './github.svg';
import github_white from './github_white.svg';
import linkedin_purple from './linkedin_purple.svg';
import github_purple from './github_purple.svg';
import instagram_purple from './instagram_purple.svg';
import linkedin_lp from './linkedin_lp.svg';
import github_lp from './github_lp.svg';
import instagram_lp from './instagram_lp.svg';

export const assets = {
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow_white,
    person,
    profile,
    design,
    codes,
    study,
    C,
    python,
    dart,
    flutter, 
    kotlin,
    swift,
    mysql,
    sqlite,
    html,
    css,
    js,
    react,
    typesecript,
    tailwind,
    next,
    sasc,
    binus,
    tfisc,
    ada,
    youthmatters,
    aidbuddy,
    tapesync,
    picverse,
    dojomovies,
    github,
    github_white,
    github_purple,
    linkedin_purple,
    instagram_purple,
    github_lp,
    linkedin_lp,
    instagram_lp,
};

export const techStack = [
    assets.C, 
    assets.python, 
    assets.dart, 
    assets.flutter, 
    assets.kotlin, 
    assets.swift, 
    assets.mysql, 
    assets.sqlite,
    assets.html, 
    assets.css, 
    assets.js, 
    assets.react, 
    assets.typesecript, 
    assets.tailwind, 
    assets.next
];

export const experienceData = [
    { 
        icon: assets.sasc, 
        title: 'SASC Senior Mentor', 
        subtitle: 'SASC BINUS University',
    },
    { 
        icon: assets.binus, 
        title: 'Freshmen Partner', 
        subtitle: 'BINUS University',
    },
    { 
        icon: assets.binus, 
        title: 'Freshmen Leader', 
        subtitle: 'BINUS University',
    },
    { 
        icon: assets.tfisc, 
        title: 'Activist of CP : Education', 
        subtitle: 'TFI Student Community',
    },
    { 
        icon: assets.ada, 
        title: 'iOS Foundation Cohort 19', 
        subtitle: 'Apple Developer Academy @BINUS',
    },
    { 
        icon: assets.youthmatters, 
        title: 'Graphic Designer', 
        subtitle: 'Youth Matters',
    },
]

export const projectData = [
    {
        title: 'AidBuddy',
        details: ['Group Project', 'Application', '2023'],
        description: 'AidBuddy is a vital mobile app developed using Swift, designed to provide immediate and reliable first aid information in emergency situations. Whether dealing with a minor injury or a critical medical emergency, AidBuddy offers step-by-step guidance to help users respond quickly and effectively before professional assistance arrives.',
        bgImage: assets.aidbuddy,
        icons: [assets.figma, assets.swift],
        link: 'https://github.com/olynsn15/AidBuddy',
    },
    {
        title: 'TapeSync',
        details: ['Group Project', 'Application', '2024'],
        description: 'TapeSync is a mobile app built with Flutter that serves as a digital video tape store, allowing customers to browse and purchase tapes, while admins manage tape data. Developed with a Node.js back-end and MySQL database, the app supports CRUD operations, secure JWT-based authentication, and features a responsive UI for a smooth user experience.',
        bgImage: assets.tapesync,
        icons: [assets.dart, assets.flutter, assets.mysql],
        link: 'https://github.com/olynsn15/MCS-DoJo-Movie',
    },
    {
        title: 'Picverse',
        details: ['Individual Project', 'Website', '2025'],
        description: 'Picverse Community is a dynamic online platform designed to empower digital artists through sharing, connection, and recognition. The website features five primary pages, initially prototyped in Figma and then developed using HTML, CSS, and JavaScript, ensuring a responsive, smooth and engaging user experience across various devices.',
        bgImage: assets.picverse,
        icons: [assets.figma, assets.html, assets.css, assets.js],
        link: 'https://github.com/olynsn15/Picverse',
    },
    {
        title: 'DoJo Movies',
        details: ['Group Project', 'Application', '2025'],
        description: 'DoJo Movie is an Android mobile app that lets users browse and purchase high-quality films while also locating nearby DoJo Movie stores via Google Maps. Built with SQLite for data storage, the app features user authentication, OTP verification, film browsing with data fetched via Volley, and a Google Maps-integrated home page.',
        bgImage: assets.dojomovies,
        icons: [assets.kotlin, assets.sqlite],
        link: 'https://github.com/olynsn15/MCS-DoJo-Movie',
    },
]

export const contactData = [
    { 
        icon: assets.linkedin_purple, 
        darkIcon: assets.linkedin_lp,
        name: 'Carolyn Santana', 
        link: 'https://www.linkedin.com/in/carolyn-santana15/',
    },
    { 
        icon: assets.github_purple, 
        darkIcon: assets.github_lp,
        name: 'olynsn15', 
        link: 'https://github.com/olynsn15',
    },
    { 
        icon: assets.instagram_purple, 
        darkIcon: assets.instagram_lp,
        name: '@olyn.sna', 
        link: 'https://www.instagram.com/olyn.sna',
    },
]