import React from 'react';
import './App.css';
import NavBar from './Navbar';
import ImageSlider from './Imageslider';
import { useState } from 'react';
import TabsContainer from './TabsContainer';

function App() {

  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    '/images/1_notion.png',
    '/images/2_notion.png',
    '/images/3_notion.png',
    '/images/4_notion.png',
  ];

  const features = ['AI', 'Wikis', 'Projects', 'Docs'];

  const selectFeature = (index) => {
    setActiveIndex(index);
  };

  const tabs = [
    { label: 'AI', content: <img src='/images/1_notion.png' alt='AI' /> },
    {label: 'Wikis', content: <img src='/images/2_notion.png' alt='Wikis' />},
    {label: 'Projects', content: <img src='/images/3_notion.png' alt='Projects' />},
    {label: 'Docs', content: <img src='/images/4_notion.png' alt='Docs' />}
  ]

  return (
    <div className="App">
      <header className="App-header">
       <NavBar></NavBar>
      </header>
      <main className="App-main">
        <section className="App-hero">
          <h1>Write, plan, share. <br></br> With AI at your side.</h1>
          <p>Notion is the connected workspace where better, faster work happens.</p>
          <button>Get Notion free <i class="fas fa-arrow-right"></i> </button>
        </section>
        <img src="/images/hey_notion.png" width={700}></img>
        <div className="feature-cards">
          {features.map((feature, index) => (
            <div 
              key={feature} 
              className={`feature-card ${index === activeIndex ? 'active' : ''}`} 
              onClick={() => selectFeature(index)}
            >
              <h2>{feature}</h2>
              <p>Description of {feature}</p>
            </div>
          ))}
        </div>
        <br></br>
        <ImageSlider 
          images={images} 
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex}
        />
        <br></br>
        <br></br>
        <div className="centered-container">
        <TabsContainer tabs={features} images={images} />
        </div>
      </main>
      <footer className="App-footer">
        <p>By Vempati Siva Koti Reddy</p>
      </footer>
    </div>
  );
}

export default App;
