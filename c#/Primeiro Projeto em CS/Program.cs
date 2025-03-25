using System;

//namespace é o package
namespace ClinicaVeterinario
{
    public class Program 
    {
        public static void Main() 
        {
            //System.out.print()     //System.out.println()
            Console.Write("Hello "); Console.WriteLine("World");
    
            Animal MeuAnimal = new Animal("André", "");
            Console.WriteLine(MeuAnimal.get);
        }
        
        
        
        
        
        
    }
}


