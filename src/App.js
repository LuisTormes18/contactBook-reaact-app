import React from "react";
import AppRouter from "./routers/AppRouter";
import AuthProvider from "./context/auth/AuthProvider";
import BookProvider from "./context/book/BookProvider";

function App() {
    return (
        <div>
            <AuthProvider>
                <BookProvider>
                    <AppRouter />
                </BookProvider>
            </AuthProvider>
        </div>
    );
}
export default App;
