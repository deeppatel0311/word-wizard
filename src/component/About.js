import React from 'react'

export default function About() {
    return (
        <div style={{minHeight: '80vh', background: '#f9fafb', padding: '2rem 1rem'}}>
            <div style={{maxWidth: '800px', margin: '0 auto'}}>
                <div style={{background: 'white', borderRadius: '0.5rem', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)', padding: '2rem'}}>
                    <div style={{textAlign: 'center', marginBottom: '2rem'}}>
                        <h1 style={{
                            fontSize: '2.5rem',
                            fontWeight: 'bold',
                            color: '#2563eb',
                            marginBottom: '1rem',
                            textAlign: 'center'
                        }}>🪄 About WordWizard</h1>
                        <p style={{fontSize: '1.125rem', color: '#6b7280'}}>Learn more about our text utility application</p>
                    </div>
                    
                    <div style={{display: 'flex', flexDirection: 'column', gap: '1.5rem'}}>
                        <div style={{borderLeft: '4px solid #3b82f6', paddingLeft: '1.5rem'}}>
                            <h2 style={{fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>What is WordWizard?</h2>
                            <p style={{color: '#4b5563'}}>
                                WordWizard is a simple text processing application with essential transformation functions. 
                                It includes case conversion (6 types), text manipulation tools, Base64 encoding/decoding, 
                                and real-time text statistics - all processing locally in your browser.
                            </p>
                        </div>
                        
                        <div style={{borderLeft: '4px solid #10b981', paddingLeft: '1.5rem'}}>
                            <h2 style={{fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Key Features</h2>
                            <ul style={{color: '#4b5563', lineHeight: '1.6'}}>
                                <li>• <strong>Case Conversion (6 types):</strong> UPPERCASE, lowercase, Sentence case, Title Case, aLtErNaTiNg, and iNvErSe</li>
                                <li>• <strong>Text Manipulation:</strong> Reverse text, remove extra spaces, numbers, special characters, duplicates, and sort lines</li>
                                <li>• <strong>Base64 Encoding:</strong> Encode and decode Base64 strings with error handling</li>
                                <li>• <strong>Real-time Statistics:</strong> Live character, word, line, and number counting</li>
                                <li>• <strong>User Experience:</strong> Undo/redo functionality, instant notifications, copy to clipboard, and mobile-responsive design</li>
                            </ul>
                        </div>
                        
                        <div style={{borderLeft: '4px solid #8b5cf6', paddingLeft: '1.5rem'}}>
                            <h2 style={{fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Technology Stack</h2>
                            <p style={{color: '#4b5563'}}>
                                WordWizard is built using modern web technologies including React 18, React Router for navigation, 
                                and modern CSS for responsive styling. The application is designed to be fast, accessible, 
                                and easy to use across all devices.
                            </p>
                        </div>
                        
                        <div style={{borderLeft: '4px solid #f97316', paddingLeft: '1.5rem'}}>
                            <h2 style={{fontSize: '1.25rem', fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem'}}>Privacy & Security</h2>
                            <p style={{color: '#4b5563'}}>
                                Your privacy is important to us. All text processing happens locally in your browser - 
                                no data is sent to external servers. Your text remains completely private and secure.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
