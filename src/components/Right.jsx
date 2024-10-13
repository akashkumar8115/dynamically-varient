import React from 'react';
import '../styles/Right.css';
import "../styles/Responnsive.css";
import Table from './Table.jsx';

function Right() {


    // 
    let intsideLeftt = true;
    const sideLeft = () => {
        if (intsideLeftt) {
            const left = document.querySelector('.left');
            left.style.display = 'none';

            const leftArrow = document.querySelector('.side-left');
            leftArrow.style.transform = 'rotate(180deg)';
            intsideLeftt = false;
        } else {
            const left = document.querySelector('.left');
            left.style.display = 'block';
            const leftArrow = document.querySelector('.side-left');
            leftArrow.style.transform = 'rotate(0deg)';
            intsideLeftt = true;

        }
    }

    return (
        <>
            <div className="right_box">
                <div className="upper">
                    <div className="upper-box">
                        <div className="header">
                            <h1 className='side-left' onClick={sideLeft}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="44"
                                    height="44"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-left"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                    <path d="M5 12h14M5 12l4 4M5 12l4-4"></path>
                                </svg>
                            </h1>
                            <h1 className='test_3'> Test 3_staging</h1>
                            <div className='primary-feed'><button>Primary feed</button></div>

                        </div>
                    </div>
                    <div className='publish-feed'>
                        <button className="publish-feed-box">Punlish Feed</button>
                    </div>
                </div>

                <Table />
            </div >
        </>
    )
}

export default Right