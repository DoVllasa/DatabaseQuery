//a 

//db.studiengaenge.find({"abschluss": "Bachelor"})


//b 

//db.vorlesungen.aggregate([{$match: {"studiengang.$ref": "studiengaenge", "studiengang.$id": db.studiengaenge.findOne({"kuerzel": "AIN"})._id, "SWS" : {$lt: 5}}}, {$sort: {"name": 1}}]).forEach(function(u){print(u.name)})

//c 

//db.vorlesungen.find({SWS: {$gt: "ECTS"}})

//d 

//db.vorlesungen.aggregate([{ $match: {"studiengang.$ref": "studiengaenge", "studiengang.$id": db.studiengaenge.findOne({"kuerzel": "AIN"})._id}}, {$group: {"_id": "$dozent", "summeSWS": {"$sum": "$SWS"}}}]).forEach(function(u){print(u._id, u.summeSWS)})

//e

//var highestSWS = db.vorlesungen.aggregate([{ $match: {"studiengang.$ref": "studiengaenge", "studiengang.$id": db.studiengaenge.findOne({"kuerzel": "AIN"})._id}}, {$group: {"_id": "$dozent", "summeSWS": {"$sum": "$SWS"}}}, {$sort: {"summeSWS": -1}}, {$limit: 1}]).toArray()[0].summeSWS;

//db.vorlesungen.aggregate([{ $match: {"studiengang.$ref": "studiengaenge", "studiengang.$id": db.studiengaenge.findOne({"kuerzel": "AIN"})._id}}, {$group: {"_id": "$dozent", "summeSWS": {"$sum": "$SWS"}}}, {$match: {"summeSWS": highestSWS}}]).forEach(function(u){print(u._id)})