import { IonContent, IonPage, IonButton, IonHeader, IonToolbar, IonTitle, IonInput, IonItem, IonNote, IonLoading } from '@ionic/react';
import './CreateList.css';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchIngredientsFromUrl, Ingredient } from '../services/recipeService';

const CreateList: React.FC = () => {
    const history = useHistory();
    const [recipeUrl, setRecipeUrl] = useState('');
    const [loading, setLoading] = useState(false);

    const handleGenerateList = async () => {
        if (!recipeUrl) return;

        setLoading(true);
        try {
            // Call the service to parse the URL
            const fetchedIngredients = await fetchIngredientsFromUrl(recipeUrl);

            // Navigate to the display page and pass the data
            history.push({
                pathname: '/list-display',
                state: {
                    ingredients: fetchedIngredients,
                    recipeName: 'Parsed Recipe' // In a real app, you might parse the title too
                }
            });

        } catch (error) {
            console.error(error);
            // Here you could add an IonAlert to show error to user
        } finally {
            setLoading(false);
        }
    };

    return (
        <IonPage className="create-list-page">
            <IonHeader className="ion-no-border">
                <IonToolbar className="create-list-toolbar">
                    <IonTitle>New Grocery List</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding create-bg">
                {/* Loading overlay while API fetches data */}
                <IonLoading isOpen={loading} message={'Parsing recipe...'} />

                <div className="create-list-container">
                    <h2 className="instructions">Create List</h2>
                    <div style={{
                        backgroundColor: '#39393ba9', // 50% white transparency
                        padding: '20px',
                        borderRadius: '10px',
                        width: '100%'
                    }}>
                        <h3 style={{
                        color:' #b0b0b0',fontSize:'1.1rem',fontWeight:'bold'}}>Recipe Link</h3>
                        <IonItem lines="none" className="input-item">
                            <IonInput
                                placeholder="https://example.com/best-pizza"
                                value={recipeUrl}
                                onIonChange={e => setRecipeUrl(e.detail.value!)}
                                className="custom-input"
                            />
                        </IonItem>

                        <IonNote className="hint-text">Supported sites: AllRecipes, FoodNetwork, etc.</IonNote>
                    </div>



                    <div style={{
                        backgroundColor: '#39393ba9', // 50% white transparency
                        padding: '20px',
                        borderRadius: '10px',
                        width: '100%',
                        marginTop: '20px'
                    }}>
                        <IonButton
                            expand="block"
                            className="generate-btn"
                            onClick={handleGenerateList}
                            disabled={loading || !recipeUrl}
                        >
                            {loading ? 'GENERATING...' : 'GENERATE LIST'}
                        </IonButton>
                    </div>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default CreateList;