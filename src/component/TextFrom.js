import React, { useState } from 'react'

export default function TextFrom() {
    const [formVal, setFormVal] = useState("");
    const [notification, setNotification] = useState("");
    const [history, setHistory] = useState([""]);
    const [historyIndex, setHistoryIndex] = useState(0);

    const showNotification = (message) => {
        setNotification(message);
        setTimeout(() => setNotification(""), 2000);
    };

    const saveToHistory = (newText) => {
        const newHistory = history.slice(0, historyIndex + 1);
        newHistory.push(newText);
        setHistory(newHistory);
        setHistoryIndex(newHistory.length - 1);
        setFormVal(newText);
    };

    const handleformValue = (event) => {
        setFormVal(event.target.value);
    }
    
    const handleUpClick = () => {
        const result = formVal.toUpperCase();
        saveToHistory(result);
        showNotification('Converted to UPPERCASE');
    }
    const handleLWClick = () => {
        const result = formVal.toLowerCase();
        saveToHistory(result);
        showNotification('Converted to lowercase');
    }
    const handleSCClick = () => {
        const result = formVal.charAt(0).toUpperCase() + formVal.substr(1).toLowerCase();
        saveToHistory(result);
        showNotification('Converted to Sentence case');
    }
    const handleCCClick = () => {
        const result = formVal.split(' ').map(w => w[0]?.toUpperCase() + w.substring(1).toLowerCase()).join(' ');
        saveToHistory(result);
        showNotification('Converted to Title Case');
    }
    const handleACClick = () => {
        const result = formVal.split('').map((c, i) => i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()).join('');
        saveToHistory(result);
        showNotification('Applied alternating case');
    }
    const handleICClick = () => {
        const result = formVal.split('').map((c) => c.toUpperCase() === c ? c.toLowerCase() : c.toUpperCase()).join('');
        saveToHistory(result);
        showNotification('Applied inverse case');
    }
    const handleReverseClick = () => {
        const result = formVal.split('').reverse().join('');
        saveToHistory(result);
        showNotification('Text reversed');
    }
    const handleRXSClick = () => {
        const result = formVal.replace(/\s{2,}/g, ' ').trim();
        saveToHistory(result);
        showNotification('Extra spaces removed');
    }
    const handleRemoveNumbersClick = () => {
        const result = formVal.replace(/[0-9]/g, '');
        saveToHistory(result);
        showNotification('Numbers removed');
    }
    const handleRemoveSpecialClick = () => {
        const result = formVal.replace(/[^a-zA-Z0-9\s]/g, '');
        saveToHistory(result);
        showNotification('Special characters removed');
    }
    const handleRemoveDuplicatesClick = () => {
        const result = [...new Set(formVal.split('\n'))].join('\n');
        saveToHistory(result);
        showNotification('Duplicate lines removed');
    }
    const handleSortLinesClick = () => {
        const result = formVal.split('\n').sort().join('\n');
        saveToHistory(result);
        showNotification('Lines sorted A-Z');
    }
    const handleBase64EncodeClick = () => {
        try {
            const result = btoa(formVal);
            saveToHistory(result);
            showNotification('Encoded to Base64');
        } catch (e) {
            showNotification('Error encoding to Base64');
        }
    }
    const handleBase64DecodeClick = () => {
        try {
            const result = atob(formVal);
            saveToHistory(result);
            showNotification('Decoded from Base64');
        } catch (e) {
            console.error('Base64 decode error:', e);
            showNotification('Invalid Base64 string');
        }
    }
    const handleCopyClick = () => {
        navigator.clipboard.writeText(formVal);
        showNotification('Copied to clipboard!');
    }
    const handleClearClick = () => {
        saveToHistory('');
        showNotification('Text cleared');
    }
    const handleUndoClick = () => {
        if (historyIndex > 0) {
            setHistoryIndex(historyIndex - 1);
            setFormVal(history[historyIndex - 1]);
            showNotification('Undone');
        }
    }
    const handleRedoClick = () => {
        if (historyIndex < history.length - 1) {
            setHistoryIndex(historyIndex + 1);
            setFormVal(history[historyIndex + 1]);
            showNotification('Redone');
        }
    }

    const buttonStyle = {
        padding: '0.6rem 1rem',
        margin: '0.25rem',
        border: 'none',
        borderRadius: '0.5rem',
        color: 'white',
        fontWeight: '500',
        cursor: 'pointer',
        fontSize: '0.875rem'
    };

    const sectionStyle = {
        marginBottom: '1.5rem',
        padding: '1rem',
        background: '#f8fafc',
        borderRadius: '0.5rem',
        border: '1px solid #e2e8f0'
    };

    return (
        <div style={{minHeight: '80vh', background: '#f8fafc', padding: '1rem'}}>
            <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                {notification && (
                    <div style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        background: '#10b981',
                        color: 'white',
                        padding: '0.75rem 1rem',
                        borderRadius: '0.5rem',
                        zIndex: 1000,
                        fontSize: '0.875rem'
                    }}>
                        {notification}
                    </div>
                )}
                
                <div style={{background: 'white', borderRadius: '0.75rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '1.5rem'}}>
                    <div style={{textAlign: 'center', marginBottom: '1.5rem'}}>
                        <h1 style={{fontSize: '2rem', fontWeight: 'bold', color: '#2563eb', marginBottom: '0.5rem'}}>🪄 WordWizard</h1>
                        <p style={{color: '#6b7280', fontSize: '1rem'}}>Professional Text Processing & Transformation Tool</p>
                    </div>
                    
                    <div style={{display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1rem', justifyContent: 'center'}}>
                        <button onClick={handleCopyClick} style={{...buttonStyle, background: '#10b981', fontSize: '0.8rem', padding: '0.5rem 0.8rem'}}>📋 Copy</button>
                        <button onClick={handleClearClick} style={{...buttonStyle, background: '#ef4444', fontSize: '0.8rem', padding: '0.5rem 0.8rem'}}>🗑️ Clear</button>
                        <button onClick={handleUndoClick} disabled={historyIndex === 0} style={{...buttonStyle, background: historyIndex === 0 ? '#9ca3af' : '#6b7280', fontSize: '0.8rem', padding: '0.5rem 0.8rem'}}>↶ Undo</button>
                        <button onClick={handleRedoClick} disabled={historyIndex === history.length - 1} style={{...buttonStyle, background: historyIndex === history.length - 1 ? '#9ca3af' : '#6b7280', fontSize: '0.8rem', padding: '0.5rem 0.8rem'}}>↷ Redo</button>
                    </div>
                    
                    <div style={{marginBottom: '1rem'}}>
                        <textarea 
                            style={{
                                width: '100%',
                                padding: '1rem',
                                border: '2px solid #e5e7eb',
                                borderRadius: '0.5rem',
                                resize: 'vertical',
                                fontFamily: 'monospace',
                                fontSize: '0.9rem',
                                lineHeight: '1.5',
                                minHeight: '200px'
                            }}
                            value={formVal} 
                            onChange={handleformValue} 
                            rows="8"
                            placeholder="Enter your text here and watch the magic happen..."
                        ></textarea>
                    </div>
                    
                    <div style={{
                        background: '#f3f4f6',
                        borderRadius: '0.5rem',
                        padding: '1rem',
                        marginBottom: '1.5rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(80px, 1fr))',
                        gap: '0.5rem',
                        textAlign: 'center'
                    }}>
                        <div><div style={{fontWeight: '700', color: '#2563eb', fontSize: '1.2rem'}}>{formVal.length}</div><div style={{fontSize: '0.75rem', color: '#6b7280'}}>Characters</div></div>
                        <div><div style={{fontWeight: '700', color: '#059669', fontSize: '1.2rem'}}>{formVal.trim().length === 0 ? 0 : formVal.replace(/\s{2,}/g, ' ').trim().split(" ").length}</div><div style={{fontSize: '0.75rem', color: '#6b7280'}}>Words</div></div>
                        <div><div style={{fontWeight: '700', color: '#7c3aed', fontSize: '1.2rem'}}>{formVal.trim().length === 0 ? 0 : formVal.split(/\r\n|\r|\n/).length}</div><div style={{fontSize: '0.75rem', color: '#6b7280'}}>Lines</div></div>
                        <div><div style={{fontWeight: '700', color: '#dc2626', fontSize: '1.2rem'}}>{(formVal.match(/[0-9]/g) || []).length}</div><div style={{fontSize: '0.75rem', color: '#6b7280'}}>Numbers</div></div>
                    </div>
                    
                    <div style={sectionStyle}>
                        <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem'}}>Case Conversion</h3>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                            <button onClick={handleUpClick} style={{...buttonStyle, background: '#3b82f6'}}>UPPERCASE</button>
                            <button onClick={handleLWClick} style={{...buttonStyle, background: '#10b981'}}>lowercase</button>
                            <button onClick={handleSCClick} style={{...buttonStyle, background: '#8b5cf6'}}>Sentence case</button>
                            <button onClick={handleCCClick} style={{...buttonStyle, background: '#6366f1'}}>Title Case</button>
                            <button onClick={handleACClick} style={{...buttonStyle, background: '#ec4899'}}>aLtErNaTiNg</button>
                            <button onClick={handleICClick} style={{...buttonStyle, background: '#f59e0b'}}>iNvErSe</button>
                        </div>
                    </div>
                    
                    <div style={sectionStyle}>
                        <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem'}}>Text Manipulation</h3>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                            <button onClick={handleReverseClick} style={{...buttonStyle, background: '#7c3aed'}}>Reverse Text</button>
                            <button onClick={handleRXSClick} style={{...buttonStyle, background: '#14b8a6'}}>Remove Extra Spaces</button>
                            <button onClick={handleRemoveNumbersClick} style={{...buttonStyle, background: '#dc2626'}}>Remove Numbers</button>
                            <button onClick={handleRemoveSpecialClick} style={{...buttonStyle, background: '#ea580c'}}>Remove Special Chars</button>
                            <button onClick={handleRemoveDuplicatesClick} style={{...buttonStyle, background: '#0891b2'}}>Remove Duplicates</button>
                            <button onClick={handleSortLinesClick} style={{...buttonStyle, background: '#059669'}}>Sort A-Z</button>
                        </div>
                    </div>
                    
                    <div style={sectionStyle}>
                        <h3 style={{fontSize: '1.1rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.75rem'}}>Encoding</h3>
                        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                            <button onClick={handleBase64EncodeClick} style={{...buttonStyle, background: '#4338ca'}}>Base64 Encode</button>
                            <button onClick={handleBase64DecodeClick} style={{...buttonStyle, background: '#6366f1'}}>Base64 Decode</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}