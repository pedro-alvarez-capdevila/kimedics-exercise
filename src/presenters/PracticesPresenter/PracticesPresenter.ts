import { makeAutoObservable } from "mobx";
import { practicesItems } from "../../screens/Practices/practicesItems";

export default class PracticesPresenter {
  searchQuery: string

  constructor() {
    this.searchQuery = ""
    this.changeSearchQuery.bind( this )

    makeAutoObservable( this );
  }

  get practiceItemsToShow(){
    return practicesItems.filter((practice) => this.isIncludeInSearchQuery(practice.name))
  }

  changeSearchQuery(value: string){
    this.searchQuery = value;
  }

  private isIncludeInSearchQuery(name: string){
    return name.toLowerCase().includes(this.searchQuery.toLowerCase())
  }
}
