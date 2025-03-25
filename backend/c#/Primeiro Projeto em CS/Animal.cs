using System;
namespace ClinicaVeterinario
{
    public class Animal
    {
        //C# se usa: CamelCase
        // Auto Property
        public string Nome{get; set;}
        public string Raca{get; set;}
        
        public Animal (string Nome, string Raca)
        {
            this.Nome = Nome;
            this.Raca = Raca;
        }
        
        public void emitirSom()
        {
            Console.WriteLine("Som Incrivelmente Genérico");
        }
    }
}


