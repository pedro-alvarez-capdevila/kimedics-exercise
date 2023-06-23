import { makeAutoObservable } from "mobx";

export interface PracticeAttributes{
	id: number,
	name: string,
  totalBeds: number
}

export interface PracticeSerialization{
	id: number,
	name: string,
  totalBeds: number
}

export default class Practice {
  id: number
	name: string
	totalBeds: number

  constructor( {
    id, name, totalBeds
  }: PracticeAttributes ) {
    this.id = id;
    this.name = name;
    this.totalBeds = totalBeds;

    makeAutoObservable(this);
  }

  static fromJSON( {id, name, totalBeds}: PracticeSerialization ) {
    return new Practice( {id, name, totalBeds} );
  }
}
