import React, { useState, useEffect } from 'react';
import '../styles/Right.css';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialRows = [

    {
        id: '1',
        filter: 'Anarkali Kurtas',
        variants: [
            { id: '1', content: 'Anniversary ', image: "https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/abba9148-7aef-4593-9c4a-2906002519de/Naval+Mz+Passport+size.JPG" },
            { id: '2', content: '2 image', image: "https://img.freepik.com/free-photo/full-length-view-female-sales-executive-airline-holding-boarding-pass-passport-white-background_662251-648.jpg" },
            { id: '3', content: 'Multi Image', image: "https://e7.pngegg.com/pngimages/55/993/png-clipart-passport-dress-template-man-suit-and-beige-and-black-necktie-miscellaneous-template-thumbnail.png" },
        ],
    },



    {
        id: '2',
        filter: 'Kurta Set',
        variants: [
            { id: '1', content: 'Single image product', image: "https://thumbnail.imgbin.com/5/15/23/imgbin-suit-tuxedo-suit-hJDwH5MBj9KXtCy27bCu5PBFS_t.jpg" },
            { id: '2', content: '4 image - zero ', image: "https://afar.brightspotcdn.com/dims4/default/829e65c/2147483647/strip/true/crop/1829x2439+305+0/resize/330x440!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F34%2F90%2F3fd20eda47b1b9bca69a8eea5a15%2Fshutterstock-323368394-1.jpg" },
            { id: '3', content: '4 image - zero ', image: "https://img.favpng.com/24/21/18/passport-suit-formal-wear-shirt-png-favpng-uF58srT2QjpGRayQcLRJMd8QH.jpg" },
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
        const newRow = {
            id: Date.now().toString(),
            filter: 'New Collection',
            variants: rows[0].variants.map(variant => ({ ...variant, id: Date.now().toString(), content: 'New Variant', image: null })),
        };
        setRows([...rows, newRow]);
    };

    // Delete row
    const deleteRow = (index) => {
        setRows(rows.filter((_, i) => i !== index));
    };

    // Add new variant
    const addVariant = () => {
        const newVariant = {
            id: Date.now().toString(),
            content: 'New Variant',
            image: null,
        };
        const updatedRows = rows.map(row => ({
            ...row,
            variants: [...row.variants, newVariant],
        }));
        setRows(updatedRows);
    };

    // Delete variant
    const deleteVariant = (rowIndex, variantIndex) => {
        const updatedRows = rows.map((row, index) => {
            if (index === rowIndex) {
                return {
                    ...row,
                    variants: row.variants.filter((_, i) => i !== variantIndex),
                };
            }
            return row;
        });
        setRows(updatedRows);
    };

    // Handle image upload for a variant
    const handleImageUpload = (rowIndex, variantIndex, event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            const updatedRows = rows.map((row, index) => {
                if (index === rowIndex) {
                    const updatedVariants = [...row.variants];
                    updatedVariants[variantIndex] = { ...updatedVariants[variantIndex], image: reader.result };
                    return { ...row, variants: updatedVariants };
                }
                return row;
            });
            setRows(updatedRows);
        };

        if (file) {
            reader.readAsDataURL(file);
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
                                <table className="table" {...provided.droppableProps} ref={provided.innerRef}>
                                    <thead>
                                        <tr className='table-row table-row-head'>
                                            <div className='table-row-head-filter filter'> <th className='row-number'>#</th>
                                                <th className='filter-name filter-name-head'>Actions</th></div>

                                            <div className='variants'>
                                                {rows[0].variants.map((_, index) => (
                                                    <th key={index} className='variant_head variant'>Variant {index + 1}</th>
                                                ))}
                                            </div>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {rows.map((row, rowIndex) => (
                                            <Draggable
                                                key={row.id}
                                                draggableId={row.id}
                                                index={rowIndex}
                                            >
                                                {(provided) => (
                                                    <tr
                                                        className="table-row"
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                    >


                                                        <div className="filter">
                                                            <td className='row-number'>
                                                                <div className='row-number-box'>
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
                                                            </td>

                                                            <td className='filter-name'>
                                                                <div className='filter-name-box'>
                                                                    <p>production collectio</p>
                                                                    <p>Contains</p>
                                                                    <p>anarkali kurtas</p>
                                                                </div>
                                                            </td>

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

                                                        <td className="variants">
                                                            {row.variants.map((variant, variantIndex) => (
                                                                <div className="variant" key={variant.id}>
                                                                    <div className='variant-box'>
                                                                        <input className='hide'
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
                                                        </td>
                                                    </tr>
                                                    // </div>
                                                )}
                                            </Draggable>
                                        ))}
                                        {provided.placeholder}

                                    </tbody>
                                </table>
                            )}
                        </Droppable>
                    </DragDropContext>
                    <div className='add-row-btn-container'>
                        <button className="add-row-btn" onClick={addRow}>
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
            </div >
        </>
    )
}

export default Right