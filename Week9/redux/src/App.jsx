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
    <div className={`min-h-screen transition-colors duration-300 ${
      themeMode === 'light' 
        ? 'bg-gray-100 text-gray-900' 
        : 'bg-gray-900 text-gray-100'
    }`}>
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
  const themeMode = useSelector(state => state.theme.mode);
  
  return (
    <ThemeWrapper>
      <div className="max-w-6xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <h1 className={`text-4xl font-bold text-center mb-10 ${
          themeMode === 'light' ? 'text-indigo-700' : 'text-indigo-400'
        }`}>
          Redux Examples
        </h1>
        <div className="space-y-8">
          <Counter />
          <TodoList />
          <ThemeToggler />
          <ShoppingCart />
          <Auth />
        </div>
      </div>
    </ThemeWrapper>
  );
}

export default App;
