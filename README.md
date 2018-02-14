# minkorrekt-addon
Browser Add-On um Minkorrekt Podcast mittels des Amazon Affiliate Program zu unterstützen. Das Add-On sorgt dafür, dass ihr nie wieder vergesst eure Amazon Einkäufe über den Minkorrekt Amazon Affiliate Link verbuchen zu lassen.

# Wie funktioniert's?
 Hierfür hängt das Add-on an alle Amazon Produktseiten den entsprechenden Affiliate Parameter von Minkorrekt an die URL an. Wenn ihr allerdings über einen anderen Affiliate Link auf eine Produktseite navigiert, gewinnt fairerweise der ursprüngliche Affiliate. 

# Mitentwickeln
Das Add-on basiert auf der [Extension API](https://developer.mozilla.org/de/Add-ons/WebExtensions) und ist in TypeScript geschrieben.

##  Setup
Node v9.5.0 installieren
```
npm i -g karma
npm i -g web-ext
npm install
```
## Lokal testen
```
npm test
```

## Lokal starten
```
npm start
```
