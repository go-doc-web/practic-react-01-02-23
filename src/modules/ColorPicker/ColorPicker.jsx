import { useState } from 'react';

import styles from './ColorPicker.module.css';

const ColorPicker = ({ options }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const setActive = index => {
    return activeIndex === index
      ? `${styles.ColorPicker__options} ${styles.active}`
      : styles.ColorPicker__options;
  };

  const { label } = options[activeIndex];

  const elementsButton = options.map(({ color }, index) => (
    <button
      onClick={() => setActiveIndex(index)}
      type="button"
      className={setActive(index)}
      style={{ backgroundColor: color }}
    ></button>
  ));

  return (
    <div className={styles.ColorPicker}>
      <h2 className={styles.ColorPicer}>Color Picker</h2>
      <p>Color:{label}</p>

      <div>{elementsButton}</div>
    </div>
  );
};
export default ColorPicker;
