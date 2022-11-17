import { IoMoon, IoSunny } from 'react-icons/io5';

import { Button } from '@app/shared';

import { ThemeSwitcherStyled } from './styled';
import { useTheme } from './useTheme';
import { THEME } from './constants';

export const ThemeSwitcher = () => {
  const [theme, handleTheme] = useTheme();

  return (
    <ThemeSwitcherStyled>
      {theme === THEME.LIGHT ? <IoSunny size={24} /> : <IoMoon size={22} />}
      <Button onClick={handleTheme}>Theme: {theme}</Button>
    </ThemeSwitcherStyled>
  );
};
