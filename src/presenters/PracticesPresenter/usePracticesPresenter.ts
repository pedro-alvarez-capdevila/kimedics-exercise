import { useState } from 'react';
import PracticesPresenter from './PracticesPresenter';


const usePracticesPresenter = () => {
  const createPresenter = () => new PracticesPresenter();

  const [ presenterInstance ] = useState( createPresenter );
  return presenterInstance;
};

export default usePracticesPresenter;
