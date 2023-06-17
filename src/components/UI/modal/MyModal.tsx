import React, {FC, SetStateAction} from 'react';
import cl from './MyModalStyle.module.css'
interface MyModalProps {
    children: React.ReactNode;
    visible: boolean;
    setVisible: React.Dispatch<SetStateAction<boolean>>
}
const MyModal:FC<MyModalProps> = ({children, visible, setVisible}) => {

    const keyDownHandle = (event:KeyboardEvent) => {
        if (event.key === 'Escape') {
            event.preventDefault()
            setVisible(false)
        }
    }

    const rootStyle = [cl.modal]
    if (visible) {
        rootStyle.push(cl.active)
        document.addEventListener('keydown' ,keyDownHandle)

    } else {
        document.removeEventListener('keydown' ,keyDownHandle)
    }


    return (
        <div onClick={() => setVisible(false)} className={rootStyle.join(' ')}>
            <div onClick={(event) => event.stopPropagation()} className={cl.modal_content}>{children}</div>
        </div>
    );
};

export default MyModal;