import React, { FC } from 'react';
import { transformDataToHTML } from '../transformDataToHTML';
import { ReactEventData } from '../../types/types';
// import '.../styles/styles.scss';

type TableProps = {
  data: {
    [key: string]: {
      [key: string]: ReactEventData;
    };
  };
};

export const Table: FC<TableProps> = ({ data }) => {
  const html = transformDataToHTML(data);

  return (
    <div>
      <h2>Table Component</h2>
      <table className="table" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};
