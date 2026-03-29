// Word interface for text rendering
export interface Word {
    id: number;
    text: string;
    meaning: string;
}

// Navigation prop types
export type HomeScreenProps = {
    navigation: any;
};

export type ReaderScreenProps = {
    navigation: any;
};

// Definition popup state
export interface DefinitionPopupState {
    visible: boolean;
    word: string;
    meaning: string;
    x: number;
    y: number;
}