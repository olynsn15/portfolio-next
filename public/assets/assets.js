import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-dark.png';
import right_arrow_bold_dark from './right-arrow-white.png';
import C from './C.svg';
import python from './Python.svg';
import dart from './Dart.svg';
import flutter from './flutter-original.svg';
import kotlin from './Kotlin.svg';
import html from './html5-original.svg';
import css from './css3-original.svg';
import js from './javascript-original.svg';
import react from './react-original.svg';
import typesecript from './typescript-original.svg';
import tailwind from './tailwindcss-original.svg';
import next from './nextjs-original.svg';
import swift from './swift-original.svg';
import mysql from './mysql-original.svg';
import sqlite from './file-type-sqlite.svg'
import bg from './bg.png';
import github from './github.svg';
import binus from './binus.jpeg';
import sasc from './sasc.jpeg';
import tfisc from './tfisc.png';
import ada from './ada.jpeg'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark, 
    C,
    python,
    dart,
    flutter, 
    kotlin,
    html,
    css,
    js,
    react,
    typesecript,
    tailwind,
    next,
    swift,
    mysql,
    sqlite,
    bg,
    github,
    binus,
    sasc,
    tfisc,
    ada,
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
        icon: assets.graphics_icon, 
        title: 'Graphic Designer', 
        subtitle: 'Youth Matters',
    },
]

export const workData = [
    {
        title: 'AidBuddy',
        // description: 'AidBuddy is a vital mobile app developed using Swift, designed to provide immediate and reliable first aid information in emergency situations. Whether dealing with a minor injury or a critical medical emergency, AidBuddy offers step-by-step guidance to help users respond quickly and effectively before professional assistance arrives.',
        bgImage: '/work-1.png',
        icons: [assets.figma, assets.swift],
        link: 'https://github.com/olynsn15/portfolio-next',
    },
    {
        title: 'TapeSync',
        // description: 'TapeSync is a mobile app built with Flutter that serves as a digital video tape store, allowing customers to browse and purchase tapes, while admins manage tape data. Developed with a Node.js back-end and MySQL database, the app supports CRUD operations, secure JWT-based authentication, and features a responsive UI with data validation for a smooth user experience.',
        bgImage: '/work-2.png',
        icons: [assets.dart, assets.flutter, assets.mysql],
        link: 'https://github.com/olynsn15/MCS-DoJo-Movie',
    },
    {
        title: 'Picverse',
        // description: 'Picverse Community is a dynamic online platform designed to empower digital artists through sharing, connection, and recognition. The website features five primary pages, initially prototyped in Figma and then developed using HTML, CSS, and JavaScript, ensuring a responsive, smooth and engaging user experience across various devices.',
        bgImage: '/work-3.png',
        icons: [assets.figma, assets.html, assets.css, assets.js],
        link: 'https://github.com/olynsn15/MCS-DoJo-Movie',
    },
    {
        title: 'DoJo Movies',
        // description: 'DoJo Movie is an Android mobile app that lets users browse and purchase high-quality films while also locating nearby DoJo Movie stores via Google Maps. Built with SQLite for data storage, the app features user authentication, OTP verification, film browsing with data fetched via Volley, and a Google Maps-integrated home page.',
        bgImage: '/work-4.png',
        icons: [assets.kotlin, assets.sqlite],
        link: 'https://github.com/olynsn15/MCS-DoJo-Movie',
    },
]