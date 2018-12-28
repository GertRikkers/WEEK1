## Functies - Spread

### Doel
Het leren gebruiken van een spread operator bij het aanroepen van een functie.
1. Je kunt een spread operator toepassen.
2. Je kunt uitleggen wat het nut van een spread operator is.

### Opdracht
1. Maak een array aan met 5 verschillende getallen.
2. Bepaal door gebruik te maken van de ingebouwde functie `Math.min` de laagste waarde uit deze array.
3. Probeer dit eerst door de array als parameter door te geven. Wat is dan het resultaat?
4. Een oplossing zou zijn om de afzonderlijke waarden van de array als (5) aparte parameters door te geven.
5. Dit kan handiger door gebruik te maken van de spread operator (...). Probeer dit ook eens.

### Kennis
Het toepassen van de spread operator voor het doorgeven van een array als parameter voor functies waarbij geen array als parameter mag worden doorgegeven.
```
const numbers = []
const min = Math.min(...numbers);
```

### Opmerking 
Zet de code in een apart JavaScript bestand.