import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

class App extends React.Component {
    render() {
        return (
            <div class="layout">
                <Header />
                <main>
                    <div className="notes">
                        {notes.map((note, i) => (
                            <Note 
                                key={i} 
                                title={note.title} 
                                content={note.content} />
                        ))}
                    </div>
                </main>
                <Footer />
            </div>
          );
      }
  
}

export default App;