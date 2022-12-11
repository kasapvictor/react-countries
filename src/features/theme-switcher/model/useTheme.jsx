import { useState, useEffect } from 'react';

import { MODE } from '../constants';

export const useTheme = () => {
  const [theme, setTheme] = useState(MODE.LIGHT);

  const handleTheme = () => {
    setTheme(theme === MODE.LIGHT ? MODE.DARK : MODE.LIGHT);
  };

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return [theme, handleTheme];
};
