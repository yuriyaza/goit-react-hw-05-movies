import { FallingLines } from 'react-loader-spinner';
import css from './Spinner.module.css';

export const Spinner = () => {
  return (
    <div className={css.backdrop}>
      <div className={css.spinner}>
        <FallingLines width='100' color='orange' ariaLabel='spinner' />
      </div>
    </div>
  );
};
