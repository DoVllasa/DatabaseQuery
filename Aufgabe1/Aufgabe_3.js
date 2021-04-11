//a 
db.vorlesungen.updateMany({"studiengang.$ref": "studiengaenge", "studiengang.$id": db.studiengaenge.findOne({"kuerzel": "AIN"})._id},{$set: {"studiengang.kuerzel": "AIN"}})
db.vorlesungen.updateMany({"studiengang.$ref": "studiengaenge", "studiengang.$id": db.studiengaenge.findOne({"kuerzel": "WIN"})._id},{$set: {"studiengang.kuerzel": "WIN"}})
db.vorlesungen.updateMany({"studiengang.$ref": "studiengaenge", "studiengang.$id": db.studiengaenge.findOne({"kuerzel": "MSI"})._id},{$set: {"studiengang.kuerzel": "MSI"}})
db.vorlesungen.find()

//b

var mapFunction = function(){emit(this.studiengang.kuerzel + " " + this.semester, {sws: this.SWS, ects: this.ECTS})};

var reduceFunction = function(key, values) { 
    var reducedObjects = {sumSWS: 0, sumECTS: 0};
    
    values.forEach(function(value){
        reducedObjects.sumSWS += value.sws;
        reducedObjects.sumECTS += value.ects;
    });
    
    return reducedObjects;
};

db.vorlesungen.mapReduce(mapFunction, reduceFunction, {out: "map_reduce"});

db.map_reduce.find().forEach(function (u){
    print(
        u._id + " : " + u.value.sumSWS + " SWS, " + u.value.sumECTS + " ECTS")});

