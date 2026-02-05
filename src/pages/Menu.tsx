import { IonContent, IonPage, IonButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import './Menu.css';
import React from 'react';

const Menu: React.FC = () => {
  return (
    <IonPage className="home-page">
      <IonHeader className="ion-no-border">
        <IonToolbar className="home-toolbar">
          <IonButton className="menu-title" routerLink="/home">Cook Easy</IonButton>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <div className="home-container">
          <h2 className="welcome-text">What would you like to do?</h2>

          <div className="button-group">
            <IonButton expand="block" color="primary" routerLink="/ingredients" className="menu-btn">
              Find a Recipe
            </IonButton>
            
            <IonButton expand="block" color="primary" fill="outline" className="menu-btn outline-btn" routerLink="/createList" routerDirection="forward">
              Generate Grocery List
            </IonButton>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Menu;