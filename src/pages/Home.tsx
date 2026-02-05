import { IonContent, IonPage, IonButton, IonText } from '@ionic/react';
import './Home.css'; // Importing custom styles
import React from 'react';

const Home: React.FC = () => {
  return (
    <IonPage className="splash-page">
      <IonContent fullscreen className="ion-padding">
        
        {/* Background Decorative Blob */}
        <div className="background-blob"></div>

        <div className="splash-container">
          
          {/* Logo */}
          <div className="logo-container">
            <h1 className="slogan">Cook Easy</h1>
          </div>

          {/* Featured Image */}
          <div className="featured-image-container">
            <img src="/assets/burger.png" alt="Delicious Pizza" className="featured-image" />
          </div>

          {/* Text Content */}
          <div className="text-container">
            <h1 className="slogan">Enjoy our beautiful delicacies</h1>
            <p className="sub-slogan">Relax, FastFood has got you covered!</p>
          </div>

          {/* CTA Button */}
          <IonButton expand="block" className="get-started-btn" routerLink="/menu" routerDirection="forward">
            GET STARTED
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;