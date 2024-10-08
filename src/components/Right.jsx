import React, { useState, useEffect } from 'react';
import '../styles/Right.css';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialRows = [
    {
        id: '1',
        filter: 'Anarkali Kurtas',
        variants: [
            { id: '1', content: 'Anniversary ', image: null },
            { id: '2', content: '2 image', image: null },
            { id: '3', content: 'Multi Image', image: null },
        ],
    },
    {
        id: '2',
        filter: 'Kurta Set',
        variants: [
            { id: '1', content: 'Single image product', image: null },
            { id: '2', content: '4 image - zero ', image: null },
        ],
    },
];

function Right() {
    const [rows, setRows] = useState(initialRows);

    // Load data from local storage
    useEffect(() => {
        const storedRows = localStorage.getItem('rows');
        if (storedRows) {
            setRows(JSON.parse(storedRows));
        }
    }, []);

    // Update local storage whenever rows change
    useEffect(() => {
        localStorage.setItem('rows', JSON.stringify(rows));
    }, [rows]);

    // Handle drag and drop for row reordering
    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const updatedRows = [...rows];
        const [reorderedRow] = updatedRows.splice(result.source.index, 1);
        updatedRows.splice(result.destination.index, 0, reorderedRow);

        setRows(updatedRows);
    };

    // Add new row
    const addRow = () => {
        setRows([
            ...rows,
            { id: Date.now().toString(), filter: 'New Collection', variants: [] },
        ]);
    };

    // Delete row
    const deleteRow = (index) => {
        setRows(rows.filter((_, i) => i !== index));
    };

    // Add new variant
    const addVariant = (rowIndex) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex].variants.push({
            id: Date.now().toString(),
            content: 'New Variant',
            image: null,
        });
        setRows(updatedRows);
    };

    // Delete variant
    const deleteVariant = (rowIndex, variantIndex) => {
        const updatedRows = [...rows];
        updatedRows[rowIndex].variants = updatedRows[rowIndex].variants.filter(
            (_, i) => i !== variantIndex
        );
        setRows(updatedRows);
    };

    // Handle image upload for a variant
    const handleImageUpload = (rowIndex, variantIndex, event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const updatedRows = [...rows];
            updatedRows[rowIndex].variants[variantIndex].image = reader.result; // Store the base64 image string
            setRows(updatedRows);
        };

        if (file) {
            reader.readAsDataURL(file); // Convert image file to base64 string
        }
    };

    return (
        <>
            <div className="right_box">
                <div className="upper">
                    <div className="upper-box">
                        <div className="header">
                            <h1>
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
                            <h1 className=''> Test 3_staging</h1>
                            <div className='primary-feed'><button>Primary feed</button></div>

                        </div>
                    </div>
                    <div className='publish-feed'>
                        <button className="publish-feed-box">Punlish Feed</button>
                    </div>
                </div>
                <div className="lower">
                    <DragDropContext onDragEnd={handleDragEnd}>
                        <Droppable droppableId="rows">

                            {(provided) => (
                                <div
                                    className="table"
                                    {...provided.droppableProps}
                                    ref={provided.innerRef}
                                >
                                    {rows.map((row, rowIndex) => (
                                        <Draggable
                                            key={row.id}
                                            draggableId={row.id}
                                            index={rowIndex}
                                        >
                                            {(provided) => (
                                                <div
                                                    className="table-row"
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <div className="filter">
                                                        {/* Display dynamic row number here */}
                                                        <div className='row-number'>
                                                            <div className=''>
                                                                <p>{rowIndex + 1}</p>
                                                                <p> <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-grid-dots"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                                    <path d="M4 5a1 1 0 102 0 1 1 0 10-2 0M11 5a1 1 0 102 0 1 1 0 10-2 0M18 5a1 1 0 102 0 1 1 0 10-2 0M4 12a1 1 0 102 0 1 1 0 10-2 0M11 12a1 1 0 102 0 1 1 0 10-2 0M18 12a1 1 0 102 0 1 1 0 10-2 0M4 19a1 1 0 102 0 1 1 0 10-2 0M11 19a1 1 0 102 0 1 1 0 10-2 0M18 19a1 1 0 102 0 1 1 0 10-2 0"></path>
                                                                </svg></p>
                                                            </div>
                                                        </div>

                                                        <div className='filter-name'>
                                                            <div className='filter-name-box'>
                                                                <p>production collectio</p>
                                                                <p>Contains</p>
                                                                <p>anarkali kurtas</p>
                                                            </div>
                                                        </div>

                                                        <div className='filter-action'>
                                                            <button
                                                                className="delete-row-btn"
                                                                onClick={() => deleteRow(rowIndex)}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                                    <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="variants">
                                                        {row.variants.map((variant, variantIndex) => (
                                                            <div className="variant" key={variant.id}>
                                                                <div className='variant-box'>
                                                                    <input
                                                                        type="file"
                                                                        accept="image/*"
                                                                        onChange={(event) =>
                                                                            handleImageUpload(rowIndex, variantIndex, event)
                                                                        }
                                                                    />
                                                                    {variant.image && (
                                                                        <img
                                                                            src={variant.image}
                                                                            alt="Variant"
                                                                            className="variant-image"
                                                                        />
                                                                    )} <br />
                                                                    <span>{variant.content}</span>
                                                                    <div className='variant-action-delete'>
                                                                        <button
                                                                            className="delete-variant-btn"
                                                                            onClick={() =>
                                                                                deleteVariant(rowIndex, variantIndex)
                                                                            }
                                                                        >
                                                                            <svg
                                                                                xmlns="http://www.w3.org/2000/svg"
                                                                                width="24"
                                                                                height="24"
                                                                                fill="none"
                                                                                stroke="currentColor"
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth="2"
                                                                                className="icon icon-tabler icons-tabler-outline icon-tabler-trash"
                                                                                viewBox="0 0 24 24"
                                                                            >
                                                                                <path stroke="none" d="M0 0h24v24H0z"></path>
                                                                                <path d="M4 7h16M10 11v6M14 11v6M5 7l1 12a2 2 0 002 2h8a2 2 0 002-2l1-12M9 7V4a1 1 0 011-1h4a1 1 0 011 1v3"></path>
                                                                            </svg>
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div className='add-variant-btn-container'>
                                                            <button
                                                                className="add-variant-btn"
                                                                onClick={() => addVariant(rowIndex)}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    width="24"
                                                                    height="24"
                                                                    fill="none"
                                                                    stroke="black"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth="2"
                                                                    className="icon icon-tabler icons-tabler-outline icon-tabler-plus"
                                                                    viewBox="0 0 24 24"
                                                                >
                                                                    <path stroke="none" d="M0 0h24v24H0z"></path>
                                                                    <path d="M12 5v14M5 12h14"></path>
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <button className="add-row-btn" onClick={addRow}>
                        Add New Filter (Row)
                    </button>
                </div>
            </div >
        </>
    )
}

export default Right