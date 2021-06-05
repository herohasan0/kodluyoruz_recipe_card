import './App.css';
import Card from './components/Card/Card';
import food from './assets/food.jpg'; // Tell webpack this JS file uses this image
import { Recipes } from '../src/Api/Recipes';

function App() {
  const isLiked = false;
  const recipeItems = Recipes;

  return (
    <div className="App">
      <header className="App-header">
        {recipeItems.map((item, index) => (
          <Card
            key={index}
            Author={item.recipeAuthor}
            Title={item.title}
            Date={item.date}
            Img={item.img}
            Description={item.description}
            Likecount={item.likeCount}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
