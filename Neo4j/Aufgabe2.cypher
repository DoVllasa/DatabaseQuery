// a) Welche WIN-Professoren halten im Wintersemester 
//    welche MSI-Vorlesungen?

MATCH (s:Studiengang {kürzel: 'WIN'})<--(Professor)-[h:HÄLT]->(Vorlesung)-->(sm:Studiengang {kürzel: 'MSI'})
WHERE 'WS' IN h.semester
RETURN Professor.name AS Professor, s.name AS zugeordnet, Vorlesung.title AS Vorlesung, h.semester AS Semester


// b) Welche AIN-Professoren halten im SS mehr als 
//    eine MSI-Vorlesung mit mind. 5 ECTS?

MATCH (s:Studiengang {kürzel: 'AIN'})<--(p:Professor)-[h:HÄLT]->(Vorlesung)-->(sm:Studiengang {kürzel: 'MSI'})
WHERE 'SS' IN h.semester AND Vorlesung.ects <= 5
WITH p, COUNT(h) AS Anzahl
WHERE Anzahl > 1
RETURN p.name AS Professor, Anzahl


// c) Welche Professoren halten Vorlesungen in einem Studiengang, 
//    dem sie nicht zugeordnet sind?

MATCH (s:Studiengang)<--(p:Professor)-->(Vorlesung)-->(s2:Studiengang)
WHERE s <> s2
RETURN p.name AS Professor, s.kürzel AS zugewiesen, Vorlesung.title AS Vorlesung, s2.kürzel AS Vorlesung_für