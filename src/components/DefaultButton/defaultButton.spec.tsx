import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { DefaultButton } from './index';
import { PlayCircleIcon } from 'lucide-react';

describe('DefaultButton Component (Unit)', () => {
  it('should render with the default "green" className when no color is passed', () => {
    render(
      <DefaultButton icon={PlayCircleIcon} arialLabel='Play pomodoro button' />,
    );

    const button = screen.getByRole('button', { name: 'Play pomodoro button' });
    expect(button.className).toMatch('green');
  });

  it('should render with the "red" className when passed', () => {
    render(
      <DefaultButton
        icon={PlayCircleIcon}
        color='red'
        arialLabel='stop button'
      />,
    );

    const button = screen.getByRole('button', { name: 'stop button' });
    expect(button.className).toMatch('red');
  });

  it('should forward native button props correctly (e.g. onClick)', () => {
    const handleClick = vi.fn();

    render(
      <DefaultButton
        icon={PlayCircleIcon}
        arialLabel='play button'
        onClick={handleClick}
      />,
    );

    const button = screen.getByRole('button', { name: 'play button' });

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
