import React from 'react';
import './modal.css';
import ModalProps from './modal.types';

export const Modal: React.FunctionComponent<ModalProps> = ({
    isOpen,
    handleClose,
    backgroundOpacity = 0.32,
    closePosition = { vertical: 'top', horizontal: 'right' },
    closeColor = '#5D3FD3',
    children
}) => {
    const modalStyle: React.CSSProperties = {
        background: `rgba(0, 0, 0, ${backgroundOpacity})`
    };

    const buttonStyle: React.CSSProperties = {
        top: `${closePosition.vertical === 'top' ? 0 : 'none'}`,
        bottom: `${closePosition.vertical === 'bottom' ? 0 : 'none'}`,
        left: `${closePosition.horizontal === 'left' ? 0 : 'none'}`,
        right: `${closePosition.horizontal === 'right' ? 0 : 'none'}`,
        color: closeColor
    };

    /**
     * Close modal on click outside
     * @param e {React.MouseEvent}
     */
    const closeModal = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        target.className.includes('modal_modal') && handleClose();
    };

    return (
        <div className={`modal ${isOpen ? 'open' : 'closed'}`} style={modalStyle} onClick={(e) => closeModal(e)}>
            <section className={'main'}>
                {children}
                <button className={'closeButton'} type="button" style={buttonStyle} onClick={handleClose}>
                    ✕
                </button>
            </section>
        </div>
    );
};
