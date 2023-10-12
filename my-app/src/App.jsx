import Header from './components/Header';

const App = () => {
  const title = 'My site from React !!!';
  const isDark = true;

  return (
    <div className="App">

      <Header />
      
      <main className="main">
        <h1 
          className={ isDark ? 'main-title main-title_dark' : 'main-title'}
        >
          { title }
        </h1>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default App;