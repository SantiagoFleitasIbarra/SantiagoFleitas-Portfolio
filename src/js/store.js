import { config } from './config.js';

// State management for the application
export const store = {
    currentLanguage: 'es',
    
    // Get text based on current language
    getText(section, key) {
        return config.languages[this.currentLanguage][section][key];
    },
    
    // Change language
    setLanguage(lang) {
        if (config.languages[lang]) {
            this.currentLanguage = lang;
            this.notifyListeners();
        }
    },
    
    // Listeners for state changes
    listeners: [],
    
    // Subscribe to state changes
    subscribe(callback) {
        this.listeners.push(callback);
        return () => {
            this.listeners = this.listeners.filter(listener => listener !== callback);
        };
    },
    
    // Notify all listeners
    notifyListeners() {
        this.listeners.forEach(listener => listener());
    }
};

