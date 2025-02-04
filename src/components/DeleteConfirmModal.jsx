import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconAlertTriangle } from '@tabler/icons-react';

const DeleteConfirmModal = ({ isOpen, onClose, onConfirm, seminarTitle }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal confirm-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <IconAlertTriangle
            size={48}
            color="#e74c3c"
            style={{ marginBottom: '1rem' }}
          />
          <h3>Подтвердите удаление</h3>
          <p>
            Вы уверены, что хотите удалить семинар "{seminarTitle}"?
            <br />
            Это действие нельзя отменить.
          </p>
          <div className="confirm-buttons">
            <motion.button
              className="btn btn-delete"
              onClick={onConfirm}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Удалить
            </motion.button>
            <motion.button
              className="btn btn-cancel"
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Отмена
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default DeleteConfirmModal;