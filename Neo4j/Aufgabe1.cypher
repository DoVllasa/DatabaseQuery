CREATE 
  // Vorlesungen

  // WIN
  (`Einführung in die Programmierung`       :Vorlesung {title:"Einführung in die Programmierung",sws:6,ects:8}),
  (`Hardware- und Systemgrundlagen`         :Vorlesung {title:"Hardware- und Systemgrundlagen",sws:4,ects:5}),
  (`Algorithmen und Datenstrukturen`        :Vorlesung {title:"Algorithmen und Datenstrukturen",sws:5,ects:6}),
  (`Betriebssysteme`                        :Vorlesung {title:"Betriebssysteme",sws:4,ects:6}),
  // AIN    
  (`Programmiertechnik 1`                   :Vorlesung {title:"Programmiertechnik 1",sws:6,ects:8}),
  (`Mathematik 2 und Stochastik`            :Vorlesung {title:"Mathematik 2 und Stochastik",sws:6,ects:8}),
  (`Systemprogrammierung`                   :Vorlesung {title:"Systemprogrammierung",sws:4,ects:5}),
  (`Rechnerarchitekturen`                   :Vorlesung {title:"Rechnerarchitekturen",sws:4,ects:5}),
  // MSI
  (`Mathematik`                             :Vorlesung {title:"Mathematik",sws:4,ects:6}),
  (`Modellgetriebene Softwareentwicklung`   :Vorlesung {title:"Modellgetriebene Softwareentwicklung",sws:4,ects:5}),
  (`IT-Sicherheitsarchitekturen`            :Vorlesung {title:"IT-Sicherheitsarchitekturen",sws:4,ects:5}),
  (`Data Analytics`                         :Vorlesung {title:"Data Analytics",sws:3,ects:5}),
  (`IT-Leadership`                          :Vorlesung {title:"IT-Leadership",sws:4,ects:5}),
  (`Cloud Application Development`          :Vorlesung {title:"Cloud Application Development",sws:4,ects:5}),
  (`Reactive Programming`                   :Vorlesung {title:"Reactive Programming",sws:3,ects:5}),
  
  // Professoren

  (`Langweg`        :Professor {name:"Prof. Dr. H. Langweg"}),
  (`Neuschwander`   :Professor {name:"Prof. Dr. J. Neuschwander"}),
  (`Meyer`          :Professor {name:"Prof. Dr. S. Meyer"}),
  (`Mueller`        :Professor {name:"Prof. Dr. R. Mueller"}),
  (`Drachenfels`    :Professor {name:"Prof. Dr. von Drachenfels"}),
  (`Staehle`        :Professor {name:"Prof. Dr. Barbara Staehle"}),
  (`Dürr`           :Professor {name:"Prof. Dr. O. Dürr"}),
  (`Rentrop`        :Professor {name:"Prof. Dr. Rentrop"}),
  (`Boger`          :Professor {name:"Prof. Dr. Marko Boger"}),
  (`Eiglsperger`    :Professor {name:"Prof. Dr. M. Eiglsperger"}),

  // Studiengänge

  (`WIN` :Studiengang {name:"Wirtschaftsinformatik",kürzel:"WIN",abschluss:"Bachelor"}),
  (`AIN` :Studiengang {name:"Angewandte Informatik",kürzel:"AIN",abschluss:"Bachelor"}),
  (`MSI` :Studiengang {name:"Informatik",kürzel:"MSI",abschluss:"Master"}),

  // Beziehung ZUGEORDNET (Professor -> Studiengänge)

  (`Langweg`)       -[:ZUGEORDNET]->(`WIN`),
  (`Neuschwander`)  -[:ZUGEORDNET]->(`AIN`),
  (`Meyer`)         -[:ZUGEORDNET]->(`WIN`),
  (`Mueller`)       -[:ZUGEORDNET]->(`MSI`),
  (`Drachenfels`)   -[:ZUGEORDNET]->(`AIN`),
  (`Staehle`)       -[:ZUGEORDNET]->(`MSI`),
  (`Dürr`)          -[:ZUGEORDNET]->(`MSI`),
  (`Rentrop`)       -[:ZUGEORDNET]->(`WIN`),
  (`Boger`)         -[:ZUGEORDNET]->(`AIN`),
  (`Eiglsperger`)   -[:ZUGEORDNET]->(`MSI`),

  // Beziehung ENTHALTEN (Vorlesung -> Studiengang)
  


(`Einführung in die Programmierung`    )-[:ENTHALTEN]->(`WIN`),
(`Hardware- und Systemgrundlagen`      )-[:ENTHALTEN]->(`WIN`),
(`Algorithmen und Datenstrukturen`     )-[:ENTHALTEN]->(`WIN`),
(`Betriebssysteme`                     )-[:ENTHALTEN]->(`WIN`),

(`Programmiertechnik 1`                )-[:ENTHALTEN]->(`AIN`),
(`Mathematik 2 und Stochastik`         )-[:ENTHALTEN]->(`AIN`),
(`Systemprogrammierung`                )-[:ENTHALTEN]->(`AIN`),
(`Rechnerarchitekturen`                )-[:ENTHALTEN]->(`AIN`),

// MSI
(`Mathematik`                          )-[:ENTHALTEN]->(`MSI`),
(`Modellgetriebene Softwareentwicklung`)-[:ENTHALTEN]->(`MSI`),
(`IT-Sicherheitsarchitekturen`         )-[:ENTHALTEN]->(`MSI`),
(`Data Analytics`                      )-[:ENTHALTEN]->(`MSI`),
(`IT-Leadership`                       )-[:ENTHALTEN]->(`MSI`),
(`Cloud Application Development`       )-[:ENTHALTEN]->(`MSI`),
(`Reactive Programming`                )-[:ENTHALTEN]->(`MSI`),




  // Beziehung HÄLT (Professor -> Vorlesung)

  (`Langweg`)       -[:HÄLT {semester:["SS", "WS"]}]->(`Einführung in die Programmierung`),
  (`Neuschwander`)  -[:HÄLT {semester:["SS", "WS"]}]->(`Hardware- und Systemgrundlagen`),
  (`Neuschwander`)  -[:HÄLT {semester:["SS", "WS"]}]->(`Rechnerarchitekturen`),
  (`Neuschwander`)  -[:HÄLT {semester:["SS"]}]->(`IT-Sicherheitsarchitekturen`),
  (`Meyer`)         -[:HÄLT {semester:["SS", "WS"]}]->(`Algorithmen und Datenstrukturen`),
  (`Mueller`)       -[:HÄLT {semester:["SS", "WS"]}]->(`Betriebssysteme`),
  (`Drachenfels`)   -[:HÄLT {semester:["SS", "WS"]}]->(`Programmiertechnik 1`),
  (`Drachenfels`)   -[:HÄLT {semester:["WS"]}]->(`Systemprogrammierun`),
  (`Drachenfels`)   -[:HÄLT {semester:["SS"]}]->(`Modellgetriebene Softwareentwicklung`),
  (`Staehle`)       -[:HÄLT {semester:["SS", "WS"]}]->(`Mathematik 2 und Stochastik`),
  (`Staehle`)       -[:HÄLT {semester:["WS"]}]->(`Mathematik`),
  (`Dürr`)          -[:HÄLT {semester:["WS"]}]->(`Data Analytics`),
  (`Rentrop`)       -[:HÄLT {semester:["SS", "WS"]}]->(`IT-Leadership`),
  (`Boger`)         -[:HÄLT {semester:["WS"]}]->(`Reactive Programming`),
  (`Eiglsperger`)   -[:HÄLT {semester:["SS"]}]->(`Cloud Application Development`)

