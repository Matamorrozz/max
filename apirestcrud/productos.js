class productos {

    constructor(dg) {
        this.dg = dg;        
    }

    insertRecord(jsonData, callBack) {

        var sql = "insert into productos (codigo, descripcio, stock) values (?, ? ,?)"; 

        var params = [];
 
        params.push(jsonData["codigo"]); 
        params.push(jsonData["descripcion"]);
        params.push(jsonData["stock"]);

        this.dg.execute(sql, params, callBack);          
    }

    getRecords(resourceId, callBack) {

         var sql = "select codigo, descripcion, stock from productos";

         var params = []; 

         if (resourceId != "") {
             sql = sql + " where id = ?";               
             params.push(resourceId);    
         }

         this.dg.query(sql, params, callBack);
    }

    updateRecord(resourceId, jsonData, callBack) {

        var sql = "update productos set codigo = ?, descripcion = ?, stock = ?, where id = ?";

        var params = [];

        params.push(jsonData["codigo"]); 
        params.push(jsonData["descripcion"]);  
        params.push(jsonData["stock"]);   
        params.push(resourceId); 

        this.dg.execute(sql, params, callBack);
    }

    deleteRecord(resourceId, callBack) {

        var sql = "delete from productos where id = ?";

        var params = [];

        params.push(resourceId);   

        this.dg.execute(sql, params, callBack);       
    }
}

module.exports = productos;
