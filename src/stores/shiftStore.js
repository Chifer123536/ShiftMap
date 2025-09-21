// src/stores/shiftStore.js
import { makeAutoObservable, runInAction } from 'mobx';
import { fetchShiftsByCoords } from '../api'; // пока API не подключено

class ShiftStore {
  shifts = []; // список всех смен
  selectedShift = null; // выбранная смена
  loading = false; // индикатор загрузки
  error = null; // ошибка при запросе

  constructor() {
    makeAutoObservable(this);
  }

  // Задаем список смен
  setShifts(shifts) {
    this.shifts = shifts;
  }

  // Выбираем смену для экрана деталей
  setSelectedShift(shift) {
    this.selectedShift = shift;
  }

  // Индикатор загрузки
  setLoading(value) {
    this.loading = value;
  }

  // Ошибка
  setError(error) {
    this.error = error;
  }

  // Асинхронный метод загрузки смен по координатам
  async loadShifts(lat, lng) {
    this.setLoading(true);
    this.setError(null);
    try {
      const data = await fetchShiftsByCoords(lat, lng);
      runInAction(() => {
        this.shifts = Array.isArray(data) ? data : data.items || []; // данные могут приходить массивом или в data.items
      });
    } catch (e) {
      runInAction(() => {
        this.setError(e.message || 'Nerwork error');
      });
    } finally {
      runInAction(() => {
        this.setLoading(false);
      });
    }
  }
}

// Экспортируем единственный экземпляр
const shiftStore = new ShiftStore();
export default shiftStore;
