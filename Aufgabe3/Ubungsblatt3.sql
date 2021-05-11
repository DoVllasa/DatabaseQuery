CREATE TABLE Patienten
( pid CHAR(2) PRIMARY KEY,
 name VARCHAR2(30),
 vorname VARCHAR2(30),
 plz CHAR(5),
 stadt VARCHAR2(30),
 behandlungen XMLTYPE);
INSERT INTO Patienten VALUES ('03', 'Maier', 'Hans', '78224', 'Singen',
'<behandlungen>
 <behandlung nr = "11">
 <diagnose>Beinbruch</diagnose>
 <datum>05.10.2015</datum>
 </behandlung>
</behandlungen>');
INSERT INTO Patienten VALUES ('04', 'Huber', 'Kai', '78462', 'Konstanz',
'<behandlungen>
<behandlung nr="15">
 <diagnose>Beinbruch</diagnose>
 <datum>10.11.2015</datum>
</behandlung>
<behandlung nr="12">
 <diagnose>Grippe</diagnose>
 <datum>10.10.2015</datum>
</behandlung>
</behandlungen>'
);
INSERT INTO Patienten VALUES ('05', 'Kunz', 'Erik', '78224', 'Singen',
'<behandlungen>
<behandlung nr="37">
 <diagnose>Grippe</diagnose>
 <datum>10.10.2015</datum>
</behandlung>
<behandlung nr="52">
 <diagnose>Armbruch</diagnose>
 <datum>20.11.2015</datum>
</behandlung>
</behandlungen>'
);


--Aufgabe 1
SELECT XMLELEMENT("Patient", XMLFOREST(vorname AS "Vorname", name AS "Nachname", stadt AS "Stadt")) FROM Patienten WHERE stadt = 'Singen';

--Aufgabe 2
--SELECT XMLQuery('for $i in /behandlungen/behandlung where $i/diagnose="Beinbruch" return $i/datum/string()' PASSING behandlungen RETURNING CONTENT) FROM Patienten p;

SELECT XMLELEMENT("Beinbruch-Behandlung", XMLFOREST(name, pd.datum)) FROM Patienten p, XMLTABLE('for $i in //behandlung where $i/diagnose="Beinbruch" return $i/datum' PASSING behandlungen COLUMNS datum varchar2(10) PATH '.') AS pd;