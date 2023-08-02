import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ContactForm from './contactForm';
import img1 from './images/face.jpg';
import img2 from './images/youth.jpg';
import img3 from './images/logo.jpg';
import img4 from './images/hero.jpg';


function App() {
  return (
    <div className="App">
      <header>
      <nav>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#policies">Policies</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>   
<body>
<section id="hero">
        <h1>Rahul Gandhi</h1>
        <h2>Jai Jawan, Jai Kisan</h2>
        <h2>Congress Ka Haath, Aam Aadmi ke Saath</h2>
        <a href="#contact" className="cta-button">Join us</a>
      </section>

      <section id="about">
        <h2>About</h2>
        <p>Rahul Rajiv Gandhi (born 19 June 1970) is an Indian politician and a former member of the Indian Parliament, who represented the constituencies of Amethi, Uttar Pradesh and Wayanad, Kerala in the Lok Sabha. He is a member of the main opposition party, the Indian National Congress and was the party president from December 2017 to July 2019. He is the chairperson of the Indian Youth Congress, the National Students Union of India and a trustee of the Rajiv Gandhi Foundation and Rajiv Gandhi Charitable Trust. On 23 March 2023, he was convicted and sentenced to two years imprisonment by a court in Gujarat for a 2019 speech made against the Prime Minister Narendra Modi on defamation allegations related to his surname; the conviction resulted in his disqualification from the Parliament.

Born in New Delhi, Gandhi spent his early childhood between Delhi and Dehradun and stayed away from the public sphere for much of his childhood and early youth. He attained primary education in New Delhi and Dehradun but was later homeschooled because of security concerns. He began his undergraduate career at St. Stephen's College before moving to Harvard University. Later he transferred to Rollins College in Florida, from which he graduated in 1994 due to security threats following the assassination of his father, the late Prime Minister Rajiv Gandhi. The next year, he obtained his M.Phil. from Cambridge. Post-graduation, he began his professional career with the Monitor Group, a management consulting firm in London. He soon returned to India and established the Mumbai-based technology outsourcing firm, Backops Services Private Ltd.

In 2004, Gandhi announced to enter active politics and successfully contested the general elections held that year from Amethi, a seat that was earlier held by his father; he won again from the constituency in 2009 and 2014. Amidst calls from Congress party veterans for his greater involvement in party politics and national government, he was elected Congress vice-president in 2013, having served as the general secretary previously. He led the Congress' campaign in the 2014 Indian general elections; the party suffered its worst electoral result in its history, winning only 44 seats compared to 206 seats won previously in the 2009 general election. In 2017, he succeeded his mother as Congress party leader and led the party into the 2019 Indian general election. The party won 52 seats, failing to get 10% of the seats needed to claim the post of leader of the opposition. After this poor performance in the election, he resigned as party leader and was succeeded by his mother, Sonia Gandhi.</p>
      </section>

      <section id="policies">
        <h2>Policies</h2>
        <ul>
          <li>National Green Tribunal Act, 2010 - National Green Tribunal was established</li>
          <li>The Whistle Blowers Protection Act, 2011 - To eliminate corruption in bureaucracy and protect those who make complaints against public servants</li>
          <li>Public Procurement Policy for Micro and Small Enterprises (MSEs) Order, 2012 - To promote MSEs by supporting them in marketing</li>
          <li>National Food Security Act, 2013 - To provide food and nutritional security to all</li>
          <li>Nirbhaya Act, 2013 - A stricter law to deal with sex crimes against women</li>
          <li>The Sexual Harassment of Women at Workplace (Prevention, Prohibition and Redressal) Act, 2013 - To provide protection against sexual harassment of women at workplace</li>
          <li>Lokpal and Lokayukta Act, 2013 - To provide for the establishment of Lokpal and Lokayukta to inquire into allegations of corruption against certain public functionaries</li>
          <li>National Mission for Empowerment of Women (NMEW), 2010 -To facilitate coordination of women’s welfare and socio-economic development programmes across ministries</li>
          <li>Land Acquisition Act, 2013 - To regulate land acquisition and lay down procedure for granting compensation, rehabilitation and resettlement to the affected persons</li>
          <li>Companies Act, 2013 - Corporate Social Responsibility (CSR) was made mandatory</li>
        </ul>
      </section>

      <section id="gallery">
        <h2>Gallery</h2>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p><ContactForm /></p>
      </section>

      <footer>
        <p>&copy; 2023 Rahul Gandhi. All rights reserved.</p>
      </footer>
</body>
      
    </div>
  );
}

export default App;
