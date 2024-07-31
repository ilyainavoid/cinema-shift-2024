import type { FC } from 'react';
import { useEffect, useState } from 'react';
import { halls } from '@shared/consts/halls.ts';
import { getTabInfo } from '@shared/utils/helpers/getDayOfWeek.ts';
import { getHallName } from '@shared/utils/helpers/getHallName.ts';
import { getHallTimeslots } from '@shared/utils/helpers/getHallTimeslots.ts';
import Button from '@ui/Button/Button.tsx';
import Text from '@ui/Text/Text.tsx';
import Title from '@ui/Title/Title.tsx';

import Screen from './Screen.tsx';

import styles from './ScheduleAndPlaces.module.scss';

import type { HallTimeslots, Schedule, ScheduleSeance } from '@/@types/api';

interface ScheduleProps {
  schedules: Schedule[];
}

interface PickedPlace {
  row: number;
  col: number;
  price: number;
  type: 'COMFORT' | 'BLOCKED' | 'ECONOM';
}

const ScheduleAndPlaces: FC<ScheduleProps> = ({ schedules }) => {
  const [pickedSlot, setPickedSlot] = useState(0);
  const [hallTimeslots, setHallTimeslots] = useState<HallTimeslots>(
    getHallTimeslots(schedules[0].seances)
  );
  const [pickedSeance, setPickedSeance] = useState<ScheduleSeance>(schedules[0].seances[0]);
  useEffect(() => {
    setHallTimeslots(getHallTimeslots(schedules[pickedSlot].seances));
    console.log(hallTimeslots);
  }, [pickedSlot]);
  const [pickedPlaces, setPickedPlaces] = useState<PickedPlace[]>([]);

  const addNewPlace = (newPlace: PickedPlace) => {
    setPickedPlaces((prevPlaces) => [...prevPlaces, newPlace]);
  };

  const handleClick = (
    row: number,
    col: number,
    price: number,
    type: 'ECONOM' | 'BLOCKED' | 'COMFORT'
  ) => {
    const existingIndex = pickedPlaces.findIndex((place) => place.row === row && place.col === col);
    if (existingIndex !== -1) {
      const updatedPlaces = [...pickedPlaces];
      updatedPlaces.splice(existingIndex, 1);
      setPickedPlaces(updatedPlaces);
    } else {
      addNewPlace({ row, col, price, type });
    }
  };

  useEffect(() => {}, [pickedPlaces]);

  useEffect(() => {
    setPickedPlaces([]);
    setPickedSeance(schedules[pickedSlot].seances[0]);
  }, [pickedSlot]);

  useEffect(() => {
    setPickedPlaces([]);
  }, [pickedSeance]);

  return (
    <div className={styles.container}>
      <div className={styles.schedules}>
        <Title as='h2' format='title-bold' className={styles.heading}>
          Расписание
        </Title>
        <div className={styles.dayTabs}>
          {schedules &&
            schedules.map((schedule, index) => (
              <>
                {index !== 0 && <span className={styles.separator}> | </span>}
                <Button
                  appearance='transparent'
                  key={index}
                  onClick={() => setPickedSlot(index)}
                  className={pickedSlot === index ? styles.activeTab : styles.passiveTab}
                >
                  <Text format='text-regular'>{getTabInfo(schedule.date)}</Text>
                </Button>
              </>
            ))}
        </div>
        <div className={styles.hallTimePicker}>
          {halls.map((hall, index) => (
            <div key={index}>
              <Text format='text-regular' className={styles.hallNameLabel}>
                {hall.name}
              </Text>
              <div className={styles.hallOptions}>
                {hallTimeslots[hall.key] &&
                  hallTimeslots[hall.key].map((seance, seanceIndex) => (
                    <Button
                      key={seanceIndex}
                      appearance='transparent'
                      className={
                        pickedSeance === seance
                          ? styles.hallOptionButtonPicked
                          : styles.hallOptionButton
                      }
                      onClick={() => setPickedSeance(seance)}
                    >
                      {seance.time}
                    </Button>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className={styles.ticketsPicker}>
          <Title as='h2' format='title-bold' className={styles.heading}>
            Выбор места
          </Title>
          <div className={styles.ticketsPickerContent}>
            <div className={styles.picker}>
              <Screen />
              <Text format='text-regular' className={styles.line}>
                Ряд
              </Text>
              {pickedSeance.hall.places.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.pickerRow}>
                  <div className={styles.rowLabel}>
                    <Text format='text-regular'>{rowIndex + 1}</Text>
                  </div>
                  <div className={styles.row}>
                    {row.map((place, colIndex) => (
                      <Button
                        appearance='primary'
                        key={colIndex}
                        className={`
                          ${place.type === 'BLOCKED' ? styles.blockedPlace : styles.place}
                          ${pickedPlaces.some((p) => p.row === rowIndex && p.col === colIndex) ? styles.selectedPlace : styles.place}
                        `}
                        onClick={() => handleClick(rowIndex, colIndex, place.price, place.type)}
                        disabled={place.type === 'BLOCKED'}
                      >
                        <Text
                          format='text-regular'
                          className={
                            pickedPlaces.some((p) => p.row === rowIndex && p.col === colIndex)
                              ? ''
                              : styles.placePriceHidden
                          }
                        >
                          {place.price}
                        </Text>
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.info}>
              <div>
                <Text format='text-regular' className={styles.checkoutLabel}>
                  Зал
                </Text>
                <Text format='text-regular'>{getHallName(pickedSeance.hall.name)}</Text>
              </div>
              <div>
                <Text format='text-regular' className={styles.checkoutLabel}>
                  Дата и время
                </Text>
                <Text format='text-regular'>{schedules[pickedSlot].date}</Text>
              </div>
              <div>
                <Text format='text-regular' className={styles.checkoutLabel}>
                  Места
                </Text>
                {pickedPlaces &&
                  pickedPlaces.map((place) => (
                    <Text format='text-regular'>
                      {place.row} ряд, {place.col} место
                    </Text>
                  ))}
              </div>
              <Text format='text-bold' className={styles.sum}>
                {pickedPlaces.reduce(
                  (accumulator, currentValue) => accumulator + currentValue.price,
                  0
                )}{' '}
                рублей
              </Text>
              <Button appearance='primary'>Купить</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleAndPlaces;
