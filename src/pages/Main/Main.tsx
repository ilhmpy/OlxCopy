import { Search } from "../../components/Search/Search";
import { Rubrics } from "./components/Rubrics/Rubrics";
import { VIPads } from "./components/VIPAds/VIPAds";

export function Main() {
   return (
       <div> 
         <Search />
         <Rubrics />
         <VIPads />
       </div>
   );
}