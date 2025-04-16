import { Provider } from 'react-redux';
import { store } from './app/store';
import Counter from './features/counter/Counter';
import TodoList from './features/todos/TodoList';
import ThemeToggler from './features/theme/ThemeToggler';
import ShoppingCart from './features/cart/ShoppingCart';
import Auth from './features/auth/Auth';
import './App.css';
import { useSelector } from 'react-redux';

// ThemeWrapper component to apply theme
function ThemeWrapper({ children }) {
  const themeMode = useSelector(state => state.theme.mode);
  
  return (
    <div className={`app-container ${themeMode}-theme`}>
      {children}
    </div>
  );
}

// Main App component
function App() {
  return (
    <Provider store={store}>
      <AppContent />
    </Provider>
  );
}

// AppContent separated to use Redux hooks inside
function AppContent() {
  return (
    <ThemeWrapper>
      <h1>Redux Examples</h1>
      <div className="features-container">
        <Counter />
        <TodoList />
        <ThemeToggler />
        <ShoppingCart />
        <Auth />
      </div>
    </ThemeWrapper>
  );
}

export default App;
