win = { "kuerzel": "win",
        "name": "Wirtschaftsinformatik",
        "abschluss:": "Bachelor" };
        
ain = { "kuerzel": "ain",
        "name": "Angewandte Informatik",
        "abschluss:": "Bachelor" };
        
msi = { "kuerzel": "msi",
        "name": "Master Informatik",
        "abschluss:": "Master" };

db.studiengaenge.insert(win)
db.studiengaenge.insert(ain)
db.studiengaenge.insert(msi)
        
vorlesungAin1 = { "name": "Digitaltechnik",
                  "dozent": "Schoppa",
                  "semester:": "1",
                  "studiengang:": new DBRef("studiengaenge", ain.kuerzel),
                  "sws:": "6" ,
                  "ects:": "8"  };
                  
vorlesungAin2 = { "name": "Programmiertechnik 1",
                  "dozent": "Drachenfels",
                  "semester:": "1",
                  "studiengang:": new DBRef("studiengaenge", ain.kuerzel),
                  "sws:": "6" ,
                  "ects:": "8"  };

vorlesungAin1 = { "name": "Softwaremodellierung",
                  "dozent": "Eck",
                  "semester:": "1",
                  "studiengang:": new DBRef("studiengaenge", ain.kuerzel),
                  "sws:": "6" ,
                  "ects:": "8"  };

vorlesungAin1 = { "name": "Digitaltechnik",
                  "dozent": "Schoppa",
                  "semester:": "1",
                  "studiengang:": new DBRef("studiengaenge", ain.kuerzel),
                  "sws:": "6" ,
                  "ects:": "8"  };

vorlesungAin1 = { "name": "Digitaltechnik",
                  "dozent": "Schoppa",
                  "semester:": "1",
                  "studiengang:": new DBRef("studiengaenge", ain.kuerzel),
                  "sws:": "6" ,
                  "ects:": "8"  };

vorlesungAin1 = { "name": "Digitaltechnik",
                  "dozent": "Schoppa",
                  "semester:": "1",
                  "studiengang:": new DBRef("studiengaenge", ain.kuerzel),
                  "sws:": "6" ,
                  "ects:": "8"  };

vorlesungAin1 = { "name": "Digitaltechnik",
                  "dozent": "Schoppa",
                  "semester:": "1",
                  "studiengang:": new DBRef("studiengaenge", ain.kuerzel),
                  "sws:": "6" ,
                  "ects:": "8"  };

vorlesungAin1 = { "name": "Digitaltechnik",
                  "dozent": "Schoppa",
                  "semester:": "1",
                  "studiengang:": new DBRef("studiengaenge", ain.kuerzel),
                  "sws:": "6" ,
                  "ects:": "8"  };

vorlesungAin1 = { "name": "Digitaltechnik",
                  "dozent": "Schoppa",
                  "semester:": "1",
                  "studiengang:": new DBRef("studiengaenge", ain.kuerzel),
                  "sws:": "6" ,
                  "ects:": "8"  };

vorlesungAin1 = { "name": "Digitaltechnik",
                  "dozent": "Schoppa",
                  "semester:": "1",
                  "studiengang:": new DBRef("studiengaenge", ain.kuerzel),
                  "sws:": "6" ,
                  "ects:": "8"  };













