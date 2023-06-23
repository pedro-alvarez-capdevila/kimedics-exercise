import { useState } from 'react';
import SearchService from '../../services/practicesService';
import PracticesPresenter from './PracticesPresenter';


const usePracticesPresenter = () => {
  const createPresenter = () => {
    const searchService = new SearchService();

    return new PracticesPresenter( {
      searchService
    } );
  };

  const [ presenterInstance ] = useState( createPresenter );
  return presenterInstance;
};

export default usePracticesPresenter;
