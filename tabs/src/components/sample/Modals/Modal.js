import React from 'react'
import ReactDom from 'react-dom'
import "./Modal.css";

// Modal setup for Game Info buttons

const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    transition: '200ms ease-in -out',
    padding: '50px',
    border: '3px solid white',
    borderRadius : '30px',
    backgroundColor: '#BEE3EE',
    color: 'black',
    overflowY: 'auto',
    maxHeight: '100vh',
    zIndex: 1000
}

const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    transition: '200ms ease-in-out',
    PointerEvent: 'none',
    zIndex: 1000
}

export default function Modal({ open, children, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div style={OVERLAY_STYLES} />
            <div style={MODAL_STYLES}>
                <button className="closemodalbutton" onClick={onClose}>Close X</button>
                {children}
            </div>
        </>,
        document.getElementById('portal')
    )
}
