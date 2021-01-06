import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
    return (
        <div>
            <div className="card-container">
                {
                    contacts.map(function (contact) {
                        return (
                            <Card
                                key={contact.id}
                                name={contact.name}
                                imgURL={contact.imgURL}
                                tel={contact.phone}
                                email={contact.email}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
};
  
export default App;
