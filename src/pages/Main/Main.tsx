import { Search } from "../../components/Search/Search";
import { Rubrics } from "./components/Rubrics/Rubrics";
import { VIPads } from "./components/VIPAds/VIPAds";
import { CompanyPrompt } from "./components/CompanyPrompt/CompanyPrompt";
import { Partners } from "./components/Partners/Partners";
 
export function Main() { 
   return (
       <div> 
         <Search />
         <Rubrics />
         <VIPads />
         <CompanyPrompt />
         <Partners />
       </div>
   );
}