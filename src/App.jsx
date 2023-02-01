// import Counter from 'modules/Counter';
// import Search from 'modules/Search';
// import ColorPicker from 'modules/ColorPicker';
import Tabs from './modules/Tabs';

import tabsOption from 'data/tabsOption';

// const colorPickerOptions = [
//   { label: 'red', color: '#F44336' },
//   { label: 'green', color: '#4CAF50' },
//   { label: 'blue', color: '#2196F3' },
//   { label: 'grey', color: '#607D8B' },
//   { label: 'pink', color: '#E91E63' },
//   { label: 'indigo', color: '#3F51B5' },
// ];

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 22,
        color: '#010101',
      }}
    >
      {/* <Counter /> */}
      {/* <Search /> */}
      {/* <ColorPicker options={colorPickerOptions} /> */}
      <Tabs option={tabsOption} />
    </div>
  );
};
