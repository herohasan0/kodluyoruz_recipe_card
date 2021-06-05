import './App.css';
import Card from './components/Card/Card';
import { Recipes } from '../src/Api/Recipes';

function App() {
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
            liked={item.isLiked}
          />
        ))}
      </header>
    </div>
  );
}

export default App;
