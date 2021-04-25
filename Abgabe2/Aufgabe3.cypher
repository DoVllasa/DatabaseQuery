// a) Welches sind die drei häufigsten Directors, mit denen Tom Hanks zusammen 
//    gedreht hat? Geben Sie die Director-Namen und die Anzahl gemeinsamer Filme aus.

MATCH (p1:Person {name: "Tom Hanks"})-->(m:Movie)<-[:DIRECTED]-(p2:Person)
WHERE p1 <> p2
WITH p2, count(m) as anz_gemeinsame_filme
RETURN p2.name AS Name, anz_gemeinsame_filme
ORDER BY anz_gemeinsame_filme DESC
LIMIT 3

// Notiz:   Nora Ephron:        2 
//          Robert Zemeckis:    2
//          Ron Howard:         2

// b) Fügen Sie eine KNOWS-Beziehung zwischen allen Akteuren (Regisseuren und Schauspielern) ein, 
//    die zusammen einen Film gedreht haben. Die Relation soll zwischen allen Akteueren, auch z.B. 
//    zwischen Schauspielern untereinander angelegt werden. Stellen Sie aber sicher, dass eine Person 
//    sich nicht selbst kennt. Zählen Sie anschliessend die Anzahl eingefügter Relationen.

MATCH (p1:Person)-->(m:Movie)<--(p2:Person)
WHERE p1 <> p2
MERGE (p1)-[k:KNOWS]-(p2)
RETURN COUNT(k)

// Notiz: 1588 eingefügte Relationen.

// c) Geben Sie Empfehlungen für mögliche Filmpartner von Keanu Reeves an. 
//    Diese sollen Keanu Reeves nicht direkt kennen, aber Bekannte sollen sie kennen.

MATCH (p1:Person)-[:KNOWS]->()-[:KNOWS]->(p2:Person {name: "Keanu Reeves"}) 
WHERE NOT (p1)-[:KNOWS]->(p2)
RETURN p1.name

// d) Die Bacon-Zahl ist die Länge der kürzesten Kette von Schauspielern, 
//    die gemeinsam in einem Film spielen, zu Kevin Bacon. Berechnen Sie die Bacon-Zahl 
//    zwischen Kevin Bacon und Keanu Reeves.

MATCH p=shortestPath((p1:Person {name:"Kevin Bacon"})-[*]-(p2:Person {name:"Keanu Reeves"}))
RETURN length(p) as BaconNumber

// Notiz: BaconNumber = 2