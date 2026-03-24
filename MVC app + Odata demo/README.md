# MVC app + OData – Tanuló projekt összefoglaló

Ez a projekt egy SAPUI5 tanuló alkalmazás, amely egy **master-detail** felépítést valósít meg OData adatszolgáltatással.

Live demo - https://myui5app.netlify.app/

## Használt eszközök és technikák

- **SAPUI5 framework**
  - XML view + JavaScript controller alapú UI5 alkalmazás.

- **MVC architektúra**
  - A nézetek (`view`), vezérlők (`controller`) és modell konfiguráció (`manifest.json`) külön rétegekben vannak.

- **OData V2 modell (Northwind)**
  - Az alapértelmezett modell `sap.ui.model.odata.v2.ODataModel`.
  - Az adatforrás a `northwind` szolgáltatás (`/northwind.svc/`).

- **Proxy middleware (UI5 Tooling)**
  - A `ui5.yaml` fájlban `ui5-middleware-simpleproxy` továbbítja a helyi `/northwind.svc` hívásokat a publikus Northwind OData service-re.

- **Routing / Navigation (sap.m.routing.Router)**
  - `master` útvonal: lista nézet (`First`).
  - `detail/{ID}` útvonal: részlet nézet (`Second`).
  - Navigáció `navTo(...)` hívással történik.

- **Adatkötés és binding módok**
  - Lista kötés: `Table items="{/Suppliers}"`.
  - Elem szintű kötés: `bindElement({ path: /Suppliers(ID) })` a detail oldalon.
  - Beállított binding mód: `TwoWay`.

- **Formatter használat**
  - Egyedi formatter metódus (`toLowerCase`) a megjelenített szöveg formázására.

- **ViewModel (JSONModel) lokális UI state-hez**
  - A `First` controllerben külön `viewModel` tárolja pl. a táblázat elemszámát (`count`).

- **i18n (nemzetköziesítés)**
  - `ResourceModel` alapú fordítási struktúra (`i18n` modell).
  - A nézetekben szövegek i18n kulcsokkal jelennek meg.

- **SAP.m kontrollok és reszponzív UI elemek**
  - `Table`, `Page`, `ObjectHeader`, `SimpleForm`, `OverflowToolbar`, `Button` stb.

## Fő működési flow

1. Az alkalmazás induláskor inicializálja a routingt a `Component.js` fájlban.
2. A `First` nézet betölti a beszállító listát az OData szolgáltatásból.
3. Listaelem kattintáskor a router átadja a kiválasztott `SupplierID`-t a detail útvonalnak.
4. A `Second` controller route match után a megfelelő beszállító rekordra bindeli a nézetet.
5. A felhasználó a részleteket megtekintheti/szerkesztheti a form mezőkben.

## Rövid tanulási fókuszok

- OData alapú adatelérés UI5-ben
- Master-detail navigáció route paraméterrel
- MVC szerkezet gyakorlati használata
- Külön app modell (`ODataModel`) és view modell (`JSONModel`) együtt használata
- i18n és formatter alapok
