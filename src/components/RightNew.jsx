import React, { useState, useEffect } from 'react';
import '../styles/Right.css';
import '../styles/RightNew.css';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';

const initialRows = [
    {
        id: '1',
        filter: 'Anarkali Kurtas',
        variants: [
            { id: '1', content: 'Anniversary', image: "https://images.squarespace-cdn.com/content/v1/5a74702ce45a7cd601df944b/abba9148-7aef-4593-9c4a-2906002519de/Naval+Mz+Passport+size.JPG" },
            { id: '2', content: '2 image', image: "https://img.freepik.com/free-photo/full-length-view-female-sales-executive-airline-holding-boarding-pass-passport-white-background_662251-648.jpg" },
            { id: '3', content: 'Multi Image', image: "https://e7.pngegg.com/pngimages/55/993/png-clipart-passport-dress-template-man-suit-and-beige-and-black-necktie-miscellaneous-template-thumbnail.png" },
        ],
    },
    {
        id: '2',
        filter: 'Kurta Set',
        variants: [
            { id: '1', content: 'Single image product', image: "https://thumbnail.imgbin.com/5/15/23/imgbin-suit-tuxedo-suit-hJDwH5MBj9KXtCy27bCu5PBFS_t.jpg" },
            { id: '2', content: '4 image - zero', image: "https://afar.brightspotcdn.com/dims4/default/829e65c/2147483647/strip/true/crop/1829x2439+305+0/resize/330x440!/quality/90/?url=https%3A%2F%2Fk3-prod-afar-media.s3.us-west-2.amazonaws.com%2Fbrightspot%2F34%2F90%2F3fd20eda47b1b9bca69a8eea5a15%2Fshutterstock-323368394-1.jpg" },
            { id: '3', content: '4 image - zero', image: "https://img.favpng.com/24/21/18/passport-suit-formal-wear-shirt-png-favpng-uF58srT2QjpGRayQcLRJMd8QH.jpg" },
        ],
    },
];

function Right() {
    const [rows, setRows] = useState(initialRows);

    useEffect(() => {
        const storedRows = localStorage.getItem('rows');
        if (storedRows) {
            setRows(JSON.parse(storedRows));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('rows', JSON.stringify(rows));
    }, [rows]);

    const handleDragEnd = (result) => {
        if (!result.destination) return;

        const updatedRows = [...rows];
        const [reorderedRow] = updatedRows.splice(result.source.index, 1);
        updatedRows.splice(result.destination.index, 0, reorderedRow);

        setRows(updatedRows);
    };

    const addRow = () => {
        const newRow = {
            id: Date.now().toString(),
            filter: 'New Collection',
            variants: rows[0].variants.map(variant => ({ ...variant, id: Date.now().toString(), content: 'New Variant', image: null })),
        };
        setRows([...rows, newRow]);
    };

    const deleteRow = (index) => {
        setRows(rows.filter((_, i) => i !== index));
    };

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
        <div className="right_box">
            <div className="upper">
                {/* ... (keep the existing upper section code) ... */}
            </div>
            <div className="lower">
                <DragDropContext onDragEnd={handleDragEnd}>
                    <Droppable droppableId="rows">
                        {(provided) => (
                            <table className="table" {...provided.droppableProps} ref={provided.innerRef}>
                                <thead>
                                    <tr>
                                        <th>Filter</th>
                                        {rows[0].variants.map((_, index) => (
                                            <th key={index}>Variant {index + 1}</th>
                                        ))}
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {rows.map((row, rowIndex) => (
                                        <Draggable key={row.id} draggableId={row.id} index={rowIndex}>
                                            {(provided) => (
                                                <tr
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                >
                                                    <td>{row.filter}</td>
                                                    {row.variants.map((variant, variantIndex) => (
                                                        <td key={variant.id}>
                                                            <div className="variant-box">
                                                                <input
                                                                    type="file"
                                                                    accept="image/*"
                                                                    onChange={(event) => handleImageUpload(rowIndex, variantIndex, event)}
                                                                />
                                                                {variant.image && (
                                                                    <img src={variant.image} alt="Variant" className="variant-image" />
                                                                )}
                                                                <span>{variant.content}</span>
                                                            </div>
                                                        </td>
                                                    ))}
                                                    <td>
                                                        <button onClick={() => deleteRow(rowIndex)}>Delete Row</button>
                                                    </td>
                                                </tr>
                                            )}
                                        </Draggable>
                                    ))}
                                    {provided.placeholder}
                                </tbody>
                            </table>
                        )}
                    </Droppable>
                </DragDropContext>
                <div className="buttons">
                    <button onClick={addRow}>Add New Row</button>
                    <button onClick={addVariant}>Add New Variant</button>
                </div>
            </div>
        </div>
    );
}

export default Right;
