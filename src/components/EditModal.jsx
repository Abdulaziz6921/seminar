import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IconX } from '@tabler/icons-react';

const EditModal = ({ seminar, onClose, onSave }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    if (seminar) {
      setFormData({
        title: seminar.title,
        description: seminar.description,
        date: seminar.date,
        time: seminar.time,
      });
    }
  }, [seminar]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...seminar, ...formData });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (!seminar) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
        >
          <motion.button
            className="close-button"
            onClick={onClose}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            <IconX size={24} />
          </motion.button>

          <h2>Редактировать семинар</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Название:</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Описание:</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
              />
            </div>
            <div className="form-group">
              <label>Дата:</label>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Время:</label>
              <input
                type="text"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="modal-buttons">
              <motion.button
                type="submit"
                className="btn-save"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Сохранить
              </motion.button>
              <motion.button
                type="button"
                className="btn-cancel"
                onClick={onClose}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Отмена
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EditModal;