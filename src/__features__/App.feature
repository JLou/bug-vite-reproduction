Feature: Je clique sur le bouton et le compteur augmente

    Scenario: Etat initial
        Given je suis sur l'application
        Then le compteur indique "count is: 0"

    Scenario: J'incrémente le compteur
        Given je suis sur l'application
        When j'augmente le compteur
        Then le compteur indique "count is: 1"
