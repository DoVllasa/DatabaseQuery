db.vorlesungen.deleteMany({});
db.studiengaenge.deleteMany({});

//create studiengaenge
win = {
  kuerzel: "WIN",
  name: "Wirtschaftsinformatik",
  abschluss: "Bachelor"
};
ain = {
  kuerzel: "AIN",
  name: "Angewandte Informatik",
  abschluss: "Bachelor"
};
msi = {
  kuerzel: "MSI",
  name: "Informatik",
  abschluss: "Master"
};

db.studiengaenge.save(win);
db.studiengaenge.save(ain);
db.studiengaenge.save(msi);

//create courses with DBRef
//WIN
win1 = {
  name: "Mathematik für Wirtschaftsinformatiker 1",
  dozent: "Dr. R. Janßen",
  semester: 1,
  SWS: 5,
  ECTS: 6,
  studiengang: new DBRef("studiengaenge", win._id)
};

win2 = {
  name: "Betriebswirtschaftslehre",
  dozent: "Prof. Dr. R. Martin",
  semester: 2,
  SWS: 5,
  ECTS: 7,
  studiengang: new DBRef("studiengaenge", win._id)
};

win3 = {
  name: "Rechnungswesen",
  dozent: "Prof. Dr. Rentrop",
  semester: 2,
  SWS: 6,
  ECTS: 8,
  studiengang: new DBRef("studiengaenge", win._id)
};

win4 = {
  name: "Grundlagen der Wirtschaftsinformatik",
  dozent: "Prof. Dr. M. Mevius",
  semester: 2,
  SWS: 6,
  ECTS: 8,
  studiengang: new DBRef("studiengaenge", win._id)
};

win5 = {
  name: "Einführung in die Programmierung",
  dozent: "Prof. Dr. H. Langweg",
  semester: 1,
  SWS: 6,
  ECTS: 8,
  studiengang: new DBRef("studiengaenge", win._id)
};

win6 = {
  name: "Hardware- und Systemgrundlagen",
  dozent: "Prof. Dr. J. Neuschwander",
  semester: 1,
  SWS: 4,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", win._id)
};

win7 = {
  name: "Mathematik für Wirtschaftsinformatiker 2",
  dozent: "Prof. Dr. H. Plesske",
  semester: 1,
  SWS: 5,
  ECTS: 6,
  studiengang: new DBRef("studiengaenge", win._id)
};

win8 = {
  name: "Algorithmen und Datenstrukturen",
  dozent: "Prof. Dr. S. Meyer",
  semester: 1,
  SWS: 5,
  ECTS: 6,
  studiengang: new DBRef("studiengaenge", win._id)
};

win9 = {
  name: "Betriebssysteme",
  dozent: "Prof. Dr. R. Mueller",
  semester: 1,
  SWS: 4,
  ECTS: 6,
  studiengang: new DBRef("studiengaenge", win._id)
};

win10 = {
  name: "Wahrscheinlichkeitstheorie und Statistik",
  dozent: "Prof. Dr. O. Dürr",
  semester: 1,
  SWS: 5,
  ECTS: 6,
  studiengang: new DBRef("studiengaenge", win._id)
};

//AIN
ain1 = {
  name: "Programmiertechnik 1",
  dozent: "Prof. Dr. von Drachenfels",
  semester: 1,
  SWS: 6,
  ECTS: 8,
  studiengang: new DBRef("studiengaenge", ain._id)
};

ain2 = {
  name: "Kommunikationskompetenz",
  dozent: "Prof. Dr. D. Kreik",
  semester: 2,
  SWS: 2,
  ECTS: 2,
  studiengang: new DBRef("studiengaenge", ain._id)
};

ain3 = {
  name: "Softwaremodellierung",
  dozent: "Prof. Dr. Eck",
  semester: 2,
  SWS: 6,
  ECTS: 7,
  studiengang: new DBRef("studiengaenge", ain._id)
};

ain4 = {
  name: "Mathematik 2 und Stochastik",
  dozent: "Prof. Dr. Barbara Staehle",
  semester: 1,
  SWS: 6,
  ECTS: 8,
  studiengang: new DBRef("studiengaenge", ain._id)
};

ain5 = {
  name: "Programmiertechnik 2",
  dozent: "Prof. Dr. Bittel",
  semester: 1,
  SWS: 6,
  ECTS: 7,
  studiengang: new DBRef("studiengaenge", ain._id)
};

ain6 = {
  name: "Systemprogrammierung",
  dozent: "Prof. Dr. von Drachenfels",
  semester: 1,
  SWS: 4,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", ain._id)
};

ain7 = {
  name: "Rechnerarchitekturen",
  dozent: "Prof. Dr. J. Neuschwander",
  semester: 1,
  SWS: 4,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", ain._id)
};

ain8 = {
  name: "Signale, Systeme und Sensoren",
  dozent: "Prof. Dr. Franz",
  semester: 1,
  SWS: 5,
  ECTS: 6,
  studiengang: new DBRef("studiengaenge", ain._id)
};

ain9 = {
  name: "Algorithmen und Theoretische Informatik",
  dozent: "Prof. Dr. Bittel",
  semester: 1,
  SWS: 6,
  ECTS: 8,
  studiengang: new DBRef("studiengaenge", ain._id)
};

ain10 = {
  name: "Softwaretechnik",
  dozent: "Prof. Dr. Marko Boger",
  semester: 1,
  SWS: 4,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", ain._id)
};

//MSI
msi1 = {
  name: "Mathematik",
  dozent: "Prof. Dr. Barbara Staehle",
  semester: 2,
  SWS: 4,
  ECTS: 6,
  studiengang: new DBRef("studiengaenge", msi._id)
};

msi2 = {
  name: "Reactive Programming",
  dozent: "Prof. Dr. Marko Boger",
  semester: 2,
  SWS: 3,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", msi._id)
};

msi3 = {
  name: "Modellgetriebene Softwareentwicklung",
  dozent: "Prof. Dr. von Drachenfels",
  semester: 1,
  SWS: 4,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", msi._id)
};

msi4 = {
  name: "Konzepte aktueller Datenbanksysteme",
  dozent: "Prof. Dr. Eck",
  semester: 1,
  SWS: 3,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", msi._id)
};

msi5 = {
  name: "Agile und mobile Entwicklung",
  dozent: "Prof. Dr. R. Mueller",
  semester: 1,
  SWS: 4,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", msi._id)
};

msi6 = {
  name: "IT-Sicherheitsarchitekturen",
  dozent: "Prof. Dr. J. Neuschwander",
  semester: 1,
  SWS: 4,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", msi._id)
};

msi7 = {
  name: "Cloud Application Development",
  dozent: "Prof. Dr. M. Eiglsperger",
  semester: 1,
  SWS: 4,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", msi._id)
};

msi8 = {
  name: "IT-Leadership",
  dozent: "Prof. Dr. Rentrop",
  semester: 1,
  SWS: 4,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", msi._id)
};

msi9 = {
  name: "IT-Security (Security of Software and Systems)",
  dozent: "Prof. Dr. H. Langweg",
  semester: 1,
  SWS: 4,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", msi._id)
};

msi10 = {
  name: "Data Analytics",
  dozent: "Prof. Dr. O. Dürr",
  semester: 1,
  SWS: 3,
  ECTS: 5,
  studiengang: new DBRef("studiengaenge", msi._id)
};

db.vorlesungen.save(win1);
db.vorlesungen.save(win2);
db.vorlesungen.save(win3);
db.vorlesungen.save(win4);
db.vorlesungen.save(win5);
db.vorlesungen.save(win6);
db.vorlesungen.save(win7);
db.vorlesungen.save(win8);
db.vorlesungen.save(win9);
db.vorlesungen.save(win10);

db.vorlesungen.save(ain1);
db.vorlesungen.save(ain2);
db.vorlesungen.save(ain3);
db.vorlesungen.save(ain4);
db.vorlesungen.save(ain5);
db.vorlesungen.save(ain6);
db.vorlesungen.save(ain7);
db.vorlesungen.save(ain8);
db.vorlesungen.save(ain9);
db.vorlesungen.save(ain10);

db.vorlesungen.save(msi1);
db.vorlesungen.save(msi2);
db.vorlesungen.save(msi3);
db.vorlesungen.save(msi4);
db.vorlesungen.save(msi5);
db.vorlesungen.save(msi6);
db.vorlesungen.save(msi7);
db.vorlesungen.save(msi8);
db.vorlesungen.save(msi9);
db.vorlesungen.save(msi10);
