import React, { useEffect } from "react";
import { useGameContext } from "../state/GameContext";

const Store = {
    getAppState: function() {
        const currentScreen = sessionStorage.getItem('currentScreen');
        const difficulty = sessionStorage.getItem('difficulty');
        const gameStarted = sessionStorage.getItem('gameStarted');
        return {
            currentScreen: currentScreen ? parseInt(currentScreen) : 1,
            difficulty: difficulty ? parseInt(difficulty) : 1,
            gameStarted: gameStarted === 'true'
        }
    },
    updateAppState: function(state) {
        if(state.currentScreen) sessionStorage.setItem('currentScreen', state.currentScreen.toString());
        if(state.difficulty) sessionStorage.setItem('difficulty', state.difficulty.toString());
        if(state.gameStarted) sessionStorage.setItem('gameStarted', state.gameStarted.toString());
    },
    getMoves: function() {
        const moves = sessionStorage.getItem('moves');
        return moves ? parseInt(moves) : 0;

    },
    getTotalMoves: function() {
        const totalMoves = localStorage.getItem('totalMoves');
        return  totalMoves ? parseInt(totalMoves) : 0;
    },
    updateMoves: function(moves, totalMoves) {
        if(moves) sessionStorage.setItem('moves', moves.toString());
        if(totalMoves) localStorage.setItem('totalMoves', totalMoves.toString());
    },
    getIsWin: function() {
        const isWin = sessionStorage.getItem('isWin');
        return { isWin: isWin === 'true' };
    },
    updateIsWin: function(isWin) {
        if(isWin) sessionStorage.setItem('isWin', isWin.toString());
    },
    getTimer: function() {
        const timer = sessionStorage.getItem('timer');
        return timer ? parseInt(timer) : 0;
    },
    updateTimer: function(seconds) {
        if(seconds) sessionStorage.setItem('timer', seconds.toString());
    },
    getCardState: function() {
        const state = {
            cardList: JSON.parse(sessionStorage.getItem('cardList') ?? '[]'),
            flippedCards: JSON.parse(sessionStorage.getItem('flippedCards') ?? '[]'),
            pairedCount: parseInt(sessionStorage.getItem('pairedCount') ?? '0'),
        }
        if(state.cardList?.length) return state;
        return { empty: true };
    },
    updateCardList: function(cardList) {
        sessionStorage.setItem('cardList', JSON.stringify(cardList));
    },
    updatePairedCount: function(count) {
        sessionStorage.setItem('pairedCount', count.toString());
    },
    updateFlippedCards: function(flippedCards) {
        sessionStorage.setItem('flippedCards', JSON.stringify(flippedCards));
    },
    resetGame: function() {
        sessionStorage.setItem('gameStarted', 'false');
        sessionStorage.setItem('moves', '0');
        sessionStorage.setItem('timer', '0');
        sessionStorage.setItem('cardList', '[]');
    }
}

export const useMovesStorage = () => {
    const { moves, setMoves, totalMoves, setTotalMoves, isWin } = useGameContext();

    useEffect(() => {
        const storedMoves = Store.getMoves();
        if(storedMoves !== moves) setMoves(storedMoves);

        const updateMovesFromStorage = () => {
            const storedTotalMoves = Store.getTotalMoves();
            if(storedTotalMoves !== totalMoves) setTotalMoves(storedTotalMoves);
        }

        updateMovesFromStorage();

        window.addEventListener('storage', updateMovesFromStorage);

        return () => {
            window.removeEventListener('storage', updateMovesFromStorage);
        }
    },[]);
}

export const useStorage = () => {
    return { Store };
}
