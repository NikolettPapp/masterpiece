**"Szoftverfejlesztő és tesztelő technikus szakma" Komplex programozói munka - "Vizsgaremek"**

A képzés záró feladataként a következő rendszer kerül megvalósításra:

    Fantázianév: 
        Raktárkezelés
        
    Rövid alapfeladat leírás: 
        Alap kérdésként egy vállalkozás árukészletéből, raktárából kiválasztott elem paramétereinek kezelése

    Bővített funkciók leírása: 
        (Elsődlegesen jövőbeli fejlesztésre)
            Bővített funkcióként elemcsoportok kezelése. Ez a gyakorlatban egy projektre, igényre összeválogatott cikkek csoportosítását, majd a csoport (kijelölt elemek) elmentését, jövőbeli visszakeresését teszi lehetővé.

    Bővített funkciók leírása II: 
        Vonalkód beolvasási lehetőség. EAN-13 → 13 számjegyes azonosító

    Részletes leírás: 
        A vállalkozásnál igényként merült fel általános áru/raktár/eszköz/ leltárkezelés egyszerű, gyors és olcsó megvalósítása. 
            Az egyedi azonosító alapján legyen lehetőség beazonosítani a rendszerben tárolt - alap kérdésként - a vállalkozás árukészletéből, raktárából kiválasztott elemet. Annak a paramétereit ellenőrizni.
        Elvárás hogy minél több eszköztípuson elérhető legyen, a lehető legkisebb erőforrás igénye legyen. Valamint ne kötődjön egyedi alkalmatzáshoz a használata.
                 

    A háttérrendszerben (backend) történő kezelés elemei. Ezt a rendszer adminisztrátora végzi.
     → Új elem felvétele
     → Létező elem paramétereinek módosítása
     → Létező elem törlése / deaktívvá tétele
     → Egyéb rendszerparaméterek beállítása

    A felhasználói felületen (frontend) történő kezelés elemei. Ezt a rendszer felhasználója végzi.
     → Áru, berendezés paramétereinek ellenörzése egyedi azonosító alapján
     → Áru, berendezés csoport összeállítása - egyedi igény alapján, egyesével - és tárolása azonosítóval
     
     
Egy adott elem (áru, berendezés, eszköz, alkatrész, kellékanyag ) alap paraméterei:

    | paraméter            | Magyarázat                 | Megjegyzés                                                          |


( Fix, kötelező elemek.)

    | paraméter            | Magyarázat                 | Megjegyzés                                                          |
    | egyedi azonosító     | 13 számjegy                | EAN-13 vonalkódhoz igazodva                                         |
    | megnevezés           | Általános megnevezés       |                                                                     |



( Opcionális elemek - fejlesztési szempontból is )

    | paraméter            | Magyarázat                 | Megjegyzés                                                          |
    | gyártó               | A gyártó, előállító neve   |                                                                     |
    | szállító             | A közvetlen beszállító     |                                                                     |
    | csomagolási egység   | darab / csomag / 5 /       | Egy csomagolásban mennyi található - előre meghatározott vagy szám  |
    | ár#1                 | Normál ár                  |                                                                     |
    | ár#2                 | Kedvezményes ár            |                                                                     |


( Plusz, bónus elemek / jövőbeli fejlesztéshez)

    | paraméter                   | Magyarázat                                 | Megjegyzés                                      |
    | Egyedi paramétercimke #1    | Az adott elemre vonatkozó plusz paraméter  | Pl. szerszám, élelmiszer, tejtermék, IT eszköz  |
    | Egyedi paramétercimke #2    | Az adott elemre vonatkozó plusz paraméter  |                                                 |
    | Egyedi paramétercimke #3    | Az adott elemre vonatkozó plusz paraméter  |                                                 |
    | Egyedi paramétercimke #4    | Az adott elemre vonatkozó plusz paraméter  |                                                 |
    | Egyedi paramétercimke #5    | Az adott elemre vonatkozó plusz paraméter  |                                                 |
    | Egyedi paramétercimke #6    | Az adott elemre vonatkozó plusz paraméter  |                                                 |


( Plusz, bónus elemek / jövőbeli fejlesztéshez - gyűjtő kezeléshez)

    | paraméter                   | Magyarázat                                                          | Megjegyzés             |
    | Gyűjtő azonosítója          | A csoportba foglalandő eszközök/berendezések áruk közös azonosítója | 13 számjegy            |
    | Gyűjtőben szereplő elemek   | Az elemek azonosítója felsorolva                                    | mint .csv              |
    

Futtató, szerver oldali környezet
→ NodeJs, React, Djangó futtatására alkalmas rendszer

A háttéradatok tárolása: A megadott rendszerekben alapfelépítésben beállított megoldás



Elérési, felhasználói környezet - Frontend
→ Böngészőn keresztüli elérés, kezelés



Elérési, adminisztrátor oldali elérési környezet - backend
→ Böngészőn keresztüli elérés, kezelés



    → csoportok készítése az árukból ( Egy projekthez tartozó / egy megrendelőhöz tartozó / egy munkához tartozó )
    →csoportok kezelése.
    → csoport paraméterei ( projekt csoport vagy gyűjtő csomagolás )
    → csoport megnevezése
    → csoport egyedi azonosítója
    → a csoportban szereplő áru / termék azonosítója és darabszáma
    → csoportban lévő áruk árának összesítése

 
