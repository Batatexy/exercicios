// Cachorro.cs
using System; //biblioteca básica do C#, pra usar Console.WriteLine, string, etc

//import java.Util;

namespace ClinicaVeterinaria 
{
    public class Cachorro : Animal 
    {
        public string TipoPelo {get; set;}
    
        public Cachorro(string Nome, string Raca, string TipoPelo) : base(Nome, Raca) 
        {
            //no java a gente usava super(nome, raca);
            //construtor vazio pq a classe só usa os atributos da sua superclasse
            
            //caso tenhamos atributos proprios de cachorro, fica assim:
            this.TipoPelo = TipoPelo;
        }
        
        //@Override era no java
        public override void EmitirSom()
        {
            Console.WriteLine("O cachorro faz: Au Au!");
        }
    }
}