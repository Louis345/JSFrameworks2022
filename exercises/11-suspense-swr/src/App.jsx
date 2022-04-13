// You will need to import two additional things here
import CatFact from "./CatFact";
import "./App.css";
import { Suspense } from "react";
import ErrorBoundary from "./ErrorBoundary"

function App() {
  return (
      <ErrorBoundary 
        fallback = {
          <div>We're sorry, but an unexpected error occurred</div>
        }
      >
        <img
          src="https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=620&quality=45&auto=format&fit=max&dpr=2&s=6fe0ebd22151102996062fa1287f824c"
          alt="Cat"
          width={500}
          height={300}
        />
        <Suspense fallback={<p>Loading...</p>}>
          <CatFact /> 
        </Suspense>
      </ErrorBoundary>
  );
}

export default App;