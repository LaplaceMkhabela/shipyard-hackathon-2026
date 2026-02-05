import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from '@ionic/react';
import { add, closeCircleOutline, restaurantOutline } from 'ionicons/icons';
import './Ingredients.css';

const RecipeGenerator: React.FC = () => {
  const [ingredientInput, setIngredientInput] = useState<string>('');
  const [ingredientsList, setIngredientsList] = useState<string[]>([
    'Milk',
    'Butter',
    'Eggs',
    'Flour',
    'Bread',
  ]);

  const handleAddIngredient = () => {
    if (ingredientInput.trim() !== '') {
      setIngredientsList([...ingredientsList, ingredientInput.trim()]);
      setIngredientInput('');
    }
  };

  const handleRemoveIngredient = (indexToRemove: number) => {
    setIngredientsList(
      ingredientsList.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="bar">
          <IonTitle className="app-title">
            <IonIcon icon={restaurantOutline} style={{marginRight: '8px', verticalAlign: 'middle'}}/>
            CookEasy
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen className="main-content">
        <IonGrid fixed>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" sizeMd="8" sizeLg="6">
              
              <div className="header-section">
                <h1>Ingredients</h1>
                <p>What do you have in your fridge today?</p>
              </div>

              {/* Input Section */}
              <div className="input-wrapper">
                <IonItem lines="none" className="custom-input">
                  <IonInput
                    value={ingredientInput}
                    placeholder="e.g. Spinach"
                    onIonChange={(e) => setIngredientInput(e.detail.value!)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') handleAddIngredient();
                    }}
                  />
                  <IonButton
                    slot="end"
                    shape="round"
                    onClick={handleAddIngredient}
                    className="add-btn"
                  >
                    <IonIcon icon={add} />
                  </IonButton>
                </IonItem>
              </div>

              {/* List Section */}
              <div className="list-card">
                <div className="list-header">
                  <IonLabel>Your Pantry ({ingredientsList.length})</IonLabel>
                </div>
                
                <IonList lines="full">
                  {ingredientsList.length === 0 && (
                     <div className="empty-state">
                        <p>No ingredients added yet.</p>
                     </div>
                  )}
                  {ingredientsList.map((ingredient, index) => (
                    <IonItem key={index} className="ingredient-item">
                      <IonLabel className="ingredient-text">{ingredient}</IonLabel>
                      <IonButton
                        fill="clear"
                        slot="end"
                        color="danger"
                        onClick={() => handleRemoveIngredient(index)}
                      >
                        <IonIcon icon={closeCircleOutline} />
                      </IonButton>
                    </IonItem>
                  ))}
                </IonList>
              </div>

              {/* Action Button */}
              <div className="action-container">
                <IonButton
                  expand="block"
                  size="large"
                  className="generate-btn"
                >
                  Generate Recipe
                </IonButton>
              </div>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default RecipeGenerator;