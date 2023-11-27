Personal React Project

1. Fetch Data from a public API and display it as a list using ant design elements: three different
  options: cat facts, dog facts, random facts

  Manage the list of facts in the state -> pass facts as prop
  Reset button to clear list of facts

  Cat facts: https://alexwohlbruck.github.io/cat-facts/
  Dog facts: https://dukengn.github.io/Dog-facts-API/
  Number Facts: http://numbersapi.com/#42
  Random Facts: GET /api/v2/facts/random https://uselessfacts.jsph.pl
  Random Facts2 : https://api-ninjas.com/api/facts

  Change logo of buttons to images

2. Create a form to submit a new data entry and append it to the current list
  Add that pressign enter also submits
  Add error message if less than 10 characters

3. Use React Router to render the data entries individually as a new page
  Only show truncated data

4. Create a back button to return to the previous page


LOGIC

1. App.js
- useState hook to manage state of facts-> array holds submitted facts
- handle funcrions -> callback fcts.
  - addfact called when new fact is submitted -> add new fact tofacts with spread operatos
  - resetfacts called when reset button is clicked -> empry array
- Router -> whole app wrapped in Rputer from react-router
  - home component-> receives facts and callback fct as props -> renders cjild components
  -  factpage components -> /fact/index -> renders factpage cmponenet

2. FactList.js
- render list tgrough mapping -> map through data and render ItemComponent dor each fact
- each item is  alonk to corresponding factpage using Link component

3. Api.js
- fetch from externam aPI -> use ondatafetched prop to add fethced facts to facts state

4. FactrPage.js
- use useParams hook to retreive index param from url -> convert ro number to identifity the fact
- render the facrt + back button to navigate

5. STATE FLOW:
- add facts -> handleaddfact + store them in facts state
- view facts -> factlist component displays list with link to individual pages -> tied to index
- factpage -> retireves facts state based on idex
- resetting

-> clear separation of concerns -> modular
-> each component has indiviual responsibility
-> state managed centrally in app.js
-> facts is passed down as a prop to children components ( data={facts})
-> callback fcts defined in app.js and passed as props -> onReset ={ handleReset()}
-> component tree grows -> redux
