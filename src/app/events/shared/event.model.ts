import { ISession, ILocation } from '.';

export interface IEvent {
  id: number;
  name: string;
  date: Date;
  time: string;
  price: number;
  imageUrl: string;
  location?: ILocation;
  onlineUrl?: string;
  sessions: ISession[];
}
