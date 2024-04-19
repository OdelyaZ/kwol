import './App.css'
import CarCard from "./components/CarCard/CarCard.tsx";

const App: React.FC = () => {
  return (
      <div className="flex flex-wrap justify-center">
        <CarCard
            title="BMW X5"
            imageUrl="https://via.placeholder.com/400x300"
            description="Кроссовер с высоким уровнем комфорта и производительности."
        />
      </div>
  );
};

export default App
