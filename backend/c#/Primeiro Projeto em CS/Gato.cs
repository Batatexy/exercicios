using System;
namespace ClinicaVeterinario
{
    //: é o extend
    public class Gato : Animal
    {
        //em java era override, aqui é virtual
        public virtual emitirSom()
        {
            Console.WriteLine("Miau");
        }
        
        
    }
}