  export type ReactEventData = {
    hours: { [key: string]: number } | number[];
  };
  
  export type CombinedData = {
    [key: string]: {
      date: string;
      hour: number;
      views?: number;
      clicks?: number;
    } & { [event: string]: number | undefined };
  } & { [key: string]: any };
