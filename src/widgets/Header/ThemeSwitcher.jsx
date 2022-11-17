import { Button } from '@app/shared';
import { ThemeSwitcherStyled } from '@app/widgets/Header/styled';

import { useTheme } from './useTheme';
import { THEME } from './constants';

export const ThemeSwitcher = () => {
  const [theme, handleTheme] = useTheme();

  return (
    <ThemeSwitcherStyled>
      <div>{theme === THEME.LIGHT ? 'icon1' : 'icon2'}</div>
      <Button variant="alert" onClick={handleTheme}>
        Theme: {theme}
      </Button>
    </ThemeSwitcherStyled>
  );
};
