import restaurant from "./../../img/restaurant.jpg"
//Notes
// component
// - building block
// - little piece of the UI that we're going to use to describe one part of our application
// - we create a component by creating a function, returns JSX

// a function that returns a UI
function Header(props) {
  //console.log(props)  // empty {}
  return(
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return(
    <section>
      <p>We serve the most {props.adj} food around.</p>
      <img
        src={restaurant}
        height = {200}
        alt="napkin and silverware at the table"
      />
      <ul style={{textAlign: "Left"}}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

// LIST
const dishes = [
  "Pork",
  "Salmon",
  "Shrimp",
  "Beef"
]

// KEY-LIST
const dishObjects = dishes.map((dish, i) => ({id: i, title: dish}));

export function Components() {
  return (
    <div className="App">
      <Header name="Gula"/>
      <Main adj="amazing" dishes={dishObjects}/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

//Notes
// COMPONENTS
// - building block
// - little piece of the UI that we're going to use to describe one part of our application
// - we create a component by creating a function, returns JSX
// ' /> ' - self closing
//
// PROPS (COMPONENTS PROPERTIES)
// - every components has access to this object called props
// - a little backpack that you can place information in for every single component
//
// IMAGES
// - import:import restaurant from "./img/restaurant.jpg"
// - use: <img src={restaurant}/>
// - add alt (for screen reader or other assistive technology)
//   :
