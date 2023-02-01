import { useState } from 'react';

import css from './Tabs.module.css';

const Tabs = ({ option }) => {
  const [activeTab, setActiveBtn] = useState(0);

  const setActiveStyle = index => {
    return activeTab === index ? `${css.Button} ${css.active}` : css.Button;
  };

  const elButton = option.map((item, index) => {
    return (
      <button
        className={setActiveStyle(index)}
        key={item}
        onClick={() => setActiveBtn(index)}
      >
        {item}
      </button>
    );
  });
  return (
    <div className={css.wrapper}>
      {elButton}
      <div className={css.block}>
        <p>text</p>
      </div>
    </div>
  );
};

export default Tabs;
