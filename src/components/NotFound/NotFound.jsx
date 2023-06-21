import { CiWarning } from 'react-icons/ci';
import css from './NotFound.module.css';

export const NotFound = () => {
  return (
    <div className={css.wrapper}>
      <CiWarning className={css.icon} size={75} />
      <p className={css.description}>Page not found</p>
    </div>
  );
};
