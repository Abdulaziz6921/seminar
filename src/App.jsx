import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { api } from './api';
import SeminarCard from './components/SeminarCard';
import EditModal from './components/EditModal';
import DeleteConfirmModal from './components/DeleteConfirmModal';
import './App.css';

function App() {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingSeminar, setEditingSeminar] = useState(null);
  const [deletingSeminar, setDeletingSeminar] = useState(null);

  useEffect(() => {
    fetchSeminars();
  }, []);

  const fetchSeminars = async () => {
    try {
      const response = await api.getSeminars();
      setSeminars(response.data);
    } catch (err) {
      setError('Ошибка при загрузке семинаров');
      console.error('Error fetching seminars:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    const seminar = seminars.find(s => s.id === id);
    setDeletingSeminar(seminar);
  };

  const confirmDelete = async () => {
    try {
      await api.deleteSeminar(deletingSeminar.id);
      setSeminars(seminars.filter(seminar => seminar.id !== deletingSeminar.id));
      setDeletingSeminar(null);
    } catch (err) {
      setError('Ошибка при удалении семинара');
      console.error('Error deleting seminar:', err);
    }
  };

  const handleEdit = (seminar) => {
    setEditingSeminar(seminar);
  };

  const handleSave = async (updatedSeminar) => {
    try {
      await api.updateSeminar(updatedSeminar.id, updatedSeminar);
      setSeminars(seminars.map(s => 
        s.id === updatedSeminar.id ? updatedSeminar : s
      ));
      setEditingSeminar(null);
    } catch (err) {
      setError('Ошибка при обновлении семинара');
      console.error('Error updating seminar:', err);
    }
  };

  if (loading) {
    return (
      <div className="app">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2>Загрузка...</h2>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h2>Ошибка: {error}</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="app">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Семинары Kosmoteros
      </motion.h1>
      
      <motion.div
        className="seminars-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AnimatePresence>
          {seminars.map(seminar => (
            <SeminarCard
              key={seminar.id}
              seminar={seminar}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {editingSeminar && (
        <EditModal
          seminar={editingSeminar}
          onClose={() => setEditingSeminar(null)}
          onSave={handleSave}
        />
      )}

      <DeleteConfirmModal
        isOpen={!!deletingSeminar}
        onClose={() => setDeletingSeminar(null)}
        onConfirm={confirmDelete}
        seminarTitle={deletingSeminar?.title}
      />
    </div>
  );
}

export default App;