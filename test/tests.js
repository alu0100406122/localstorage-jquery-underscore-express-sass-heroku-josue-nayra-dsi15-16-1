var expect = chai.expect;

//Solo se testea la función calculate
describe('Comma separated values',function()
{
    describe('Function calculate',function()
    {
      it("Se genera una tabla de 4 filas",function()
      {
          /*var auxiliar = calculate("\"producto\",\"precio\"\n\"caca\",\"vaca\"\n\"producto\",\"precio\"\n\"caca\",\"vaca\"");
          $.each(aux,function(campo,valor)
          {
              console.log("Campo:"+campo+", Valor:" +valor);
              $.each(valor,function(campo1,valor1)
              {
                  console.log("Campo1: "+campo1+",valor1: "+valor1); 
              });
          });
          console.log("Longitud del tema:" + aux.length);*/
          expect(calculate("\"Animal\",\"Patas\"\n\"Perro\",\"4\"\n\"Gallina\",\"2\"\n\"Araña\",\"8\"").length).to.be.equal(4);    
      });
      
      it ('Comprobando que cada fila de la tabla generada tiene los valores correctos...',function(){
        this.original = "\"Animal\",\"Patas\"\n\"Perro\",\"4\"\n\"Gallina\",\"2\"";
        var auxiliar = calculate(this.original);
        expect(auxiliar[0].value).to.deep.equal(['Animal','Patas']);
        expect(auxiliar[1].value).to.deep.equal(['Perro', '4']);
        expect(auxiliar[2].value).to.deep.equal(['Gallina', '2']);
      })
        
    });
    
    describe('Expresión regular',function(){
      
    });
    

});