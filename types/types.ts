type ReactEventData = {
  hours: { [key: string]: number } | number[];
};

type CombinedData = {
  [key: string]: {
    date: string;
    hour: number;
    views?: number;
    clicks?: number;
  } & { [event: string]: number | undefined };
} & { [key: string]: any };

type HourData = {
  hours: number[];
};

type DayData = {
  [date: string]: HourData;
};

type GraphData = {
  views: { [date: string]: HourData };
  clicks: { [date: string]: HourData };
  [key: string]: any; // Add index signature
};


type ChartData = {
  name: string;
  views: number;
  clicks: number;
};

type GraphProps = {
  data: GraphData;
};

export { ReactEventData, CombinedData, HourData, DayData, GraphData, ChartData, GraphProps };
