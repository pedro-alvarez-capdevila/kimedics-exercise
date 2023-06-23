import { makeAutoObservable } from "mobx";
import Practice from "../../entities/practice";
import { practicesItems } from "../../screens/Practices/practicesItems";
import SearchService from "../../services/practicesService";

export default class PracticesPresenter {
  private searchService: SearchService
  searchQuery: string
  practices: Practice[] = []

  constructor({searchService}: {searchService: SearchService}) {
    this.searchQuery = ""
    this.searchService = searchService
    this.changeSearchQuery.bind( this )

    makeAutoObservable( this );
  }

  async fetchPractices(){
    const response = await this.searchService.fetchAll()
    const practices = response.map((practice) => Practice.fromJSON(practice))
    this.setPractices(practices)
  }

  setPractices(practices: Practice[]){
    this.practices = practices
  }

  get practiceItemsToShow(){
    return this.practices.filter((practice) => this.isIncludeInSearchQuery(practice.name))
  }

  changeSearchQuery(value: string){
    this.searchQuery = value;
  }

  private isIncludeInSearchQuery(name: string){
    return name.toLowerCase().includes(this.searchQuery.toLowerCase())
  }
}
