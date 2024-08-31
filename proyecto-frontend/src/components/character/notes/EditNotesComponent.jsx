import React, { useState, useEffect } from "react";
import { FaRegStickyNote } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const EditNotesComponent = ({ sheet, onChange }) => {
    const [newNote, setNewNote] = useState(""); // For creating new notes
    const [editingNoteIndex, setEditingNoteIndex] = useState(null); // Index of the note being edited
    const [noteContent, setNoteContent] = useState(""); // Content of the note being edited
    const [localNotes, setLocalNotes] = useState(sheet.notes || []); // Local state for notes

    // Effect to sync local notes with sheet.notes when sheet changes
    useEffect(() => {
        setLocalNotes(sheet.notes || []);
    }, [sheet.notes]);

    const handleAddNote = () => {
        if (newNote.trim()) {
            const updatedNotes = [...localNotes, newNote.trim()];
            setLocalNotes(updatedNotes);
            onChange('notes', updatedNotes);
            setNewNote(""); // Reset the input field
        }
    };

    const handleEditNote = (index) => {
        if (noteContent.trim()) {
            const updatedNotes = localNotes.map((note, i) =>
                i === index ? noteContent.trim() : note
            );
            setLocalNotes(updatedNotes);
            onChange('notes', updatedNotes);
            setEditingNoteIndex(null); // Exit editing mode
            setNoteContent(""); // Clear note content
        }
    };

    const handleDeleteNote = (index) => {
        const updatedNotes = localNotes.filter((_, i) => i !== index);
        setLocalNotes(updatedNotes);
        onChange('notes', updatedNotes);
    };

    const handleEditClick = (index) => {
        setEditingNoteIndex(index);
        setNoteContent(localNotes[index]);
    };

    const handleCancelEdit = () => {
        setEditingNoteIndex(null);
        setNoteContent("");
    };

    return (
        <div className="sheet-data-notes">
            <h2>Notas</h2>
            <div className="add-note">
                <textArea
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Añadir nueva nota"
                />
                <button className="note-btn" onClick={handleAddNote}>Añadir Nota</button>
            </div>
            {localNotes.length > 0 ? (
                <div className="notes-list">
                    {localNotes.map((note, index) => (
                        <div className="note-item" key={index}>
                            {editingNoteIndex === index ? (
                                <>
                                    <textarea
                                        value={noteContent}
                                        onChange={(e) => setNoteContent(e.target.value)}
                                        rows="4"
                                        cols="50"
                                    />
                                    <button className="note-btn" onClick={() => handleEditNote(index)}>Guardar Cambios</button>
                                    <button className="note-btn" onClick={handleCancelEdit}>Cancelar</button>
                                </>
                            ) : (
                                <>
                                    <p>{note}</p>
                                    <button className="sheet-list-btn" onClick={() => handleEditClick(index)}><FaEdit className="btn-icon"/></button>
                                    <button className="sheet-list-btn" onClick={() => handleDeleteNote(index)}><MdDelete className="btn-icon"/></button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
            ) : (
                <p>No hay notas disponibles.</p>
            )}
        </div>
    );
};
