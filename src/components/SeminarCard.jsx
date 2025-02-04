import React from 'react';
import { motion } from 'framer-motion';
import { IconEdit, IconTrash, IconCalendar, IconClock } from '@tabler/icons-react';

const SeminarCard = ({ seminar, onEdit, onDelete }) => {
  const handleDelete = () => {
    onDelete(seminar.id);
  };

  return (
    <motion.div
      className="seminar-card"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <motion.img
        src={seminar.photo}
        alt={seminar.title}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      />
      <div className="seminar-content">
        <h3>{seminar.title}</h3>
        <p>{seminar.description}</p>
        <div className="seminar-details">
          <span>
            <IconCalendar size={18} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
            {seminar.date}
          </span>
          <span>
            <IconClock size={18} style={{ marginRight: '5px', verticalAlign: 'middle' }} />
            {seminar.time}
          </span>
        </div>
        <div className="seminar-actions">
          <motion.button
            className="btn btn-edit"
            onClick={() => onEdit(seminar)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconEdit size={18} />
            Редактировать
          </motion.button>
          <motion.button
            className="btn btn-delete"
            onClick={handleDelete}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <IconTrash size={18} />
            Удалить
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SeminarCard;