import React, {
  useState, useRef, useEffect, useCallback,
} from 'react';

import styles from './MyPZPopover.module.scss';

const MyPZPopover = (props) => {
  const {
    children,
    opener,
    isOpen,
    className,
    onClose,
    anchorPosition,
  } = props;

  const [open, setOpen] = useState(isOpen || false);
  const refTooltip = useRef(null);
  const refOpener = useRef(null);

  const handleClose = useCallback(() => {
    if (!onClose || !open || typeof onClose !== 'function') {
      return;
    }

    onClose();
  }, [onClose, open]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!refTooltip.current || refTooltip.current.contains(event.target)) {
        return;
      }

      if (refOpener.current.contains(event.target)) {
        setOpen(!open);
        handleClose();
        return;
      }

      setOpen(false);
      handleClose();
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open, handleClose]);

  const getClassName = () => {
    let classToApply = '';

    if (!open) {
      classToApply += ` ${styles['content-closed']} `;
    }

    if (className) {
      classToApply += `${styles[className]}`;
    }

    if (anchorPosition === 'right') {
      classToApply += ` ${styles['anchor-right']} `;
    }

    if (anchorPosition === 'left') {
      classToApply += ` ${styles['anchor-left']} `;
    }

    return classToApply;
  };

  return (
    <div className={styles['mypz-popover']}>
      <div className={styles['mypz-popover-opener']} role="button" tabIndex="0" ref={refOpener}>
        {opener}
      </div>
      <div role="tooltip" className={`${styles['mypz-popover-content']} ${getClassName()}`} ref={refTooltip}>
        {children}
      </div>
    </div>
  );
};

export default MyPZPopover;
