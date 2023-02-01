import { useState } from 'react';

import css from './Search.module.css';

const Search = () => {
  const [username, setUsername] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const handleChange = ({ target }) => {
    const { name, value } = target;
    switch (name) {
      case 'name':
        setUsername(value);
        break;
      case 'password':
        setUserPassword(value);
        break;
      default:
        return;
    }
  };

  return (
    <form className={css.form}>
      <div className={css.wrapper_input}>
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={username}
          id="name"
          required
        />
      </div>
      <div className={css.wrapper_input}>
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          type="password"
          name="password"
          value={userPassword}
          id="password"
          required
        />
      </div>
      <button type="submit">add</button>
    </form>
  );
};

export default Search;
