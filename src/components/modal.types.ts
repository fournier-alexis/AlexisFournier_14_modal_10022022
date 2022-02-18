export default interface ModalProps {
    isOpen: boolean;
    handleClose: () => void;
    backgroundOpacity?: number;
    closePosition?: {
        vertical: 'top' | 'bottom';
        horizontal: 'left' | 'right';
    };
    closeColor?: string;
    children?: React.ReactChild | React.ReactChild[];
}
