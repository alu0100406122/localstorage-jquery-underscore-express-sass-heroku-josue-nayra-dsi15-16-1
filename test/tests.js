var expect = chai.expect;

//Solo se testea la función calculate. 
//Uso de sinon

describe('Comma separated values',function()
{
    describe('Function calculate',function()
    {
        var sandbox;
        beforeEach(function()
        {
            sandbox = sinon.sandbox.create();
            sandbox.stub(window.console,"log");
            sandbox.stub(window.console, "error");
        });
        
        afterEach(function()
        {
            sandbox.restore();
        });
        
        it("Se genera una tabla de 4 filas correctamente. rowClass no devuelve ningún error",function()
        {
            expect(calculate("\"Animal\",\"Patas\"\n\"Perro\",\"4\"\n\"Gallina\",\"2\"\n\"Araña\",\"8\"").length).to.be.equal(4); 
            $.each(calculate("\"Animal\",\"Patas\"\n\"Perro\",\"4\"\n\"Gallina\",\"2\"\n\"Araña\",\"8\""),function(campo,valor)
            {
                //console.log("Campo:"+campo+", Valor:" +valor);
                $.each(valor,function(campo1,valor1)
                {
                    if(campo1 == "rowClass")
                    {
                        expect(valor1).to.not.be.equal("error");
                    }
                });
            });
        });
        it("El formato para generar la tabla no es correcto. Calculate devuelve un error en la fila 3.",function()
        {
            var aux = calculate("\"producto\",\"precio\"\n\"caca\",\"vaca\"\n\"producto\",\"precio\"\n\"caca\"");
            expect(aux[0].rowClass).to.not.be.equal("error");
            expect(aux[1].rowClass).to.not.be.equal("error");
            expect(aux[2].rowClass).to.not.be.equal("error");
            expect(aux[3].rowClass).to.be.equal("error");
        });
    });
});