import React from 'react';
import '../styles/Left.css';
import "../styles/Index.css";
import Right from './Right.jsx';
function Index() {

    return (
        <div className="app">
            <div className="left">
                <div className='left_box'>
                    <div className='left_upper'>
                        <ol>
                            <li><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-car-fan"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 12V3l4.912 1.914a1.7 1.7 0 01.428 2.925zM12 12h9l-1.914 4.912a1.7 1.7 0 01-2.925.428zM12 12H3l1.914-4.912a1.7 1.7 0 012.925-.428zM12 12v9l-4.912-1.914a1.7 1.7 0 01-.428-2.925z"></path>
                            </svg></li>

                            <li> <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-notification-off"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M6.154 6.187A2 2 0 005 8v9a2 2 0 002 2h9a2 2 0 001.811-1.151M14 7a3 3 0 106 0 3 3 0 10-6 0M3 3l18 18"></path>
                            </svg></li>

                            <li><svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M6 4h10l4 4v10a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2"></path>
                                <path d="M10 14a2 2 0 104 0 2 2 0 10-4 0M14 4v4H8V4"></path>
                            </svg></li>

                            <li> <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-brand-meta"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M12 10.174C13.766 7.39 15.315 6 16.648 6c2 0 3.263 2.213 4 5.217.704 2.869.5 6.783-2 6.783-1.114 0-2.648-1.565-4.148-3.652a27.627 27.627 0 01-2.5-4.174zM12 10.174C10.234 7.39 8.685 6 7.352 6c-2 0-3.263 2.213-4 5.217-.704 2.869-.5 6.783 2 6.783C6.466 18 8 16.435 9.5 14.348c1-1.391 1.833-2.783 2.5-4.174z"></path>
                            </svg></li>

                            <li> <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-shirt"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M15 4l6 2v5h-3v8a1 1 0 01-1 1H7a1 1 0 01-1-1v-8H3V6l6-2a3 3 0 006 0"></path>
                            </svg></li>
                        </ol>
                    </div>
                    <div className='left_down'>
                        <ol>
                            <li>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-folder-open"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M5 19l2.757-7.351A1 1 0 018.693 11H21a1 1 0 01.986 1.164l-.996 5.211A2 2 0 0119.026 19H5a2 2 0 01-2-2V6a2 2 0 012-2h4l3 3h7a2 2 0 012 2v2"></path>
                            </svg></li>

                            <li> <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="34"
                                height="34"
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="icon icon-tabler icons-tabler-outline icon-tabler-settings"
                                viewBox="0 0 24 24"
                            >
                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37 1 .608 2.296.07 2.572-1.065z"></path>
                                <path d="M9 12a3 3 0 106 0 3 3 0 00-6 0"></path>
                            </svg></li>
                        </ol>
                    </div>
                </div>
            </div>
            <div className="right">
                <Right />
            </div>
        </div>
    );
}

export default Index;