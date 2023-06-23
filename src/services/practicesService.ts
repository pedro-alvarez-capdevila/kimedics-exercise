import { PracticeSerialization } from "../entities/practice";
import { practicesItems } from "../screens/Practices/practicesItems";

/* 
  I'm mocking the fetch because i'm having a problem a problem and
  it raises a CORS error.
*/

export default class SearchService {
  async fetchAll(): Promise<PracticeSerialization[]> {
    return new Promise((resolve) => {
      setTimeout(()=>{
        return resolve(practicesItems)
      }, 1000)
    })
  }
}
