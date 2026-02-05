import { IonContent, IonPage, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonCheckbox, IonButton, IonIcon } from '@ionic/react';
import { arrowBackOutline } from 'ionicons/icons';
import './ListDisplay.css';
import React, { useState, useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Ingredient } from '../services/recipeService';

// Define the shape of the data passed from the previous page
interface LocationState {
  ingredients: Ingredient[];
  recipeName: string;
}

const ListDisplay: React.FC = () => {
  const history = useHistory();
  const location = useLocation<LocationState>();
  
  const [ingredients, setIngredients] = useState<Ingredient[]>([]);
  const [recipeName, setRecipeName] = useState('Grocery List');

  // Load data from navigation state when component mounts
  useEffect(() => {
    if (location.state && location.state.ingredients) {
      setIngredients(location.state.ingredients);
      setRecipeName(location.state.recipeName || 'Recipe List');
    }
  }, [location.state]);

  const toggleIngredient = (index: number) => {
    // Basic toggle logic - could be expanded to strike-through text
    console.log(`Toggled ingredient at index: ${index}`);
  };

  return (
    <IonPage className="list-display-page">
      <IonHeader className="ion-no-border">
        <IonToolbar className="list-toolbar">
          <IonButton slot="start" fill="clear" color="light" onClick={() => history.goBack()}>
            <IonIcon slot="icon-only" icon={arrowBackOutline} />
          </IonButton>
          <IonTitle>Your Grocery List</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      <IonContent className="ion-padding">
        <div className="list-container">
          <h2 className="list-title">{recipeName}</h2>
          <p className="list-subtitle">Ingredients extracted from recipe</p>
          
          <IonList className="ingredients-list">
            {ingredients.length > 0 ? (
              ingredients.map((item, index) => (
                <IonItem key={index} lines="full" className="ingredient-item">
                  <IonCheckbox slot="start" color="primary" onIonChange={() => toggleIngredient(index)} />
                  <IonLabel className="ingredient-label">
                    <h2>{item.name}</h2>
                    <p>{item.quantity} {item.unit}</p>
                  </IonLabel>
                </IonItem>
              ))
            ) : (
              <IonItem lines="none" className="ion-text-center">
                <IonLabel color="medium">No ingredients found.</IonLabel>
              </IonItem>
            )}
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ListDisplay;