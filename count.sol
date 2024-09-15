// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    // Variable pour stocker le nombre
    uint256 private count;

    // Constructeur pour initialiser le compteur à zéro (ou une autre valeur si nécessaire)
    constructor() {
        count = 0;
    }

    // Fonction pour incrémenter le compteur de 1
    function increment() public {
        count += 1;
    }

    // Fonction pour décrémenter le compteur de 1
    function decrement() public {
        count -= 1;
    }

    // Fonction pour récupérer la valeur actuelle du compteur
    function getCount() public view returns (uint256) {
        return count;
    }
}
