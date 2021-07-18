import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard'

function App() {
  return (
    <section class="blog-items team-cards">
        <div class="inner-wrapper">
          <div class="blog-container">
            <ProfileCard />
            <ProfileCard />
            <ProfileCard />
          </div>
        </div>
    </section>
  );
}

export default App;
