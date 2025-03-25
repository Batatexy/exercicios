// Animal.cs
using System;

namespace ClinicaVeterinaria 
{
    public abstract class Animal
    {
        //CamelCase no C#
        //camelCase no Java
        
        //no java era assim pra criar atributos:
        /*private string Nome;
        
        public void setNome (string Nome) {
            this.Nome = Nome;
        }
        
        public string getNome() {
            return this.Nome;
        }*/
        
        //no c# é assim:
        public string Nome {get; set;} //auto-property
        public string Raca {get; set;}
    
        public Animal (string Nome, string Raca) {
            this.Nome = Nome;
            this.Raca = Raca;
        }
    
        //criar um método que vai sofrer polimorfismo com virtual
        /*public virtual void EmitirSom() {
            Console.WriteLine("Não sei que animal eu sou!");
        } */
        
        //ou então usar um método abstrato
        //lembrando que para ter um método abstrato precisamos ter uma classe abstrata
        public abstract void EmitirSom();
    }
}