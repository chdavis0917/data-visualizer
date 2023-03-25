import React, { FC } from 'react';
import  {transformDataToHTML} from './transformDataToHTML';
import { ReactEventData } from '../types/types';

const data = {
    "views": {
      "2023-03-10": {
        "hours": [ 1, 4, 3, 2, 5 ]
      },
      "2023-03-09": {
        "hours": [ 5, 3, 5, 4, 3, 5, 6, 9, 5, 1, 2, 8, 4, 2, 7, 5, 3, 4, 5, 3, 6, 5, 4, 4 ]
      }
    },
    "clicks": {
      "2023-03-10": {
        "hours": [ 7, 3, 5, 5, 7 ]
      },
      "2023-03-09": {
        "hours": [ 5, 3, 6, 2, 4, 6, 5, 9, 7, 4, 5, 8, 6, 4, 2, 6, 5, 3, 4, 3, 7, 5, 2, 6 ]
      }
    }
  }



const App: FC = () => {
  const html = transformDataToHTML(data);

  return (
    <div dangerouslySetInnerHTML={{ __html: html }} />
  );
};

export default App;